// import { useState } from "react";
import React from "react"
// import "./App.less"
// import Menu from "./SubComponents/SubHeader/Menu"
// import Image from "./Components/Arco/Image"
import Header from "./SubComponents/Header"
// import DragBox from "./Components/myCom/DragBox"
import "@arco-design/web-react/dist/css/arco.css"
import Body from "./SubComponents/Body"
import { observer } from "mobx-react"
import { kit, allInit } from "@Root/js/index"
// import { Button } from "@mui/material"
const App = observer(() => {
  React.useEffect(() => {
    kit.sleep(20).then(() => {
      allInit()
    })
  }, [])
  return (
    <>
      <Header />
      <Body />
    </>
  )
})

export default App
