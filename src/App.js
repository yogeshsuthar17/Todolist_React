import React from "react";

class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={
      mytask:"",
      arr:[],
      ob:{}
    }
  }
  change(event)
  {
    
    this.setState({mytask: event.target.value})
  }
  formvalid()
  {
    const mytask = this.state.mytask
    // const ob = {}
    // let isvalid = true  
    if(!mytask)
    {
      // ob.mytask = "Enter Task"
      // isvalid = false
      alert("Enter Task first")
    }
    // this.setState({ob})
    // return isvalid
  }
 
  Add(event)
  {
    
    const isvalid = this.formvalid()
    if(!isvalid)
    {
    
    let list = this.state.arr
    
    list.push(event)
    this.setState({arr:list,mytask:""})
    }
  //   console.log(this.state.arr)
  }
  remove(index)
  {
    let li = this.state.arr.splice(index,1)
    this.setState({todo:li})
  }

  render()
  {
    // const ob = this.state.ob
    
  return (
    <div>
      <center>
        <h1>To Do List</h1>
        
      <input type="text" name="mytask" placeholder="Enter Task"  value={this.state.mytask} onChange={this.change.bind(this)}></input>&nbsp;
     <button onClick={()=>this.Add(this.state.mytask)}>ADD</button><br/><br/>
     {this.state.arr.map((value,index)=>
     
      <h4 key={index}>
     
      {index+1}.{value}
      &nbsp;&nbsp;
      <button onClick={()=>this.remove(index)}>REMOVE</button>
      </h4>
     
     
     )}
     </center>
      
    </div>
  );
  }
}

export default App;
