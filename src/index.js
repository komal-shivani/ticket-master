import React from 'react'
import ReactDOM from 'react-dom'
import Tickets from './App'

const Hello=(props)=>{
    return(
        <div>
         <Tickets/>
        </div>
    )
}

ReactDOM.render(<Hello/>,document.getElementById('root'))