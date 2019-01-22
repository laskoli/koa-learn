const Koa = require('koa')
const app = new Koa()

app.use(async(ctx)=>{
    let url = ctx.url

    // obtain from context request object 
    let request = ctx.request
    let req_query = request.query
    let req_querystring = request.querystring

    // obtain from context
    let ctx_query = ctx.query
    let ctx_querystring = ctx.querystring

    ctx.body = {
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }

})

app.listen(3000, ()=>{
    console.log('[deomo]')
})