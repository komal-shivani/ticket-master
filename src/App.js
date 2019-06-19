import React from 'react'
import axios from 'axios'
import TicketTable from './table'
import TicketForm from './form'
import SearchForm from './search'
import Charts from './charts'
import GraghBar from './graphbar'

class Tickets extends React.Component{
    constructor(){
        super()
        this.state={
            tickets:[],
            originalTickets:[],
            ischeck:false
        }
        this.handleTicketSubmission=this.handleTicketSubmission.bind(this)
        this.handleSearch=this.handleSearch.bind(this)
        this.handlePriorityClick=this.handlePriorityClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleCheck=this.handleCheck.bind(this)
        
    }

    componentDidMount(){
    axios.get(`http://dct-api-data.herokuapp.com/tickets?api_key=ae10e2fa0a200eb8`)
    .then(response=>{
        this.setState(()=>({
            tickets:response.data, 
            originalTickets:response.data
        }))
    })
}
handleTicketSubmission(ticket){
    // console.log('app',ticket)
    this.setState((prevState)=>({
    tickets:prevState.originalTickets.concat(ticket)
    }))
}

//update the tickets by tickets to oiginal tickets
handleSearch(value){
    // console.log('app',value)
    this.setState((prevState=>({
        tickets:prevState.originalTickets.filter(ticket=>
            ticket.ticket_code.includes(value))

    })))
}

handlePriorityClick(value){
    if(value==='all'){
        this.setState((prevState)=>({
            tickets:[].concat(prevState.originalTickets)
        }))

    } else {
    this.setState((prevState=>({
        tickets:prevState.originalTickets.filter(ticket=>
            ticket.priority === value)
    })))
}

}

handleDelete(value){
    // console.log(value)

    axios.delete(`http://cors-anywhere.herokuapp.com/dct-api-data.herokuapp.com/tickets/${value}?api_key=ae10e2fa0a200eb8`)
    .then(response=>{
        console.log(response.data)

        this.setState((prevState=>({
            tickets:prevState.tickets.filter(ticket=>
                ticket.ticket_code.includes(value)=== false) 
        })))
        })     
}

handleCheck(e){
let ischeck=e.target.checked
let value = e.target.value
    console.log(e.target.value)
    const data = {status:'close'}

    if(ischeck===true){
        axios.put(`http://cors-anywhere.herokuapp.com/dct-api-data.herokuapp.com/tickets/${value}?api_key=ae10e2fa0a200eb8`,data)
    .then(response=>{
        console.log(response.data)
        this.setState(()=>({
            status:'close'
        }))

}
)
}else{
    axios.put(`http://cors-anywhere.herokuapp.com/dct-api-data.herokuapp.com/tickets/${value}?api_key=ae10e2fa0a200eb8`,{status:'open'})
    .then(response=>{
        console.log(response.data)
        this.setState(()=>({
            status:'open'
        }))
})
}
}
render(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                <h2>Ticket - Master</h2>
                <h3>Listing-tickets:{this.state.tickets.length}</h3>
                <SearchForm handleSearch={this.handleSearch} handlePriorityClick={this.handlePriorityClick}/>
                <TicketTable tickets={this.state.tickets} handleDelete={this.handleDelete} handleCheck={this.handleCheck}/>
                </div>
            <div className="col-md-4">
            <TicketForm handleTicketSubmission={this.handleTicketSubmission}/>  
            </div>
           
           
            <Charts piHandle={this.state.tickets}/> 
            <GraghBar graghBar={this.state.tickets}/>
        </div>
        </div>
    )
}
}


export default Tickets