import type * as IconTypes from 'phosphor-react'
import type { IconProps as PropsIconsPhosphor } from 'phosphor-react'

export type IconName = keyof typeof IconTypes
export type IconPropsDefault = PropsIconsPhosphor
export type IconProps = PropsIconsPhosphor & {
  name: IconName
  children?: React.ReactNode
}
