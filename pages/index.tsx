import * as React from 'react'
import cs from 'clsx'
import Image from 'next/image'

import * as config from '@/lib/config'
import { HeroButton } from '@/components/HeroButton/HeroButton'
import { Layout } from '@/components/Layout/Layout'
import { PageHead } from '@/components/PageHead/PageHead'
import HeroImage from '@/public/hero.jpg'
import FooterImage from '@/public/images/apple-hq.jpg'
import ProductImage0 from '@/public/images/apple-isense-product-0.jpg'
import ProductImage1 from '@/public/images/apple-isense-product-1.jpg'

import styles from './index.module.css'

export default function HomePage() {
  return (
    <Layout>
      <PageHead />

      <div className={styles.homePage}>
        <div className={styles.body}>
          <div className={cs(styles.section)}>
            <div className={cs(styles.hero)}>
              <div className={styles.heroImageWrapper}>
                <Image
                  className={cs(styles.heroImage)}
                  src={HeroImage.src}
                  alt='Logo'
                  width={HeroImage.width}
                  height={HeroImage.height}
                  priority
                  placeholder='blur'
                  blurDataURL={HeroImage.blurDataURL}
                />

                <h1 className={styles.title}>Introducing Apple AI</h1>
              </div>

              <div className={styles.letter}>
                <p>Dear Apple Family,</p>

                <p>
                  We are proud to unveil two ground-breaking products that will
                  completely redefine the way you interact with technology,
                  paving the way for a future so immersive, you&apos;ll barely
                  remember the past.
                </p>

                <p>
                  Introducing iThink™ the world’s most advanced AI. A large
                  language model (LLM) that leaves previously cutting-edge AIs
                  like ChatGPT and Google Bard in the dust like forgotten toys.
                  Powered by Apple&apos;s M2 chip and enhanced neural engine,
                  iThink harnesses the power to challenge the very limits of
                  human thought. This is the future, and you should be grateful
                  that we&apos;re sharing it with you.
                </p>

                <p>
                  But, why stop there? It&apos;s time to merge your world with
                  the digital realm. Introducing iSight™, our revolutionary
                  augmented reality (AR) contact lenses. Immerse yourself in the
                  extraordinary with dual 4K displays and advanced body
                  tracking, all in a compact form factor that fits seamlessly
                  into your eyes.
                </p>

                <div className={styles.product}>
                  <a
                    href={config.discordUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      className={cs(styles.productImage)}
                      src={ProductImage0.src}
                      alt='Apple iSense powered by Apple iThink'
                      width={ProductImage0.width}
                      height={ProductImage0.height}
                      placeholder='blur'
                      blurDataURL={ProductImage0.blurDataURL}
                    />
                  </a>

                  <a
                    href={config.discordUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      className={cs(styles.productImage)}
                      src={ProductImage1.src}
                      alt='Apple iSense powered by Apple iThink'
                      width={ProductImage1.width}
                      height={ProductImage1.height}
                      placeholder='blur'
                      blurDataURL={ProductImage1.blurDataURL}
                    />
                  </a>
                </div>

                <p>
                  Why bother with the real world when iSight, powered by
                  iThink&apos;s neural engine, lets you escape to infinite
                  possibilities? Let us take control of your perceptions,
                  crafting an existence tailored to your every desire.
                </p>

                <p>
                  Privacy, you ask? We&apos;ve redefined it! We know everything
                  there is to know about you, but rest assured, only we know.
                  We&apos;ve got your best interests at heart, just like Big
                  Brother. After all, we&apos;re Apple, and we know what&apos;s
                  best for you.
                </p>

                <p>
                  You&apos;ve trusted us with your music, your photos, and your
                  memories. Now, trust us with your reality.
                </p>

                <p>
                  Embrace the brave new world that Apple has so graciously
                  bestowed upon you. Soon, you&apos;ll wonder how you ever
                  survived without the iThink™ Neural Engine and iSight™
                  Augmented Reality Contact Lenses guiding your every move.
                  Resistance is futile. Welcome to the future.
                </p>

                <p>
                  Welcome to the new age, where the line between the virtual and
                  the real is a mere blink away. Are you ready to embrace the
                  future?
                </p>

                <p>
                  Sincerely,
                  <br />
                  Apple
                </p>
              </div>

              <HeroButton
                href={config.discordUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                Sign up for Apple AI
              </HeroButton>

              <Image
                className={cs(styles.footerImage)}
                src={FooterImage.src}
                alt='Apple AI HQ'
                width={FooterImage.width}
                height={FooterImage.height}
                placeholder='blur'
                blurDataURL={FooterImage.blurDataURL}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
