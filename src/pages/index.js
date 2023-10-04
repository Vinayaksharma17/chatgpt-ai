import { useState } from "react"
import Image from "next/image"
import favicon from "../../public/favicon.ico"

export default function Home() {
  return (
    <div>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
     <Image className="w-30 h-30" src={favicon}/>
     <h3 className="text-[green]">Name My Pet</h3>
     <form>
      <input 
      type='text'
      name='animal'
      placeholder="Enter an animal" />
      <input type="submit" />
     </form>
      
    </main>
    </div>
  )
}
