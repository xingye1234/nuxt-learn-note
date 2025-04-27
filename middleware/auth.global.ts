export default defineNuxtRouteMiddleware((to, from) => {

    const authorization = useResponseHeader('authorization')
    
    console.log('------->global middleware authorization',authorization.value);

    // console.log('------->path',to.path, from.path);

})