
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const[Year,setYear] = useState(0)
  const[interest,setInterest]=useState(0)
  const[isPrinciple,setprinciple]=useState(true)
  const[isRate,setrate]=useState(true)
  const[isYear,setyear]=useState(true)

  
  const validate =(e)=>{
    const name = e.target.name 
    const value = e.target.value 
    // console.log(name,value);
    if(!!value.match(/^[0-9]*$/)){
      if (name=='principle') {
        setPrinciple(value)
        setprinciple(true)

        
      } else if(name=="rate"){
           setRate(value) 
           setrate(true) 

      }
      else{
        setYear(value)
        setyear(true)

      }
    }
    else{
      if (name=='principle') {
        setPrinciple(value)

        setprinciple(false)
        
      } else if(name=="rate"){
        setRate(value) 

           setrate(false) 
      }
      else{
        setYear(value)

        setyear(false)
      }

    }

    

  }
  const handlerest=()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setprinciple(true)
    setrate(true)
    setyear(true)
    setInterest(0)

  }
  const handleCalculate =(e)=>{
    e.preventDefault() //to protect the data
    if (principle=="" || rate=="" || Year=="") {
      alert("please fill the form")
      
    }
    else{
      setInterest((principle*rate*Year)/100)
    }
  }
  

  return (
    <>
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <div className='p-3 mt-5 px-5 border border-3 text-center bg-white rounded-3 '>
          <h1 className='mt-4'>Simple Interest App</h1>
          <small className='mt-3'>calculate your simple interest Easily</small>
          <div className='p-4 border border-3 rounded-3 mt-4 bg-success-subtle'>
            <h1>${interest}</h1>
            <small>Total simple interest</small>
          </div>

         <form onSubmit={handleCalculate}>
            <div className='mt-4'><TextField onChange={(e)=>validate(e)} name='principle' value={principle||""} id="outlined-basic" label="$Princilple amount" variant="outlined" className='w-100' /> {!isPrinciple&& <p className='text-danger'>Invalied Input</p>}
            </div>
            <div className='mt-3'><TextField onChange={(e)=>validate(e)} name='rate'value={rate||""} id="outlined-basic" label="Rate of Interest (p.a)%" variant="outlined" className='w-100'/>{!isRate && <p className='text-danger'>Invalied Input</p>}
            </div>
  
            <div className='mt-3'><TextField onChange={(e)=>validate(e)} name='year' value={Year||""} id="outlined-basic" label="Year(Yr)" variant="outlined" className='w-100' /> {!isYear &&
              <p className='text-danger'>Invalied Input</p>}
            </div>
  
            <div className='mt-4 pb-4'>
              {/* <button className='btn btn-success '>CALCULATE</button> */}
              <Button className='py-3 bg-success' variant="contained" type='submit' style={{ padding:'15px', width:'150px'}} disabled={isPrinciple && isRate && isYear?false:true}>CALCULATE</Button>
              <Button className="ms-5 mt-1 "variant="outlined" style={{ padding:'15px', width:'150px'}} onClick={handlerest}>RESET</Button>
  
            </div>
  
           </form>

        </div>
      </div>
      <div className="col-md-4"></div>
    </div>
    </>
  )
}

export default App
