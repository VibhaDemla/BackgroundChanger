import { useState } from 'react'



function App() {
  const [color,setcolor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{background: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

            <button onClick={()=>setcolor("red")}                 //onClick ko function chahie na ki return chahie
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "red" }}>Red</button>
            
            <button onClick={()=>setcolor("blue")}
             className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "blue" }}>Blue</button>

            <button onClick={()=>setcolor("yellow")}
             className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "yellow" }}>Yellow</button>

            <button onClick={()=>setcolor("pink")}
             className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "pink" }}>Pink</button>

            <button onClick={()=>setcolor("purple")}
             className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "Purple" }}>Purple</button>

            <button onClick={()=>setcolor("Lavender")}
             className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "Lavender" }}>Lavender</button>

          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
