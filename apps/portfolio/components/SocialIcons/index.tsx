'use client'
import Icon from '@/components/ui/Icon'
import { useState } from 'react'

type CustomSocialProps = {
  nameIcon: 'LinkedinLogo' | 'GithubLogo' | 'InstagramLogo' | 'EnvelopeSimple'
  href: string
}

const CustomSocial = ({ nameIcon, href }: CustomSocialProps) => {
  const [weight, setWeight] = useState<'regular' | 'fill'>('regular')

  return (
    <a
      href={href}
      target="_blank"
      onMouseEnter={() => setWeight('fill')}
      onMouseLeave={() => setWeight('regular')}
    >
      <Icon name={nameIcon} weight={weight} width={28} height={28} />
    </a>
  )
}

export const SocialIcons = () => {
  return (
    <div className="flex items-center gap-3">
      <CustomSocial
        nameIcon="LinkedinLogo"
        href="https://www.linkedin.com/in/guilherme-fontes-amorim/"
      />
      <CustomSocial nameIcon="GithubLogo" href="https://github.com/Yokaito" />
      <CustomSocial
        nameIcon="InstagramLogo"
        href="https://www.instagram.com/gui.fontes.amorim/"
      />
      <CustomSocial
        nameIcon="EnvelopeSimple"
        href="mailto:gui.fontes.amorim@gmail.com"
      />
    </div>
  )
}

export default SocialIcons
