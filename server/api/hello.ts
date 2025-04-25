export default defineEventHandler((event) => {
    console.log('---------------->event',event.context.auth)
    return {
        msg: 'Hello World',
        code:200
    }
})