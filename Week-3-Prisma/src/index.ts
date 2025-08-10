import { PrismaClient } from "@prisma/client"
const client = new PrismaClient()

async function createUser() {
  try {
    const user = await client.user.create({
      data: {
        username: "shubh",
        password: "1235",
        age: 156,
        city: "delhi"
      }
    })
    console.log("User created:", user)
  } catch (error) {
    console.error("Error creating user:", error)
  } 
}

createUser()