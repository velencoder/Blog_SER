const Koa = require('koa')
const app = new Koa()
// demos/04.js
const fs = require('fs')

// demos/05.js
const main = ctx => {
  if (ctx.request.path !== '/') {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">Index Page</a>'
  } else {
    ctx.response.body = 'Hello World'
  }
}

app.use(main)
app.listen(3000)
