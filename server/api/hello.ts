export default defineEventHandler((event) => {
    console.log('---------------->event',event.context.auth)

    // const token = getCookie(event,'token')

    // if(!token){
    //     return {msg:'请登录',code:401}
    // }

    // console.log('------->token',token);

    return {
        msg: 'Hello World',
        code:200
    }
})