import React from 'react'
import axios from 'axios'

class TicketForm extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            department:'',
            priority:'',
            message:'',
            departmentOption:[
                {id:1,name:'TECHNICAL'},
                {id:2,name:'MANAGER'},
                {id:3,name:"HR"},
                {id:4,name:'SERVICE'}
            ],
            errors:{}
        }
        this.handleSumbit=this.handleSumbit.bind(this)
        this.handleDepartmentChange=this.handleDepartmentChange.bind(this)
        this.handleReset=this.handleReset.bind(this)
    }
    
    //3 ways to writing event handlers in react

    //1-arrow function

    handleNameChange=(e)=>{
        const name=e.target.value
        this.setState(()=>({name}))
    }

    //2-regular method -bind in constructor

    handleDepartmentChange(e){
        //console.log(this) //without binding=undefined
       // console.log(this) //with bind-this refers to current object
        const department=e.target.value
        this.setState(()=>({department}))
    }

    // 3 bind when calling function - least popular way-not at all
    handlePrioityChange(e){
        const priority=e.target.value
        this.setState(()=>({priority}))
    }

    handleSumbit(e){
       e.preventDefault()
       const formData={
           name:this.state.name,
           department:this.state.department,
           priority:this.state.priority,
           message:this.state.message
       } 
       axios.post(`http://dct-api-data.herokuapp.com/tickets?api_key=ae10e2fa0a200eb8`,formData)
       .then(response=> {
           console.log(response.data)
           if(response.data.hasOwnProperty('errors')){
            //    console.log('show form errors')
              this.setState(()=>({errors:response.data.errors}))
           } else {
           this.props.handleTicketSubmission(response.data)
           this.resetForm()
        // this.setState(()=>({
        //     name:'',
        //     department:'',
        //     priority:'',
        //     message:''
        // }))
        }
       })

       console.log(formData)
    }
    handleReset(e){
        e.preventDefault()
        this.resetForm() 
    }

    resetForm(){
        this.setState(()=>({
            name:'',
            department:'',
            priority:'',
            message:''
        }))
    }

//    resetForm(){
//     this.setState(()=>({
//         name:'',
//         department:'',
//         priority:'',
//         message:''
//     }))

// }
// handleReset(e){ 
//     e.preventDefault()
//     this.resetForm() 
//     }
  
    render(){
        //  console.log(this.state)
        return(
            <div>
                <form  onSubmit={this.handleSumbit}>
                <fieldset>
                    <legend>Add Ticket</legend>
                
                <label>Name:
                    <input type="text" value={this.state.name}
                    onChange={this.handleNameChange}/>

                    {this.state.errors.name && <span>{this.state.errors.name.join(', ')}</span>}
                </label>
                <br/>
                <br/>
                
                <label> 
                Department:
                <select value={this.state.department} onChange={this.handleDepartmentChange}> 
                <option value="">Select</option>
                {this.state.departmentOption.map(dep=>{
                    return<option key={dep.id} value={dep.name}>
                    {dep.name.toUpperCase()}</option>
                })}
                </select>

                {this.state.errors.department && <span>{this.state.errors.department.join(', ')}</span>}

                </label><br/>
                <br/>
...

                <label>
                Priority:
                <select value={this.state.priority} onChange={this.handlePrioityChange.bind(this)}>
                <option value="">Select</option>
                <option value="high">High</option>
                <option value="medium">Mediuim</option>
                <option value="low">Low</option>
               
                })}

                {this.state.errors.priority && <span>{this.state.errors.priority.join(', ')}</span>}

                </select>
                </label>
                <br/>
                <br/>

                <label>
                    message
                <textarea value={this.state.message}
                onChange={(e)=>{
                    //4th way of handling events //dnt use this, dnt miss the logic and jsx
                    const message=e.target.value
                    this.setState(()=>({message}))
                }}></textarea>

                {this.state.errors.message && <span>{this.state.errors.message.join(', ')}</span>}
                </label>
                <br/>
                <br/>

                <input type="submit"/>
                <button onClick={this.handleReset}>Reset</button>
               
                </fieldset>
                </form>
            </div>
        )
    }
}

export default TicketForm