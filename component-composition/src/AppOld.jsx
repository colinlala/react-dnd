import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// 传值过于麻烦，且Outer，Middle，Inner变成了黑盒，不知道里面的内容
function App() {
  const [name, setName] = useState('Colin')

  return (
    <div className="App">
      <Outer name={name}/>
    </div>
  )
}

function Outer({name}) {
  return (
    <div>
      <Middle name={name}/>
    </div>
  )
}

function Middle({name}) {
  return (
    <div>
      <Inner name={name}/>
    </div>
  )
}

function Inner({name}) {
  return (
    <div>
      Hello {name}
    </div>
  )
}


export default App
