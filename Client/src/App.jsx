import { useState } from "react"
import { Sidebar,DashBoardContent,Rapports } from "./components"
function App() {
  const [content,setContent]=useState(true)
  function handleContentChange(element){
    if(element=="Rapports")
      setContent(false)
    else
      setContent(true)
  }
  return (
    <div className='h-[100dvh] flex items-center *:h-full'>
      <Sidebar handleContentChange={handleContentChange}/>
      {
        content ? <DashBoardContent /> : <Rapports/>
      }
    </div>
  )
}

export default App
