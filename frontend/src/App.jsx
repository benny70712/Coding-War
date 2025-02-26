import { useEffect, useState } from "react"
import axios from "axios"
function App() {
  const [count, setCount] = useState(0)
  const [fruits, setFruits] = useState([])

  const fetchAPI = async() => {
    try {
      const response = await axios.get("http://localhost:5000/api")
      const data = response.data.fruits
      setFruits(data)
    } catch(error) {
      console.log(error)
    }
    
  }

  useEffect(() => {
    fetchAPI()
  }, [])


  useEffect(() => {
    console.log(fruits)
  }, [fruits])

  return (
    <>
      {fruits.map((fruit, index) => <div key={index}>{fruit}</div>) }
    </>
  )
}

export default App
