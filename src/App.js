import React, {useState} from 'react';
import './App.css';



const App =()=>{
  const [input1, setinput1]= useState("")
  const [input2, setinput2]= useState("")
  const [list, setlist]= useState([])
  const [editindex, setedit]=useState(null)
   
  const change =()=>{
    let obj= {input1, input2}
    console.log(obj);

        setlist([...list, obj])
        console.log(list);
      
}



const updatedList=()=>{
  const updatedList = [...list];
  updatedList[editindex] = { input1, input2 };
  setlist(updatedList);
  // setinput1("");
  // setinput2("");
  setedit(null);
}

const edit=(index)=>{
  setedit(index)
  setedit(list[index].input1)
  setedit(list[index].input2)
  // setinput1("");
  // setinput2("");
}


const deleteItem = (index) => {
  const updatedList = [...list];
  updatedList.splice(index, 1);
  setlist(updatedList);
};



  


    return(
        <div>
          <h1>Todo list</h1>
            <input onChange={(e)=>setinput1(e.target.value)} type="text" />
            <input onChange={(e)=>setinput2(e.target.value)} type="text" />
            <button onClick={change}>Add todo</button>
            
        {
            list.map((el, i)=>(
                <>
                <h1>{el.input1}</h1>
                <h1>{el.input2}</h1>
                <button onClick={()=>updatedList(i)}>Update</button>
                <button onClick={()=>edit(i)}>Edit</button>
                <button onClick={()=>deleteItem(i)}>Delete</button>
                
                </>
            ))
        }
        </div>


    )


}

export default App;
