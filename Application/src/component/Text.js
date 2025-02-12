
// import React from 'react'
// import { useLocation } from 'react-router-dom';



// export default function Text() {
//   const location = useLocation();
//   const { faculty, course, sec, name, id } = location.state || {};



// //   const copy = ()=>{
// //     let text = `Subject: Request for a UW for ${course}

// // Dear Sir,

// // I hope you are doing well. I would like to request a UW for ${course} in order to drop this course.

// // I would appreciate your consideration and any guidance and necessary steps to proceed. Thank you for your time and support.

// // Yours sincerely,
// // ${name}
// // ID: ${id}
// // Course: ${course}
// // Section: ${sec}
// // `
// // text.select();    
// //     document.execCommand("copy");
// //     alert("Text copied!");        
// // }


// const copy = ()=>{
//   let text = document.getElementById("textcopy")
//   text.select()
//   document.execCommand("copy")
//   alert("Text copied!")
// }

//   return (
//     <>    
//     <div className="textform my-2" >
//       {/* <h2 style={{textAlign:'center'}}>Here is your drop Application </h2> */}
//       <input id='textcopy'>
//          <p>Subject: Request for a UW for {course}</p>  
//          <p>Dear {faculty==='Male'?'Sir':'Mam'},</p>
//          <p>I hope you are doing well. I would like to request a UW for {course} in order to drop this course.</p>
//          <p>I would appreciate your consideration and any guidance and necessary steps to proceed. Thank you for your time and support.</p>
//          <p>Yours,<p>{name}<p>ID: {id}  <p>Course: {course} <p>Section: {sec}</p></p> </p></p></p>    
//          <button type="button" onClick={copy} class="btn btn-outline-primary">Copy</button>
//       </input>
//     </div>
   
    
//     </>
//   )
// }


import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

export default function Text() {
  const location = useLocation();
  const { faculty, course, sec, name, id } = location.state || {};

  const textRef = useRef(null);

  const copyToClipboard = () => {
    textRef.current.select(); // Select the text inside textarea
    document.execCommand("copy"); // Copy to clipboard
    alert("Text copied!");
  };

  return (
    <div className="textform my-2">
      {/* Application Letter */}
      <textarea
        id="textcopy"
        ref={textRef}
        readOnly
        className="form-control" rows={8}
        value={`Subject: Request for a UW for ${course}

Dear ${faculty === "Male" ? "Sir" : "Mam"},

I hope you are doing well. I would like to request a UW for ${course} in order to drop this course.

I would appreciate your consideration and any guidance and necessary steps to proceed. Thank you for your time and support.

Yours sincerely,
${name}
ID: ${id}
Course: ${course}
Section: ${sec}`}
      />

      <button type="button" onClick={copyToClipboard} className="btn btn-outline-primary mt-2">
        Copy
      </button>
    </div>
  );
}
