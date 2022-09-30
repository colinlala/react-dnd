import { useState } from 'react'
import './App.css'
import Draggable from './components/Draggable'
import Droppable from './components/Droppable'

function App() {
  const [box1, setBox1] = useState([{id:1},{id:2},{id:3}])
  const [box2, setBox2] = useState([{id:4}])

  // 从box2往box1中加
  const handleBox1 = (item) => {
    // remove from box2
    const copyArr = [...box2]
    const index = copyArr.findIndex(each => each.id == item.id)
    const copyItem = copyArr[index]
    copyArr.splice(index, 1)
    setBox2(copyArr)
    // add to box1
    setBox1(prev => [...prev, copyItem])
  }

  // 从box1往box2中加
  const handleBox2 = (item) => {
    // remove from box1
    const copyArr = [...box1]
    const index = copyArr.findIndex(each => each.id == item.id)
    const copyItem = copyArr[index]
    copyArr.splice(index, 1)
    setBox1(copyArr)
    // add to box2
    setBox2(prev => [...prev, copyItem])
  }
  return (
    <div className="App">
      {/* <Draggable id={1}/>
      <Draggable id={2}/>
      <Droppable text='Box 1'/>
      <Droppable text='Box 2'/> */}
      {/* Component Composition 组合式组件 */}
      <Droppable text='Box1' state={box1} handleDrop={handleBox1}>
        {box1.map(drag => (<Draggable key={drag.id} id={drag.id}/>))}
        {/* 需要根据状态渲染，不能写死 */}
        {/* <Draggable id={1}/>
        <Draggable id={2}/> */}
      </Droppable>
      <Droppable text='Box2' state={box2} handleDrop={handleBox2}>
        {box2.map(drag => (<Draggable key={drag.id} id={drag.id}/>))}
      </Droppable>
    </div>
  )
}

export default App
