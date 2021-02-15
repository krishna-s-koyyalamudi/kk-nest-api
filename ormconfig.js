  
module.exports = {
    type: process.env.DATABASE_TYPE,
    database: process.env.DATABASE_NAME,
    entities: ["User"],
    subscribers: ["dist/subscribers/**/*.js"],
}