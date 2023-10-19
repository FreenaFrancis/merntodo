
import './App.css';
import {useEffect, useState} from 'react'
import Item from './component/Item';
import axios from 'axios' 
function App()  {

  const [text,setText] = useState('')

const[todo,setTodo] = useState([])
const[updating,setUpdating]=useState("")

 useEffect(()=>{
axios.get("http://localhost:2000/get-todo")
.then((res)=>setTodo(res.data))
.catch((err)=>console.log(err));
 })


 const add=(e)=>{
if(updating===""){
  axios.post("http://localhost:2000/save-todo",{text})
  .then((res)=>{
    console.log(res.data);
    setText("")
  })
  .catch((err)=> console.log(err))
}else{
  axios.post("http://localhost:2000/update-todo",{_id: updating, text})
  .then((res)=>{
    console.log(res.data);
    setText("");
    setUpdating("")
  })
  .catch((err)=> console.log(err)) 
}
 }

 const deleteToDo=(_id)=>{
  axios.post("http://localhost:2000/delete-todo",{_id})
  .then((res)=>{
    console.log(res.data);
   
  })
  .catch((err)=> console.log(err)) 
 }


 const updateToDo=(_id,text)=>{
setUpdating(_id);
setText(text)
 }

  return (
    <div className="App">
  <div className='container'>
<h1>ToDo App</h1>

<div className = "top">
  <input className='input' type="text" placeholder="write something" value={text}
  onChange={(event)=>setText(event.target.value)}
  />
<div className='add' onClick={add}> {updating?"Update":"Add"}</div>
</div>

<div className='list'>
{/* <Item/> */}

{todo.map(item => <Item key ={item._id} text={item.text} 
remove={()=>deleteToDo(item._id)}
update={()=>updateToDo(item._id,item.text)}/>
)}
</div>

  </div>
    </div>
  );
}

export default App;
