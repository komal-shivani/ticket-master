import React from 'react'

class TableRow extends React.Component{
    constructor(){
        super()
            this.state={
                statuscheck:false
        }
    }
   render(){
       return(
           <tr>
               <td>{this.props.ticket.ticket_code}</td>
               <td>{this.props.ticket.name}</td>
               <td>{this.props.ticket.department}</td>
               <td>{this.props.ticket.priority}</td>
               <td>{this.props.ticket.message}</td>
               <td>{this.props.ticket.status}
               
               <label>
                   <input type="checkbox" 
                   onChange={this.props.status} value={this.props.ticket.ticket_code}/>
               </label>
               </td>
                    
               <td><button class="btn btn-info" onClick={()=>{
                            this.props.delete(this.props.ticket.ticket_code)
                        }}>Delete</button>
                </td>
           </tr>
       )
   }
}
export default TableRow