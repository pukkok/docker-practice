// 간단한 Node.js 서버
const http = require("http")

// const hostname = "0.0.0.0" // Docker에서 모든 네트워크 인터페이스에서 접근 가능
const hostname = "localhost" // Docker에서 모든 네트워크 인터페이스에서 접근 가능
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "text/plain")
  res.end("Hello, Docker with Node.js!\n")
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
