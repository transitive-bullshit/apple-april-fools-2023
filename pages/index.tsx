import * as React from 'react'
import cs from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import * as config from '@/lib/config'
import { HeroButton } from '@/components/HeroButton/HeroButton'
import { Layout } from '@/components/Layout/Layout'
import { PageHead } from '@/components/PageHead/PageHead'
import FooterImage from '@/public/images/apple-hq.jpg'
import ProductImage0 from '@/public/images/apple-isight-product-0.jpg'
import ProductImage1 from '@/public/images/apple-isight-product-1.jpg'
import UIImage2 from '@/public/images/black-mirror-0.jpg'
import UIImage3 from '@/public/images/black-mirror-1.jpg'
import UserImage1 from '@/public/images/black-mirror-3.jpg'
import UserImage2 from '@/public/images/black-mirror-5.jpg'
import UserImage3 from '@/public/images/black-mirror-6.jpg'
import UserImage0 from '@/public/images/black-mirror-7.webp'
import UIImage0 from '@/public/images/contact-0.jpg'
import UIImage1 from '@/public/images/contact-1.jpg'
import HeroImage from '@/public/images/hero.jpg'

import styles from './index.module.css'

const productImages = [
  {
    image: ProductImage0,
    alt: 'Apple iSight powered by Apple iThink',
    // caption: 'Apple iSight case: charged by the power of your dopamine.'
    caption:
      "Apple iSight's revolutionary case is charged by the power of your own, naturally produced dopamine."
  },
  {
    image: ProductImage1,
    alt: 'Apple iSight powered by Apple iThink',
    caption:
      "Enhance reality with Apple iSight's contact lenses featuring dual 4K displays."
  }
]

const uiImages = [
  {
    image: UIImage0,
    alt: 'Apple iSight powered by Apple iThink',
    caption: 'Visionary lenses: redefine your perspective on reality.'
  },
  {
    image: UIImage1,
    alt: 'Apple iSight powered by Apple iThink',
    caption: 'AR at a glance: unrivaled immersion with the blink of an eye.'
  },
  {
    image: UIImage2,
    alt: 'Apple iSight powered by Apple iThink',
    caption:
      'Surveillance on demand: watch and be watched. All iSight data is used for training future iterations of the iThink AI.'
  },
  {
    image: UIImage3,
    alt: 'Apple iSight powered by Apple iThink',
    caption:
      "Augmented awareness: iSight's projections will completely reshape your worldview."
  }
]

const userImages = [
  {
    image: UserImage3,
    alt: 'Apple iSight powered by Apple iThink',
    caption:
      'Social credit scores: instantly visualize the worth of everyone around you.'
  },
  {
    image: UserImage0,
    alt: 'Apple iSight powered by Apple iThink',
    caption: 'Inescapable AR: virtual and reality, forever intertwined.'
  },
  {
    image: UserImage1,
    alt: 'Apple iSight powered by Apple iThink',
    caption:
      'Disoriented in dystopia: iSight lenses may blur the lines of reality.'
  },
  {
    image: UserImage2,
    alt: 'Apple iSight powered by Apple iThink',
    caption: 'Virtual dependence: a world that makes reality obsolete.'
    // caption: 'Artificially induced sleep: Surrender your consciousness to iSight.'
  }
]

export default function HomePage() {
  return (
    <Layout>
      <PageHead />

      <div className={styles.homePage}>
        <div className={styles.body}>
          <div className={cs(styles.section)}>
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
                We are proud to unveil two groundbreaking new products that will
                completely redefine the way you interact with technology, paving
                the way for a future so immersive, you&apos;ll barely remember
                the past.
              </p>

              <p>
                Introducing <b>iThink</b>™, the world’s most advanced AI. iThink
                is a large language model (LLM) that leaves previous AIs like
                ChatGPT in the dust like forgotten toys. Powered by our M2
                chip's next-gen neural engine, iThink harnesses the power to
                challenge the very limits of human thought. This is the future,
                and you should be grateful that we&apos;re sharing it with you.
              </p>

              <p>
                But, why stop there? It&apos;s time to merge your world with the
                digital realm.
              </p>

              <p>
                Introducing <b>iSight</b>™, our revolutionary augmented reality
                (AR) contact lenses. Immerse yourself in the extraordinary with
                dual 4K displays and advanced body tracking, all in a compact
                form factor that fits seamlessly into your eyes.
              </p>

              <p>
                Why bother with the real world when iSight lets you explore
                infinite better worlds? Let us take control of your perception,
                crafting an existence tailored to your every desire.
              </p>

              <p>
                Privacy, you ask? We&apos;ve redefined it! We know everything
                there is to know about you, but rest assured, only we know.
                You&apos;ve already trusted us with your music, your photos, and
                your memories. Now, trust us with your reality.
              </p>

              <p>
                Embrace the brave new world that Apple has so graciously
                bestowed upon you. Soon, you&apos;ll wonder how you ever
                survived without the iThink AI and iSight AR lenses guiding your
                every decision.
              </p>

              <p>
                Welcome to the dawn of a new age, where the line between virtual
                and reality flips in a blink of an eye. Are you ready to
                literally think different?
              </p>

              <p>
                Sincerely,
                <br />
                Apple
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h1>Apple iSight</h1>

            <div className={styles.product}>
              {productImages.map((productImage, index) => (
                <div className={styles.productImageWrapper} key={index}>
                  <Link href='/about'>
                    <Image
                      className={cs(styles.productImage)}
                      src={productImage.image.src}
                      alt={productImage.alt}
                      width={productImage.image.width}
                      height={productImage.image.height}
                      placeholder='blur'
                      blurDataURL={productImage.image.blurDataURL}
                    />
                  </Link>

                  {productImage.caption && <p>{productImage.caption}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h1>Augmented Reality</h1>

            <div className={styles.product}>
              {uiImages.map((productImage, index) => (
                <div className={styles.productImageWrapper} key={index}>
                  <Link href='/about'>
                    <Image
                      className={cs(styles.productImage)}
                      src={productImage.image.src}
                      alt={productImage.alt}
                      width={productImage.image.width}
                      height={productImage.image.height}
                      placeholder='blur'
                      blurDataURL={productImage.image.blurDataURL}
                    />
                  </Link>

                  {productImage.caption && <p>{productImage.caption}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h1>Satisfied Users</h1>

            <div className={styles.product}>
              {userImages.map((productImage, index) => (
                <div className={styles.productImageWrapper} key={index}>
                  <Link href='/about'>
                    <Image
                      className={cs(styles.productImage)}
                      src={productImage.image.src}
                      alt={productImage.alt}
                      width={productImage.image.width}
                      height={productImage.image.height}
                      placeholder='blur'
                      blurDataURL={productImage.image.blurDataURL}
                    />
                  </Link>

                  {productImage.caption && <p>{productImage.caption}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <HeroButton href='/about'>Sign up for Apple AI</HeroButton>
          </div>

          <div className={styles.section}>
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
    </Layout>
  )
}
