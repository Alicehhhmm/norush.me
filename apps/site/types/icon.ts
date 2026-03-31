import type { LucideIcon } from 'lucide-react';
import type { FC, ForwardRefExoticComponent, SVGProps } from 'react';

export type RIconType =
  | string
  | LucideIcon
  | FC<SVGProps<SVGSVGElement>>
  | ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
