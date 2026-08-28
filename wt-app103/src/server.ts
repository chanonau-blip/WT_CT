import express, {type Express, type Request,type Response} from 'express'
import "dotenv/config"

const app:Express = express()

app.use(express.json())

app.get("/", (req:Request, res:Response) => {
    return res.status(200).json({message: "Hello CT"})
})

app.use((req:Request, res:Response)=>{
    const error = new Error ("Not Found")
    return res.status(404).json({message: error.message})
})

const host = String(process.env.HOST || "0.0.0.0" )
const port = Number(process.env.PORT|| 3000 )
app.listen(port, host, ()=>{
    console.log(`server running on http://${host}:${port} `)
})