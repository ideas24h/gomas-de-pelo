const fs = require('fs')
const moment = require('moment')
const slugify = require('@sindresorhus/slugify')

const title = process.argv[2]
const blogdir = './posts'
const postDate = moment().format('YYYY-MM-DD HH:mm:ss')

if (!title) {
  console.log('❌  Please specify a post title.')
  return
}

const basename = `${slugify(title)}`

const contents = `---
title: "${title}"
description: ""
---
`

fs.writeFile(`${blogdir}/${basename}.md`, contents, () => console.log(`✔ Created ${blogdir}/${basename}.md`))
