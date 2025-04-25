export default defineEventHandler((event) => {

    const body = readBody(event)

    console.log(body)

    return {
        msg: 'api/post',
        code:200
    }
})