export default defineNuxtRouteMiddleware((to, from) =>{
    if(to.path === '/signin'){
        return
    }
    let token = sessionStorage.getItem('token')
    if(!token){
        return navigateTo('/signin')
    }
    let tmp = token.split('.')
    let data = JSON.parse(atob(tmp[1]))
    let now = (new Date().getTime())/1000
    if(now > data.exp){
        return navigateTo('/signin')
    }
})