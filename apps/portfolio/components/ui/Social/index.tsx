import Personal from '@/assets/person.jpg'
import Image from 'next/image'
import SocialIcons from '@/components/ui/SocialIcons'
import Icon from '../Icon'

export const Social = () => {
  return (
    <div className="flex flex-col gap-2">
      <Image
        className="border rounded-full border-slate-200/50"
        src={Personal.src}
        width={180}
        height={180}
        alt="person kamity"
      />
      <div className="flex flex-col">
        <h2 className="text-base text-white">Guilherme Fontes Amorim</h2>
        <span className="text-sm text-right text-white">Software Engineer</span>
      </div>
      <SocialIcons />
      <div className="flex flex-col gap-2 mt-4 text-white">
        <a href="https://goo.gl/maps/ZWu63qqvm6uheFBn7" target="_blank">
          <div className="flex items-center gap-2">
            <Icon name="MapPin" width={18} height={18} weight="regular" />
            <span>Nova Andradina, MS</span>
          </div>
        </a>
        <a href="https://codeby.global/" target="_blank">
          <div className="flex items-center gap-2">
            <Icon name="Buildings" width={18} height={18} weight="regular" />
            <span>@Codeby</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Social
