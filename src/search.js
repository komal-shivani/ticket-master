import React from 'react'


class SearchForm extends React.Component{
    constructor(){
        super()
        this.state={
            search:''
        }
        this.handleSearchChange=this.handleSearchChange.bind(this)
        
    }

    handleSearchChange(e){
        const search=e.target.value
        this.setState(()=>({
            search
        }))
        this.props.handleSearch(search)
        console.log(search)

    }
    render(){
        return(
            <div class="btn-group" role="group" aria-label="Basic example"
                class="d-flex justify-content-end">
                <input type="text" placeholder="search by code"
                onChange={this.handleSearchChange}/>

                <button class="btn btn-primary" onClick={()=>{
                    this.props.handlePriorityClick('all')
                }}>All</button>

                <button class="btn btn-primary" onClick={()=>{
                    this.props.handlePriorityClick('high')
                }}>High</button>
                <button class="btn btn-primary" onClick={()=>{
                    this.props.handlePriorityClick('low')
                }}>Low</button>
                <button class="btn btn-primary" onClick={()=>{
                    this.props.handlePriorityClick('medium')
                }}>Medium</button>
            </div>
        )
    
    }
}
export default SearchForm
