const server = require('./api/server.js')

const port = process.env.PORT || 54321

server.listen(port, () => {
    console.log(`\nServer running on port ${port}`)
})