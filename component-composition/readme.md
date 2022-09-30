## Component Composition 组件组合
- 问题
    1. 组件多层嵌套
    2. 不可避免的状态提升
    3. 状态传值困难（prop driling）
    4. Context用不好会导致不必要的re-render
    5. Redux使用小项目有点鸡肋
- 关键
    1. 组件的children属性
    2. 打开黑盒
    3. 嵌套的组件 -> 铺平