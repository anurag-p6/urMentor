import express from "express"
import { Request, Response } from "express"

const app = express();
app.use(express.json());

app.post("/app/user/signup",(req:Request,res:Response) =>{
   const { gmail } = req.body;
   const { password } = req.body;
})

app.post("/app/user/signin",(req:Request,res:Response) =>{
  const { gmail } = req.body;
  const { password } = req.body;
})


app.listen(3000,() => {
  console.log("Listen at port 3000")
})