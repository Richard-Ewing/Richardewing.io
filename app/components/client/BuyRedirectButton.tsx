'use client';

import React from 'react';

interface BuyRedirectButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'type'> {
  href: string;
  children: React.ReactNode;
}

export default function BuyRedirectButton({
  href,
  children,
  className = '',
  ...rest
}: BuyRedirectButtonProps) {
  const handleClick = () => {
    let targetHref = href;
    if (targetHref.startsWith('/api/buy/')) {
      const separator = targetHref.includes('?') ? '&' : '?';
      if (!/[?&]u=1(?:&|$)/.test(targetHref)) {
        targetHref = `${targetHref}${separator}u=1`;
      }
    }
    window.open(targetHref, '_blank', 'noopener,noreferrer');
  };

  const mergedClassName = className.includes('cursor-pointer')
    ? className
    : `${className} cursor-pointer`.trim();

  return (
    <button
      type="button"
      onClick={handleClick}
      className={mergedClassName}
      {...rest}
    >
      {children}
    </button>
  );
}
