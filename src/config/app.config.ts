

export const envConfiguration = () => ({
    enviroment: process.env.NODE_ENV || 'development',
    mongodb: process.env.MONGODB_URL,
    port: process.env.PORT || 3000,
    defaultLimit: process.env.DEFAULT_LIMIT || 10,
    defaultOffset: process.env.DEFAULT_OFFSET || 0,
})