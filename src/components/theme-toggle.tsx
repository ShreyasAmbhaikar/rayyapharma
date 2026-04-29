'use client';

import { useSyncExternalStore } from 'react';

import { MoonIcon, SunIcon } from '@/components/icons';
import { THEME_STORAGE_KEY, isThemeName, themeColors, type ThemeName } from '@/lib/theme';

type ThemeToggleProps = {
  className?: string;
  showLabel?: boolean;
};

const THEME_CHANGE_EVENT = 'rayya-theme-change';

function getStoredTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
}

function getSystemTheme(): ThemeName {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getCurrentTheme(): ThemeName {
  if (typeof document === 'undefined') {
    return 'light';
  }

  const activeTheme = document.documentElement.dataset.theme ?? null;

  if (isThemeName(activeTheme)) {
    return activeTheme;
  }

  const storedTheme = getStoredTheme();

  if (isThemeName(storedTheme)) {
    return storedTheme;
  }

  return getSystemTheme();
}

function getServerTheme(): ThemeName {
  return 'light';
}

function applyTheme(theme: ThemeName, shouldPersist = true, shouldNotify = true) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;

  let themeColorMeta = document.querySelector('meta[name="theme-color"]');

  if (!themeColorMeta) {
    themeColorMeta = document.createElement('meta');
    themeColorMeta.setAttribute('name', 'theme-color');
    document.head.appendChild(themeColorMeta);
  }

  themeColorMeta.setAttribute('content', themeColors[theme]);

  if (!shouldPersist) {
    return;
  }

  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // The visual theme still updates if storage is unavailable.
  }

  if (shouldNotify) {
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }
}

function subscribeToThemeChanges(onThemeChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key !== THEME_STORAGE_KEY) {
      return;
    }

    const theme = isThemeName(event.newValue) ? event.newValue : getSystemTheme();
    applyTheme(theme, false, false);
    onThemeChange();
  };

  window.addEventListener('storage', handleStorage);
  window.addEventListener(THEME_CHANGE_EVENT, onThemeChange);

  return () => {
    window.removeEventListener('storage', handleStorage);
    window.removeEventListener(THEME_CHANGE_EVENT, onThemeChange);
  };
}

export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribeToThemeChanges, getCurrentTheme, getServerTheme);
  const isDark = theme === 'dark';
  const nextTheme = isDark ? 'light' : 'dark';

  const handleToggle = () => {
    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-pressed={isDark}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      className={[
        'group inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-outline-variant/60 bg-surface-container-low/90 px-2 text-on-surface shadow-[var(--shadow-search)] backdrop-blur-sm transition-all hover:border-primary/60 hover:bg-surface-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        showLabel ? 'pl-3 pr-4' : '',
        className ?? '',
      ].join(' ')}
    >
      <span className="relative h-7 w-14 rounded-full border border-outline-variant/50 bg-surface-container-high shadow-inner transition-colors">
        <SunIcon className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary" />
        <MoonIcon className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
        <span
          className={`absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-gradient text-on-primary shadow-sm transition-transform duration-200 ${
            isDark ? 'translate-x-7' : 'translate-x-0'
          }`}
          aria-hidden="true"
        >
          {isDark ? <MoonIcon className="h-3.5 w-3.5" /> : <SunIcon className="h-3.5 w-3.5" />}
        </span>
      </span>

      {showLabel ? (
        <span className="hidden text-sm font-semibold text-on-surface md:inline">{isDark ? 'Light' : 'Dark'}</span>
      ) : null}
    </button>
  );
}
