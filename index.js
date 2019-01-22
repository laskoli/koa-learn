// const Koa = require('koa')
// const app = new Koa()

// app.use( async ( ctx ) => {
//   let url = ctx.request.url
//   ctx.body = 'hello koa2, ' + url + '.'
// })

// app.listen(3000)
// console.log('[demo] start-quick is starting at port 3000')

const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

const Router = require('koa-router')

let home = new Router()

// sub router 1
home.get('/', async(ctx)=>{
  let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
  ctx.body = html
})

// sub router 2
let page = new Router()
page.get('/404', async(ctx)=>{
  ctx.body = '404 page!'
}).get('/helloworld', async(ctx)=>{
  ctx.body = 'helloworld page!'
})

// render router
let router = new Router()
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

// load routers
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, ()=>{
  console.log('[demo] route-use-middleware is starting at port 3000')
})

// function render(page) {
//   console.log(page)
//   return new Promise((resolve, reject) => {
//     let viewUrl =  `./view/${page}`
//     fs.readFile(viewUrl, "binary", (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }

// async function route(url) {
//   let view = '404.html'
//   switch(url) {
//     case '/':
//       view = 'index.html'
//       break
//     case '/index':
//       view = 'index.html'
//       break
//     case '/todo':
//       view = 'todo.html'
//       break
//     case '/404':
//       view = '404.html'
//       break
//     default: 
//       break

//   }

//   let html = await render(view)
//   return html
// }

// app.use(async(ctx)=>{
//   let url = ctx.request.url
//   let html = await route(url)
//   ctx.body = html
// })

// app.listen(3000)
// console.log('demo route')
