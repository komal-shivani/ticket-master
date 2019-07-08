import React from 'react'
import ReactDOM from 'react-dom'
import Tickets from './App'
// import { DatePicker, message } from 'antd';
// import 'antd/dist/antd.css';

const Hello=(props)=>{
    return(
        <div>
         <Tickets/>
        </div>
    )
}

ReactDOM.render(<Hello/>,document.getElementById('root'))