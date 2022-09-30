import React from 'react'
import { useDrop } from 'react-dnd'

// 可放置的
function Droppable({ handleDrop, state, text, children }) {
  const [ {isOver}, drop ] = useDrop(()=>({
    accept: 'card',    // 接收相应的type的drag，接收type为card的drag
    collect: (monitor) => ({
      // 鼠标是否进入区域
      isOver: monitor.isOver(),
    }),
    // 接收drag的item
    drop: (item) => {
      console.log(item.id);  
      handleDrop(item)
    }
    // 状态需要实时更新，需要依赖，内部使用useMemo，useCallback
  }),[state])
  return (
    <div id='drop' ref={drop}>
      {text}
      <br />
      {/* Component Composition 组合式组件 */}
      {children}
    </div>
  )
}


export default Droppable
