'use client'

import useMenuStore from '@/sdk/store/menu'
import Icon from '../Icon'

export const MenuToggle = () => {
  const { toggleMenu } = useMenuStore()

  return (
    <>
      <button
        className="focus:outline-none"
        aria-label="toggle menu"
        onClick={() => toggleMenu(true)}
      >
        <Icon
          className="text-white"
          height={28}
          width={28}
          name="List"
          weight="regular"
        />
      </button>
    </>
  )
}

export default MenuToggle
