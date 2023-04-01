import * as React from 'react'
import { InferGetStaticPropsType } from 'next'

import * as config from '@/lib/config'
import { Layout } from '@/components/Layout/Layout'
import { Markdown } from '@/components/Markdown/Markdown'
import { markdownToHtml } from '@/lib/markdown-to-html'

import styles from './styles.module.css'

const markdownContent = `
## About

This website is an April Fool's Day joke in anticipation of Apple's [rumored AR headset](https://www.macrumors.com/roundup/wwdc/) and their upcoming [2023 WWDC](https://developer.apple.com/wwdc23/) developer event.

I also wanted to poke fun at how far behind Apple ([and Google](https://google-waitlist.vercel.app/)) seem to have fallen in the AI arms race, with [ChatGPT](https://chat.openai.com/) recently becoming the [fastest growing consumer app in history](https://www.reuters.com/technology/chatgpt-sets-record-fastest-growing-user-base-analyst-note-2023-02-01/), and [OpenAI](https://openai.com/) continuing to make massive strides with the [release of GPT-4](https://openai.com/product/gpt-4) and [ChatGPT Plugins](https://openai.com/blog/chatgpt-plugins).

Will Apple be able to catch up? Why did I create this silly site? Read on for more details. 👇

## Tech Stack

This site is [open source](${config.githubRepoUrl}). The hand-coded portions use:

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [Next.js](https://nextjs.org)
- [Vercel](https://vercel.com)

All of the content aside from this about page was generated using various AI tools.

### GPT-4 Press Release

[GPT-4](https://openai.com/product/gpt-4) was used to generate the Apple press release with the following prompt:

> Create a fictional letter on the Apple home page announcing two revolutionary new products: an AI LLM model called iThink which runs on-device powered by Apple's neural engine and M2 chip, and a brand new augmented reality (AR) product called iSight. iSight is a pair of enhanced contact lenses, which are powered by Apple’s iThink neural engine, featuring dual 4K displays, advanced body tracking, and controller-free input. iThink makes both ChatGPT and Google Bard look like child’s play in comparison, and with iSight, you won't ever have to worry about the real world again. Make it sound slightly ominous, dystopian, and condescending, but don't make it too obvious. It should be concise and poignant with a dystopian twist.

GPT-4 was also used to create all of the witty image captions.

### Midjourney Product Images

<p align="center">
  <img alt="Midjourney Apple Image" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapple-isight-product-0.f954b970.jpg&w=2048&q=75" width="33%">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img alt="Midjourney Apple Image" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapple-isight-product-1.0b698632.jpg&w=2048&q=75" width="33%">
</p>

[Midjourney v5](https://www.midjourney.com/) was used to generate fake Apple product images, with the following prompt:

> sleek apple tech product photo of new AR contact lens, white background, clean, multicolored tinted case, 3d render, octane --v 5 --stylize 750

All of the other images were taken from either [Apple's WWDC website](https://developer.apple.com/wwdc23/) or [Black Mirror](https://www.netflix.com/title/70264888).

## Thought-Provoking Questions

#### How much longer will web developers like myself create these types of websites with hand-written code?

Large portions of this site were built using [GPT-4](https://openai.com/product/gpt-4), [Midjourney](https://www.midjourney.com/), and [GitHub Copilot](https://github.com/features/copilot), but it still takes an experienced developer to meld it all together into a cohesive whole. If I used AI to create 20% of this site today, what will that look like in a year? In 10 years?

#### What will happen when millions of websites are auto-generated by AI and the authors aren't as well-intentioned?

This whole website is a well-meaning April Fool's joke, it doesn't do anything nefarious, and the code is 100% [open source](${config.githubRepoUrl}).

But there will inevitably be people who abuse AI to spam the internet with fake articles, emails, social content, etc. Scams and misinformation will become significantly more dangerous in the near future, and it's going to be incredibly difficult to combat.

Hopefully this website provides an innocuous glimpse of what's to come.

#### Will incumbents like Apple and Google be able to catch up with the likes of OpenAI?

Or will we continue to see the classic [innovator's dilemma](https://www.amazon.com/Innovators-Dilemma-Technologies-Management-Innovation/dp/1633691780/) play out? 

On a related note, [ChatGPT Plugins](https://openai.com/blog/chatgpt-plugins) form a new type of App Store which uses natural language as a universal API to access services and data. This will have huge implications on both Apple and Google's existing App Stores. How will they respond to this new paradigm shift?

AI-powered search experiences like [Microsoft Bing](https://www.bing.com/new), [Perplexity](https://www.perplexity.ai/), [Neeva](https://neeva.com/), [Kagi](https://kagi.com/), and others are already starting to eat away at Google's search dominance – which will have huge consequences for Google's ad-driven business model as well as every business in existence with a web presence.

#### Will Apple release a foundational AI model?

I doubt that Apple will release anything as powerful or dystopian as the fictional iThink model advertised on this site.

But it seems likely that every major tech company will end up competing in this space either directly or indirectly. There's just so much value to capture. So far, [OpenAI's ChatGPT & GPT-4](https://openai.com/product/gpt-4), [Google Bard](https://bard.google.com/), and [Facebook's LLaMA](https://ai.facebook.com/blog/large-language-model-llama-meta-ai/) are some of the most promising players.

#### With the exponential progress in AI, where will this all lead over the next few years? Over the next decade?

I included a bunch of [Black Mirror](https://www.netflix.com/title/70264888) references on this site for good reason. There are _a lot_ of ways AI and AR could develop that would end up feeling pretty dystopian. There are also _a lot_ of ways that AI and AR will end up being used as tools to make people more productive and fulfilled. Hopefully. I'm sure the reality will end up being somewhere in-between, and if [AGI](https://search.bensbites.co/?query=AGI) enters the mix, it's incredibly difficult to fathom just how much our world may change.

#### Ultimately, only time will tell.

If you're as interested in these types of questions as I am, feel free to reach out on [Twitter](${config.twitterUrl}). I also run the [ChatGPT Hackers Community](${config.discordUrl}), which is home to over 7500 developers, hackers, and AI enthusiasts. Feel free to join us and say hi!

## License

**This website is not affiliated with Apple Inc in any way**. It is an open source April Fool's Day joke that is intended to showcase how quickly the world is evolving in the era of AI.

This website is [open source](${config.githubRepoUrl}). MIT © [${config.author}](${config.twitterUrl})
`

export default function AboutPage({
  content
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div className={styles.aboutPage}>
        <div className={styles.meta}>
          <h1 className={styles.title}>😂 April Fool&apos;s 😂</h1>
        </div>

        <Markdown content={content} />
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const content = await markdownToHtml(markdownContent)

  return {
    props: {
      content
    }
  }
}
