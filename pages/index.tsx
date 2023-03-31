import * as React from 'react'
import cs from 'clsx'
import TypeIt from 'typeit-react'

import * as config from '@/lib/config'
import { HeroButton } from '@/components/HeroButton/HeroButton'
import { Layout } from '@/components/Layout/Layout'
import { PageHead } from '@/components/PageHead/PageHead'

import styles from './index.module.css'

const waitlistUrl =
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'

export default function HomePage() {
  return (
    <Layout>
      <PageHead />

      <div className={styles.homePage}>
        <div className={styles.body}>
          <div className={cs(styles.section)}>
            <div className={cs(styles.hero)}>
              <h1 className={styles.title}>Apple WWDC23</h1>

              <p className={styles.desc}>{config.description}</p>

              <HeroButton
                href={waitlistUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                Join the Waitlist
              </HeroButton>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
