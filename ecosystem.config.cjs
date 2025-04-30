module.exports = {
    apps: [
        {
            name: 'nuxt-demo',
            script: './.output/server/index.mjs',
            // args: 'start -e production'// pm2执行其实就是 `nuxt start -e production`
        }
    ]
}

// module.exports = {
//     apps: [
//       {
//         name: 'nuxt-app',
//         script: 'node_modules/.bin/nuxt',
//         args: 'dev',
//         interpreter: 'none',
//         cwd: 'D:/Learning/nuxt-demo',
//         watch: true,
//         env: {
//           NODE_ENV: 'development'
//         }
//       }
//     ]
//   }