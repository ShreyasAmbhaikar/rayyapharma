'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

import { SearchIcon } from '@/components/icons';
import { findProductByQuery } from '@/content/products';

type ProductSearchFormProps = {
  buttonClassName: string;
  formClassName?: string;
  inputClassName: string;
  onNavigate?: () => void;
  shellClassName: string;
};

export function ProductSearchForm({
  buttonClassName,
  formClassName,
  inputClassName,
  onNavigate,
  shellClassName,
}: ProductSearchFormProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedQuery = query.trim();
    const matchingProduct = trimmedQuery ? findProductByQuery(trimmedQuery) : undefined;
    const target = trimmedQuery ? matchingProduct?.href ?? '/products/' : '/products/';

    onNavigate?.();
    startTransition(() => router.push(target));
  };

  return (
    <form onSubmit={handleSubmit} className={formClassName} role="search" aria-label="Search products">
      <div className={shellClassName}>
        <input
          type="search"
          name="query"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search products"
          className={inputClassName}
          aria-label="Search products"
        />
        <button type="submit" className={buttonClassName} aria-label="Search" disabled={isPending}>
          <SearchIcon className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}
