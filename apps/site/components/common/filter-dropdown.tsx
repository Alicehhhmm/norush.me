'use client';

import { Check, ChevronDown } from 'lucide-react';
import { memo } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export type FilterOption = {
  id: string;
  label: string;
};

type FilterDropdownProps = {
  label: string;
  options: Array<FilterOption>;
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export const FilterDropdown = memo(
  ({
    label,
    options,
    value,
    onChange,
    className = '',
  }: FilterDropdownProps) => {
    // Find the selected option label
    const selectedOption = options.find(option => option.id === value);

    return (
      <div className={`relative ${className}`}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex min-w-32 items-center justify-between gap-1 px-4"
              aria-label={`${label} filter`}
            >
              <span className="mr-1">{label}:</span>
              <span className="font-medium">{selectedOption?.label}</span>
              <ChevronDown
                className="ml-1 h-4 w-4 transition-transform"
                aria-hidden="true"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {options.map(option => (
              <DropdownMenuItem
                key={option.id}
                className="flex cursor-pointer items-center justify-between"
                onSelect={() => onChange(option.id)}
              >
                <span>{option.label}</span>
                {option.id === value && (
                  <Check className="text-primary h-4 w-4" aria-hidden="true" />
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
);
