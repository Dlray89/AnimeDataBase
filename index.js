//require server here
const server = require("./server")

//set PORT up Here
const PORT = 5000


//set up server listen here
server.listen(PORT, () => {
console.log(`\n ** Server is listening on http://localhost:${PORT} ** \n`)
})