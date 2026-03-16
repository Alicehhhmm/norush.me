import type {
  SVGProps,
  AnchorHTMLAttributes,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
} from 'react';

export type TailwindSVG = SVGProps<SVGSVGElement> & { tw?: string };
export type LinkLike =
  | JSXElementConstructor<AnchorHTMLAttributes<HTMLAnchorElement>>
  | 'a';

export type FormattedMessage =
  | string
  | ReactElement<HTMLElement, string | JSXElementConstructor<HTMLElement>>
  | ReadonlyArray<ReactNode>;
