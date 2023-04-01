export const environment = process.env.NODE_ENV || 'development'
export const isDev = environment === 'development'
export const isServer = typeof window === 'undefined'
export const isSafari =
  !isServer && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

export const title = 'Apple AI'
export const titleLong = 'Introducing Apple AI'
export const description =
  "Apple AI is proud to announce Apple iThink and Apple iSight. iThink is the world's most powerful AI LLM, and iSight is a revolutionary new set of augmented reality (AR) contact lenses that will redefine how you see the world. Happy April Fool's Day 2023! 😂"
export const domain = 'apple-april-fools-2023.vercel.app'

export const author = 'Travis Fischer'
export const twitter = 'transitive_bs'
export const twitterUrl = `https://twitter.com/${twitter}`
export const discordUrl = `https://www.chatgpthackers.dev`
export const githubRepoUrl =
  'https://github.com/transitive-bullshit/apple-april-fools-2023'
export const githubSponsorsUrl =
  'https://github.com/sponsors/transitive-bullshit'
export const copyright = `Copyright 2023 ${author}`
export const madeWithLove = 'Made with ❤️ in Brooklyn, NY'

export const port = process.env.PORT || '3000'
export const prodUrl = `https://${domain}`
export const url = isDev ? `http://localhost:${port}` : prodUrl

export const apiBaseUrl =
  isDev || !process.env.VERCEL_URL ? url : `https://${process.env.VERCEL_URL}`

// these must all be absolute urls
export const socialImageUrl = `${url}/social.png`
