import React, {useState} from 'react'

export default function From() {


  const [height,setheight] = useState(0);
  const [Weight,setweight] = useState(0);
  const [text,settext] = useState ('')
  const [mssg,setmssg] = useState('');

  const Weightvalue = (e)=>{
    
    setweight(e.target.value)
   }

  const Heightvalue = (e)=>{
    setheight(e.target.value)
  }

  const cal = (e)=>{
    e.preventDefault();
    let ans;
    ans =   parseFloat(Weight)/((parseFloat(height)/100)*(parseFloat(height)/100));
    settext(ans)
    if(ans>=19 && ans<=24){
      setmssg('Your are fit :)')
    }
    else if(ans>24){
      setmssg('You are overweight')
    }
    else {
      setmssg('You are unfit :(')
    }
    
  }



  return (
    <>
    <form>
  <div className="mb-3"  >
    <label for="exampleInputEmail1" className="form-label">Weight(KG)</label>
    <input type="number" className="form-control" onChange={Weightvalue} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3" style={{marginTop: 5+'px'}} >
    <label for="exampleInputPassword1" className="form-label">Height(cm)</label>
    <input type="number" className="form-control" onChange={Heightvalue} id="exampleInputPassword1"/>
  </div>
  <button type="submit" onClick={cal} className="btn btn-success">Calculate</button>
</form>
<br />
<h5>Your BMI is : {text} </h5>

<h6>{mssg}</h6>
    
    
    </>
  )
}
