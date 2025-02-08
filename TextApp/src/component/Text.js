import React, { useState } from 'react'

export default function Text(props) {
    const click = () =>{
      console.log("clicked")
      let nwetext  = text.toUpperCase();
      settext(nwetext);
    }
    const click2 = () =>{
        console.log("clicked")
        let nwetext  = text.toLowerCase();
        settext(nwetext);
    }
      const click3 = () =>{
        console.log("clicked")
        settext("")
      }
      const copy = ()=>{
          let text = document.getElementById("text"); // Ensure this points to the correct element
          text.select();  // Only works on <textarea> or <input>
          document.execCommand("copy");
          alert("Text copied!");        
      }
      const change = (e)=>{
        settext(e.target.value)
      }

    const[text,settext] = useState('')
  return (
  <>
    <h1 style={{color: props.mode ==='dark'?'white':'black'}}>Text something...</h1>
    <div className="mb-3" >
        <textarea className="form-control my-3" id="text" style={{backgroundColor: props.mode ==='dark'?'black':'white', color: props.mode ==='dark'?'white':'black'}}  rows={8} value={text} onChange={change} ></textarea>
        {/* <label for="floatingTextarea2">Text...</label> */}
        <button type="button" className="btn btn-primary btn-lg mx-2 my-1" onClick={click}>UpperCase</button>
        <button type="button " className="btn btn-primary btn-lg mx-2 my-1 " onClick={click2}>LowerCase</button>
        <button type="button " className="btn btn-primary btn-lg mx-2 my-1" onClick={click3}>Clear</button>
        <button type="button " className="btn btn-primary btn-lg mx-2 my-1" id = "Mybox" onClick={copy}>Copy</button>
    </div>
    <div className="time my-4" style={{color: props.mode ==='dark'?'white':'black'}}>
      <h3>Text Summary</h3>
      <h5>{(text.split(' ').length)} Words and {text.length} Characters</h5>
    </div>
    <div className="conta my-3"  style={{color: props.mode ==='dark'?'white':'black'}}>
        <h3 >Preview</h3>
        <p>{text}</p>
    </div>
    {/* <div className="time my-4" style={{color: props.mode ==='dark'?'white':'black'}}>
      <h5>{text.split(' ').length} word  {text.length} Character</h5>
    </div> */}
  </>
  )
}
