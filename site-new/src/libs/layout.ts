import type { HTMLAttributes, HTMLTag } from 'astro/types'

// TODO(HiDeoo) Not sure yet if a union of literal strings is the best way to handle this, need to see more of the
// current usage in the existing docs but it's at least strictly typed for now.
export type Layout = 'docs' | 'examples' | undefined

export type LayoutOverridesHTMLAttributes<TTag extends HTMLTag> = HTMLAttributes<TTag> & {
  [key in `data-${string}`]: string
}