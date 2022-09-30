## 学习react-dnd
- 安装`npm install react-dnd react-dnd-html5-backend`
- 引入依赖，
    ```jsx
    import { DndProvider } from 'react-dnd'
    import { HTML5Backend } from 'react-dnd-html5-backend'
    ```
- 包着需要拖拽功能的组件
    ```jsx
    <DndProvider backend={HTML5Backend}>
      <XXX />
    </DndProvider>
    ```
- 拖拽
    - 使用hooks
        ```jsx
        import { useDrag } from 'react-dnd'
        ```
    - 返回对象
        ```jsx
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
        ```
    - 把drag传给组件
        ```jsx
        <div id='drag' ref={drag}>
            {`Drag ${id}`}
        </div>
        ```
- 放置
    - 使用hooks
        ```jsx
        import { useDrop } from 'react-dnd'
        ```
    - 返回对象
        ```jsx
         const [ {isOver}, drop ] = useDrop(()=>({
            accept: 'card',    // 接收相应的type的drag，接收type为card的drag
            collect: (monitor) => ({
            // 鼠标是否进入区域
            isOver: monitor.isOver(),
            }),
        }))
        ```
    - 把drag传给组件
        ```jsx
        <div id='drop' ref={drop}>
            Droppable
        </div>
        ```