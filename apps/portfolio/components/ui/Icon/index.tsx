'use client'

import * as Icons from 'phosphor-react'
import type * as T from './types'

export const Icon = ({
  name = 'Question',
  children,
  ...props
}: T.IconProps) => {
  const IconComponent = Icons[name] as React.FC<T.IconPropsDefault>

  return <IconComponent {...props}>{children}</IconComponent>
}

export default Icon
