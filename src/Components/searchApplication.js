import React, { Component } from 'react';
import {Table} from 'react-bootstrap'
import { toast } from 'react-toastify';
import './searchstyle.css';
import {Data} from './data.js'

class SearchApplication extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Id: '',
      Name: "",
      Dept: "",
      Degree: "",
      Doj: "",
      overallarray:Data,
      searchoveralllist:[],
      searchdata:""  
    }
  }
 
handlesearch=(e)=>{
  debugger
  let searchitem=e.target.value;
  let {searchoveralllist}=this.state
  console.log(e.target.value) 
  if(e.target.value !="")
  {
    searchoveralllist=this.state.overallarray.filter(item=>
              item.Name != null && item.Name.toLowerCase().includes(searchitem) || item.Degree != null && item.Degree.toLowerCase().includes(searchitem) ||  item.Dept != null && item.Dept.toLowerCase().toString().toLowerCase().includes(searchitem)
            )
            this.setState({
              searchdata:e.target.value,
              searchoveralllist:searchoveralllist    
            }) 
  }
  else{
    this.setState({
      searchdata:'',
      searchoveralllist:[],
      overallarray:Data,
    })  
  }
     }
  handlechangeinput = (e) => {    
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleadd = () => {
    debugger    
    if(this.state.Id !=="" && this.state.Name !=="" && this.state.Degree !="" && this.state.Dept !="" && this.state.Doj !="")
    {
 
      this.state.overallarray.push({
        Id:this.state.Id,
        Name:this.state.Name,
        Dept:this.state.Dept,
        Degree:this.state.Degree,
        Doj:this.state.Doj,
      })
      this.setState({
        overallarray:this.state.overallarray,
        Name:"",
        Doj:"",
        Id:"",
        Dept:"",
        Degree:"",
      })
    }
    else{
      alert("Please fill all the fields");
    }
  }
  render() {
    console.log(Data)
    return (
      <>
        <div className='formsdata'> 
          <div className='unique'>
          
            <input type="text" name="Id"  className='form-control inputBox1'value={this.state.Id} placeholder="Enter id" onChange={(e) => { this.handlechangeinput(e) }}/>
          </div>
          <div className='unique'>
           
            <input type="text" name="Name"  className='form-control inputBox1'value={this.state.Name}  placeholder="Enter Name" onChange={(e) => { this.handlechangeinput(e) }} />
          </div>
          <div className='unique'>
           
            <input type="text" name="Dept" className='form-control inputBox1' value={this.state.Dept}  placeholder="Enter Department" onChange={(e) => { this.handlechangeinput(e) }}/>
          </div>
          <div className='unique'>
          
            <input type="text" name="Degree" className='form-control inputBox1' value={this.state.Degree}  placeholder="Enter Degree" onChange={(e) => { this.handlechangeinput(e) }}/>
          </div>
          <div className='unique'>
           
            <input type="date" className='form-control inputBox1' name="Doj" value={this.state.Doj}  placeholder="Enter Doj" onChange={(e) => { this.handlechangeinput(e) }}/>
          </div>
          <button type="submit" className='btn btn-primary btn-md' onClick={this.handleadd}>Add</button>
        </div>

        <div className='searchbar'>         
          <input type="text"  className="form-control inputBox" placeholder='Search text here...' name="searchdata" value={this.state.searchdata} onChange={(e)=>{this.handlesearch(e)}}></input>
        </div>
        <div className='tablesturcture'>
          <Table className="table table-bordered">
            <thead>
              <tr>               
                <th >ID</th>
                <th >NAme</th>
                <th>Dept</th>
                <th>DEgree</th>
                <th >DOJ</th>
              </tr>
            </thead>
            <tbody>
              
            {this.state.overallarray.filter((a)=>{ return this.state.searchdata =="" ? a :  a.Name != null && a.Name.toLowerCase().includes(this.state.searchdata) || a.Degree != null && a.Degree.toLowerCase().includes(this.state.searchdata) ||  a.Dept != null && a.Dept.toString().toLowerCase().includes(this.state.searchdata)}).map((item)=>{
                  return (
                    <tr key={item.Id}>                     
                    <td>{item.Id}</td>
                    <td>{item.Name}</td>
                    <td>{item.Dept}</td>
                    <td>{item.Degree}</td>
                    <td>{item.Doj}</td>
                    </tr>
                  )
                 

                })}
               
              
            </tbody>
          </Table>
         
        </div>
        <div className='rowcount1'>
          <label className='rowcount'>Row count :</label> 
         <span>showing</span> {this.state.searchdata == ""?this.state.overallarray.length:this.state.searchoveralllist.length} of {this.state.overallarray.length} <span>results</span>

        </div>
       

      </>

    )
  }



}
export default SearchApplication