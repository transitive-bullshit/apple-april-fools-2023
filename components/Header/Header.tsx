import * as React from 'react'
import cs from 'clsx'

import * as config from '@/lib/config'
import { ActiveLink } from '@/components/ActiveLink/ActiveLink'
import { GitHub, Twitter } from '@/icons/index'

import { Logo } from './Logo'
import styles from './styles.module.css'

export const Header: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <header className={cs(styles.header, className)}>
      <div className={styles.navHeader}>
        <ActiveLink href='/' className={styles.action} aria-label='Logo'>
          <Logo />
        </ActiveLink>

        <div className={styles.rhs}>
          <ActiveLink
            href='/about'
            className={styles.action}
            aria-label='About'
          >
            About
          </ActiveLink>

          <a
            className={cs(styles.twitter, styles.social)}
            href={config.twitterUrl}
            title={`Twitter ${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Twitter />
          </a>

          <a
            className={cs(styles.github, styles.social)}
            href={config.githubRepoUrl}
            title='View source on GitHub'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHub />
          </a>
        </div>
      </div>
    </header>
  )
}
