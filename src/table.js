import React from 'react'
import TableRow from './row'

const TicketTable=(props)=>{
        return(
            <table border="1">
                <thead>
                    <tr> 
                        <td>code</td>
                        <td>name</td>
                        <td>department</td>
                        <td>priority</td>
                        <td>message</td>
                        <td>status</td>
                        <td>delete</td>   
                    </tr>
                </thead>
                <tbody>
                    {props.tickets.map(ticket=>{
                       return <TableRow key={ticket.ticket_code} 
                                        ticket={ticket} 
                                        delete={props.handleDelete}
                                        status={props.handleCheck}
                         />
                    })}
                </tbody>
            </table>
        )
    }

export default TicketTable