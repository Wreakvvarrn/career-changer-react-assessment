import { useState } from 'react'
import Layout from './Layout'
import Button from './Button'

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {

  return (
    <Layout>
      <div>
        <h1>Generation Thailand</h1>
        <h1>React - Assessment</h1>
        <Button />
      </div>
    </Layout>
  )
}


export { mockEmployees }
export default Home
