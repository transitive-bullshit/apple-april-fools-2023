import * as React from 'react'
import cs from 'clsx'
import localFont from 'next/font/local'

import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'

import styles from './styles.module.css'

const sfProDisplayRegular = localFont({
  src: '../../public/fonts/sf-pro-display_regular.woff2'
})
const sfProDisplaySemiBold = localFont({
  src: '../../public/fonts/sf-pro-display_semibold.woff2'
})

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cs(
        styles.container,
        sfProDisplaySemiBold,
        sfProDisplayRegular.className
      )}
    >
      <Header className={styles.header} />

      <main className={styles.main}>{children}</main>

      <Footer className={styles.footer} />
    </div>
  )
}
