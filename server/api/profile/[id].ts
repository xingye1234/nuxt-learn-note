export default defineEventHandler((event) => {

    const id = getRouterParam(event, 'id') as string

    const auth = getRouterParams(event)

    console.log('---------------->auth', auth)
    return {
        msg: 'api/profile/[id]' + id,
        code: 200
    }
})