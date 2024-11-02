import { useState } from 'react'
import data from "./data/folderData"
import Folder from './components/folder'
import './App.css'
import tree from "./hook/hook"
function App() {
  const [data1,setData]=useState(data)

  const {nodeval}=tree()

  const hendleinput=(folderId,item,isFolder)=>{
    const finaltree=nodeval(data1,folderId,item,isFolder)
    setData(finaltree)
  }

  return (
    <>
      <Folder trees={hendleinput} data={data1}/>
    </>
  )
}

export default App
