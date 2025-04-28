module.exports = {
    apps: [
        {
            name: 'nuxt-demo',
            script: './.output/server/index.mjs',
            args: 'start -e production'// pm2执行其实就是 `nuxt start -e production`
        }
    ]
}