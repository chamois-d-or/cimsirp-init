import * as prismic from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'
import sm from './sm.json'

export const endpoint = process.env.API_ENDPOINT ? process.env.API_ENDPOINT : sm.apiEndpoint
export const repositoryName = prismic.getRepositoryName(endpoint)

//Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case 'home-page':
      return `/${doc.lang}`
    case 'page':
      return `/${doc.lang}/${doc.uid}`
    case 'blog-page':
      return `/${doc.lang}/blog/${doc.uid}`
    case 'product-page':
      return `/${doc.lang}/product/${doc.uid}`
      case 'category-page':
        return `/${doc.lang}/category/${doc.uid}`
    default:
      return null
  }
}

// This factory function allows smooth preview setup
export function createClient(config = {}) {
  const client = prismic.createClient(endpoint, {
    ...config
  })

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}