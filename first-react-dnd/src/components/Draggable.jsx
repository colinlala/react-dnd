import React from 'react'
import { useDrag } from 'react-dnd'
// 可拖拽的
function Draggable({ id }) {
    // 第二个参数类似ref，传给需要的组件
    const [ {isDragging}, drag ] = useDrag(()=>({
        type: 'card',  // 类似名称id
        item: { id },
        // 收集参数，状态
        collect: (monitor) => ({
            // 自定义，判断是否dragging，返回到前面的数组中
            isDragging: monitor.isDragging(), 
        }),
    }))

    // 如果在拖拽，就返回空，（在拖拽的时候，原来的框消失）
    if(isDragging){
        return <div ref={drag}></div>
    }
  return (
    <div id='drag' ref={drag}>
      {`Drag ${id}`}
    </div>
  )
}

export default Draggable
