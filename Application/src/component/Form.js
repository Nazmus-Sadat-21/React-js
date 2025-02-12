import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


export default function Form() {

    const [faculty,setfacult] = useState('');
    const [course,setcourse] = useState('');
    const [sec,setsec] = useState('');
    const [name,setname] = useState('');
    const [id,setid] = useState('');
    const [text,settext] = useState('')

    const navigate = useNavigate();

    const fac = (e)=>{
        setfacult(e.target.value)
    }
    
    const cour = (e)=>{
        setcourse(e.target.value)
    }
    
    const se = (e)=>{
        setsec(e.target.value)
    }
    
    const student = (e)=>{
        setname(e.target.value)
    }
    
    const sid = (e)=>{
        setid(e.target.value)
    }

    const submit = (e)=>{
        e.preventDefault();
        if(faculty===''||course===''||sec===''||name===''|| id===''){
            alert("Fill the form first")
            settext('')
        }
        else{
            settext('./text')
            navigate('./text', { state: { faculty, course, sec, name, id } });

        }
    }


  return (
    <>    
    <div>      
    <form>
  <div className="mb-3 my-3">
    <label for="exampleInputEmail1" className="form-label">Faculty(Male/Female)</label>
    <input type="text" className="form-control" onChange={fac} id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Course</label>
    <input type="text" className="form-control" onChange={cour} id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Section</label>
    <input type="text" className="form-control" onChange={se} id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Student Name</label>
    <input type="text" className="form-control"onChange={student} id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Student ID</label>
    <input type="text" className="form-control" onChange={sid} id="exampleInputPassword1"/>
  </div>   
  <Link to={text}><button type="submit" onClick={submit} className="btn btn-success">Submit</button>   </Link>
 
</form>

    </div>
    
    </>
   
  )
}
