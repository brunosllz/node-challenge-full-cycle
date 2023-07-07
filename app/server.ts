import express from 'express'
import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const app = express()
const prisma = new PrismaClient()

app.get('/', async (req, res) => {
  await prisma.people.create({
    data: {
      name: faker.person.fullName()
    }
  })

  const fetchManyPeoples = await prisma.people.findMany()

  const content = `
    <h1>Full Cycle Rocks!</h1>
    <ul>
    ${fetchManyPeoples.map(people => {
    return `
              <li>${people.name}</li>
          `}).join('')}
    </ul>
  `
  res.send(content)
})

app.listen(3333, () => {
  console.log("🚀 Server running!")
})