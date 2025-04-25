module.exports = {
    apps: [
        {
            name: 'nuxt-demo',
            script: './node_modules/nuxt/bin/nuxt.mjs',
            args: 'start -e production'// pm2执行其实就是 `nuxt start -e production`
        }
    ]
}