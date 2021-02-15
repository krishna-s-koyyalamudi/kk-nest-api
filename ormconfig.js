  
module.exports = {
    type: process.env.DATABASE_TYPE,
    database: process.env.DATABASE_NAME,
    entities: ["User","Location"],
    subscribers: ["dist/subscribers/**/*.js"],
}