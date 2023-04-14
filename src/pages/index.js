import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [name, setName] = useState()
  return (
    <>
      Hello World
      <input onChange={(e) => setName(e.target.value)} />
      <Link href={`/tracker/${name}`} ><button>Buscar</button></Link>
    </>
  )
}