import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const siteUrl = 'https://thepukhrajshow.in'
const routes = ['/', '/guest', '/podcast', '/about', '/contact', '/handles']
const publicDir = resolve(process.cwd(), 'public')

const today = new Date().toISOString().slice(0, 10)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route === '/' ? '/' : route}</loc>
    <lastmod>${today}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

await mkdir(publicDir, { recursive: true })
await writeFile(resolve(publicDir, 'sitemap.xml'), sitemap, 'utf8')
await writeFile(resolve(publicDir, 'robots.txt'), robots, 'utf8')

