import express, { Request, Response } from 'express'
import  {PrismaClient} from '@prisma/client'

const app = express()
app.use(express.json())

const prisma = new PrismaClient()

// Create user
app.post("/",  async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await prisma.user.create({
    data: {
      username: username,
      password: password
    }
  })
  res.json(user)
})

// Get user
app.get("/",  async (req: Request, res: Response) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

// Update user
app.put("/",  async (req: Request, res: Response) => {
  const { id, username } = req.body
  const updatedUser = await prisma.user.update({
    where: {
      id: id
    },
    data: {
      username: username
    }
  })
  res.json(updatedUser)
})


// Delete user
app.delete("/:id",  async(req: Request, res: Response) => {
  const id = req.params.id
  const deletedUser = await prisma.user.delete({
    where: {
      id: Number(id),
    }
  })
  res.json(deletedUser)
})


// Initialize server at Port 3001
app.listen(3001, () => {
  console.log("SERVER RUNNING ON PORT 3001 🏃🏃") 
})

