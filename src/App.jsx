import { useState } from "react"

function App() {
  const [color , setColor] = useState("olive");

  return (
    <div className=" w-full h-screen duration-200 flex flex-wrap justify-cenbuter" style={{backgroundColor: color}}>
      <button className=" bg-white w-10 h-10"> home </button>
      <div className=" fixed bottom-12 flex flex-wrap justify-center gap-3 bg-white py-2 rounded-3xl px-3">
        <button onClick={() => setColor("red")} className=" outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor: "red"}}>
          Red
        </button>
        <button onClick={() => setColor("blue")} className=" outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor: "blue"}}>
          Blue
        </button>
        <button onClick={() => setColor("green")} className=" outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor: "green"}}>
          Green
        </button>
        <button onClick={() => setColor("yellow")} className=" outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor: "yellow"}}>
          Yellow
        </button>
        <button onClick={() => setColor("aqua")} className=" outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor: "aqua"}}>
          Aqua
        </button>
        <button onClick={() => setColor("pink")} className=" outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor: "pink"}}>
          Pink
        </button>
        <button onClick={() => setColor("violet")} className=" outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor: "violet"}}>
          Violet
        </button>
        <button onClick={() => setColor("orange")} className=" outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor: "orange"}}>
          Orange
        </button>
      </div>
    </div>
  )
}

export default App
