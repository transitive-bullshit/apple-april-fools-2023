'use client'

import * as React from 'react'
import cs from 'clsx'
import Image from 'next/image'

import LogoImage from '@/public/logo-dark.svg'

import styles from './styles.module.css'

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Image
      className={cs(styles.logo, className)}
      src={LogoImage.src}
      alt='Logo'
      width={LogoImage.width}
      height={LogoImage.height}
    />
  )
}
