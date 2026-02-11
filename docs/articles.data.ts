import { createContentLoader } from 'vitepress'

export interface Article {
  title: string
  category: string
  date: string
  author: string
  lead: string
  image?: string
  href: string
  section: string
}

export declare const data: Article[]

export default createContentLoader('{reviews,science,beauty}/*.md', {
  transform(rawData) {
    return rawData
      .filter(page => !page.url.endsWith('/'))
      .map(page => ({
        title: page.frontmatter.title,
        category: page.frontmatter.category,
        date: page.frontmatter.date,
        author: page.frontmatter.author,
        lead: page.frontmatter.lead,
        image: page.frontmatter.image,
        href: page.url,
        section: page.url.split('/')[1]
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }
})
