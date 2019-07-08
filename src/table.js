import React from 'react'
import TableRow from './row'

const TicketTable=(props)=>{
        return(
            <table className="table">
                <thead className="thead-dark">
                    <tr> 
                        <th>code</th>
                        <th>name</th>
                        <th>department</th>
                        <th>priority</th>
                        <th>message</th>
                        <th>status</th>
                        <th>delete</th>   
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