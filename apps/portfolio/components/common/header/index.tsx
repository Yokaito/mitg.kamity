import PersonImage from '@/assets/person.jpg'
import Image from 'next/image'
import SocialIcons from '@/components/SocialIcons'
import Icon from '@/components/ui/Icon'

export const Header = () => {
  return (
    <header className="bg-gray-800 md:fixed md:inset-y-0 md:flex md:w-[360px] md:flex-col border-r border-slate-200/25">
      <div className="relative z-10 flex flex-col justify-between flex-auto min-h-full px-4 pt-10 pb-4 mx-auto">
        <div className="flex flex-col gap-3">
          <div>
            <Image
              className="border rounded-full border-slate-200/75"
              src={PersonImage.src}
              width={180}
              height={180}
              alt="person"
              priority
            />
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-center">
              Guilherme Fontes Amorim
            </span>
            <span className="text-xs text-right">Software Engineer</span>
          </div>
          <SocialIcons />
          <div className="flex flex-col gap-3">
            <a href="https://goo.gl/maps/caHrhs8Js51wXG8B9" target="_blank">
              <div className="flex items-center gap-3">
                <Icon
                  name="MapPinLine"
                  height={18}
                  width={18}
                  weight="regular"
                />
                <span className="text-sm text-right">Nova Andradina, MS</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/company/codeby" target="_blank">
              <div className="flex items-center gap-3">
                <Icon
                  name="Buildings"
                  height={18}
                  width={18}
                  weight="regular"
                />
                <span className="text-sm text-right">@Codeby</span>
              </div>
            </a>
          </div>
        </div>
        <aside>Footer</aside>
      </div>
    </header>
  )
}

export default Header
