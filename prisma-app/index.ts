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

// Create many cars
app.post("/create-many-cars", async(req: Request, res: Response) => {
  const { carList } = req.body
  const cars = await prisma.car.createMany({
    data: carList
  })

  res.json(cars)
})

// Create multiple users
app.post("/create-multiple-users",  async (req: Request, res: Response) => {
  const { userList } = req.body;
  const users = await prisma.user.createMany({
    data: userList
  })
  res.json(users)
})

// Get All users
app.get("/",  async (req: Request, res: Response) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

// Get All users with cars
app.get("/users/cars",  async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({
    include: { cars: true }
  })
  res.json(users)
})

// Get single user
app.get("/:id", async(req: Request, res: Response) => {
  const id = req.params.id

  const user = await prisma.user.findUnique({
    where: {
      id: Number(id)
    }
  })
  res.json(user)
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

