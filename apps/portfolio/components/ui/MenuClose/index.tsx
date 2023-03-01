import useMenuStore from '@/sdk/store/menu'
import Icon from '../Icon'

export const MenuClose = () => {
  const { toggleMenu } = useMenuStore()

  return (
    <button className="text-white" onClick={() => toggleMenu(false)}>
      <Icon name="X" width={28} height={28} weight="regular" />
    </button>
  )
}

export default MenuClose
