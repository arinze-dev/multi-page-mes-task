import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  const [Temp, setTemp] = useState()

  const [Data, SetData] = useState({
    data1:"",
    data2:"",
    data3:"",
    data4:""
  })
      const data1 = count ===1 
      const data2 = count ===2
      const data3 = count ===3
      const data4 = count ===4


      const handleChange = (e)=> {
        setTemp(e.target.value.replace(/\s+/g, " "))
    
        let word = Temp.split(' ').length -1
        
      if (word <= 10) {
              SetData({...Data,[e.target.name]:String(Temp).trim()})
        }else{
          setTemp(" ")
          if (count<4) {
            setCount(prev=>prev+1)
          }
        }
      }      
     

    const handlePreviousValue = function () { 
      setTemp("")
        setCount(pre=>pre-1)
        let prev  =  Object.entries(Data).filter(([item, value], i)=>{
          let arrCount = i +2
          return count === arrCount
           }) 
        setTemp(prev[0][1])
    }

    const handleNextValue = function () {   
      setTemp("")
        setCount(prev=>prev +1)
       let next  =  Object.entries(Data).filter(([item, value], i)=>{
         let arrCount = i;
         return count === arrCount
       })
        setTemp(next[0][1]) 
          //  check
     }


    let checkForLast = Data.data4.split(' ').length === 10


const handleSubmit = function () {
      window.alert("you have successful submited your message")  
      setCount(1);
      SetData({
        data1:"",
        data2:"",
        data3:"",
        data4:""
      })
      setTemp("")
}
    
  return (
    <div className="main">
      <div className='title' > Remaining {4-count}</div>
      <div className='textBox'>
          <textarea  name={data1 && "data1" ||data2 && "data2"|| data3  && "data3"||data4 && "data4"}  cols="40" rows="6" className='inputArea'
            onChange={handleChange} value={Temp} disabled={checkForLast && true}></textarea>
      </div>
      <div className='btn-Area'>
         {count ==1? null:<button className='previous' onClick={handlePreviousValue} >Previous</button>}
         {count == 4? null: <button className='next' onClick={handleNextValue} > Next</button>}
         <button className='submit' onClick={handleSubmit}>submit</button>
      </div>
      <div className='describe'>Page {count}</div>
    </div>

  )
}

export default App
