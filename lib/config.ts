export const environment = process.env.NODE_ENV || 'development'
export const isDev = environment === 'development'
export const isServer = typeof window === 'undefined'
export const isSafari =
  !isServer && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

export const title = 'Apple WWDC23'
export const description =
  'Join the Apple developer community for an all-online Apple Worldwide Developers Conference.'
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
