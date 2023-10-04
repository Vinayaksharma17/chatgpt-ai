import { useState } from "react"
import Image from "next/image"
import favicon from "../../public/favicon.ico"

export default function Home() {

  const [count, setCount] = useState(0)
  const [animalInput, setAnimalInput] = useState("")

 async function onSubmit(e) {
      e.preventDefault()
     try{
      const response = await fetch("api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({animal: animalInput})
      })
      const data = await response.json()
      if(response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`)
      }

      setCount( count + 1) 
      setAnimalInput("")
     } catch(error) {
      console.error(error)
      alert(error.message)
     }
  }

  return (
    <div>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
     <Image className="w-30 h-30" src={favicon}/>
     <h3 className="text-[green]">Name My Pet</h3>
     <p>Yoo've used this app {count} times</p>
     <form onSubmit={onSubmit}>
      <input 
      type='text'
      name='animal'
      value={animalInput}
      onChange={(e) => {
        setAnimalInput(e.target.value)
        console.log(animalInput);
      }}
      placeholder="Enter an animal" />
      <input 
      type="submit" 
      value="Generate names" />

     </form>
      
    </main>
    </div>
  )
}
