export default defineEventHandler((event) => {

    const auth = getRouterParams(event)

    console.log('---------------->auth', auth)

    return {
        msg: 'api/foo',
        code:200
    }
})