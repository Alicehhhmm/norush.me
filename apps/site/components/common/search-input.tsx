'use client';

import { Search, X } from 'lucide-react';
import { memo, useState, useEffect, useCallback } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import type React from 'react';

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  debounceMs?: number;
};

export const SearchInput = memo(
  ({
    value,
    onChange,
    placeholder = 'Search...',
    className = '',
    debounceMs = 300,
  }: SearchInputProps) => {
    const [inputValue, setInputValue] = useState(value);

    // Update local state when prop value changes
    useEffect(() => {
      setInputValue(value);
    }, [value]);

    // Debounce the onChange callback
    useEffect(() => {
      const handler = setTimeout(() => {
        if (inputValue !== value) {
          onChange(inputValue);
        }
      }, debounceMs);

      return () => {
        clearTimeout(handler);
      };
    }, [inputValue, value, onChange, debounceMs]);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
      },
      []
    );

    const handleClear = useCallback(() => {
      setInputValue('');
      onChange('');
    }, [onChange]);

    return (
      <div className={`relative ${className}`}>
        <Search
          className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-500"
          aria-hidden="true"
        />
        <Input
          type="text"
          placeholder={placeholder}
          className="h-12 rounded-full border border-gray-200 bg-white pr-10 pl-10 text-base"
          value={inputValue}
          onChange={handleChange}
          aria-label={placeholder}
        />
        {inputValue && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-2 h-8 w-8 -translate-y-1/2 rounded-full hover:bg-gray-100"
            onClick={handleClear}
            type="button"
            aria-label="Clear search"
          >
            <X className="h-4 w-4 text-gray-500" aria-hidden="true" />
          </Button>
        )}
      </div>
    );
  }
);
