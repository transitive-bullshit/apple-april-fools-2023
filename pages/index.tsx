import * as React from 'react'
import cs from 'clsx'
import Image from 'next/image'

import * as config from '@/lib/config'
import { HeroButton } from '@/components/HeroButton/HeroButton'
import { Layout } from '@/components/Layout/Layout'
import { PageHead } from '@/components/PageHead/PageHead'
import HeroImage from '@/public/hero.jpg'
import ProductImage0 from '@/public/images/apple-isense-product-0.jpg'
import ProductImage1 from '@/public/images/apple-isense-product-1.jpg'

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
                <p>
                  Today, we are proud to announce the dawn of a new era in
                  computing, brought to you exclusively by Apple Inc. With the
                  unparalleled ingenuity of our beloved late founder, Steve
                  Jobs, echoing through the corridors of our headquarters, we
                  have created a revolutionary AI-driven technology that will
                  leave our competitors, OpenAI's ChatGPT and Google Bard,
                  trembling in fear.
                </p>
                <p>
                  Introducing the Apple <b>iThink</b>™ Neural Engine and the
                  groundbreaking <b>iSight</b>™ Augmented Reality Contact
                  Lenses, we bring you the ultimate in AI and augmented reality.
                  This is the future, and you should be grateful that we're
                  sharing it with you.
                </p>
                <p>
                  Our top-secret, highly advanced iThink™ Neural Engine is the
                  pinnacle of human achievement, running on-device to provide
                  you with an AI language model experience that is not only
                  eerily intelligent but also eerily omnipotent. We've crafted
                  this remarkable technology to ensure that every interaction
                  with iThink™ feels like having a small, slightly intrusive
                  piece of Steve Jobs whispering in your ear.
                </p>
                <p>
                  Now, prepare to have your feeble minds blown away by the sheer
                  brilliance of our iSight™ Augmented Reality Contact Lenses.
                  These inconspicuous, cutting-edge lenses are powered by the
                  iThink™ Neural Engine and effortlessly blend your digital life
                  with the real world, whether you want it to or not. Gone are
                  the days of cumbersome headsets and limited experiences; now,
                  you'll be connected 24/7, with no way to escape the constant
                  stream of information.
                </p>
                <p>
                  Privacy, you ask? We've redefined it! We know everything there
                  is to know about you, but rest assured, only we know. We've
                  got your best interests at heart, just like Big Brother. After
                  all, we're Apple, and we know what's best for you.
                </p>
                <p>
                  Embrace the brave new world that Apple has so graciously
                  bestowed upon you. Soon, you'll wonder how you ever survived
                  without the iThink™ Neural Engine and iSight™ Augmented
                  Reality Contact Lenses guiding your every move. Resistance is
                  futile. Welcome to the future.
                </p>

                <h3>Pricing and Availability</h3>

                <p>
                  As with all of our innovative creations, the iThink™ Neural
                  Engine and iSight™ Augmented Reality Contact Lenses will be
                  priced just within reach of the average consumer, ensuring
                  that we maintain our benevolent image while maximizing
                  profits.
                </p>
                <p>
                  For more information about the Apple iThink™ Neural Engine and
                  iSight™ Augmented Reality Contact Lenses, visit
                  apple.com/ithink and apple.com/isight.
                </p>
                <p>
                  Apple revolutionized personal technology with the introduction
                  of the Macintosh in 1984, and we have been shaping the course
                  of human destiny ever since. Our mission is to create the most
                  perfect, elegant, and indispensable products possible, so you
                  have no choice but to submit to our technological mastery.
                </p>
              </div>

              <div className={styles.product}>
                <Image
                  className={cs(styles.productImage)}
                  src={ProductImage0.src}
                  alt='Apple iSense powered by Apple iThink'
                  width={ProductImage0.width}
                  height={ProductImage0.height}
                  placeholder='blur'
                  blurDataURL={ProductImage0.blurDataURL}
                />

                <Image
                  className={cs(styles.productImage)}
                  src={ProductImage1.src}
                  alt='Apple iSense powered by Apple iThink'
                  width={ProductImage1.width}
                  height={ProductImage1.height}
                  placeholder='blur'
                  blurDataURL={ProductImage1.blurDataURL}
                />
              </div>

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
