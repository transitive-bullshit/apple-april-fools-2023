import * as React from 'react'
import cs from 'clsx'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'

import styles from './styles.module.css'

const inter = Inter({ subsets: ['latin'] })

const sfProDisplayRegular = localFont({
  src: '../../public/fonts/sf-pro-display_regular.woff2'
})

const sfProDisplaySemiBold = localFont({
  src: '../../public/fonts/sf-pro-display_semibold.woff2'
})

const sfProTextRegular = localFont({
  src: '../../public/fonts/sf-pro-text_regular.woff2'
})

const sfProTextSemiBold = localFont({
  src: '../../public/fonts/sf-pro-text_semibold.woff2'
})

const sfProDisplayRegularItalic = localFont({
  src: '../../public/fonts/SF-Pro-Display-RegularItalic.otf'
})

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cs(styles.container, sfProDisplayRegular.className)}>
      <Header className={styles.header} />

      <main className={styles.main}>{children}</main>

      <Footer className={styles.footer} />
    </div>
  )
}
