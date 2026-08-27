import express from 'express'

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    return res.status(200).send(`
        <h1>Welcome to ExpressJS CTRMU Web Application</h1>
        <img src="https://picsum.photos/300/200?random=1" alt="pic" />
        <hr />
        <a href="/about">goto About CTRMU</a>
    `)
})

app.get("/about", (req, res) => {
    return res.status(200).send(`
        <h1>About CTRMU</h1>
        <hr />
        <a href="/">Homepage</a>
    `)
})

app.use((req, res) => {
    return res.status(404).json({ message: "Not Found" })
})

const host = process.env.HOST || "127.0.0.1"
const port = process.env.PORT || 3000

app.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`)
})