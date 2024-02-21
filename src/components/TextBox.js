import React,{useState} from 'react';

export default function TextBox(props) {

  const changeUpperCase=()=>{
    console.log("clicked");
    let newVar=text.toUpperCase();//converts to upper case
    setText(newVar);//update the new value using the function 
    props.showA("Converted to UPPER CASE","primary");
  }

  const onChangeFunc=(event)=>{
    //console.log("on change");
    setText(event.target.value);//helps in changing the value in the container 
  }

  const changeLowerCase=()=>{
    let txt=text.toLowerCase();
    setText(txt);
    props.showA("Converted to Lowercase","primary");
  }

  const changeTitleCase=()=>{
     let str = text.split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);//convert the first char of all to uppercase
        console.log(str[i]);
        
    }
    setText(str.join(' '));//will join all the words together in a string
    props.showA("Converted to TitleCase","primary");
  }


  const clearText=()=>{
    setText('');
    props.showA(null);
  }
   const [text,setText]=useState('');
    
    return (
      <>
      <div>
      <h1>{props.heading}</h1>
      </div>
      <div>
       <div className="mb-3">
       <textarea className="form-control" value={text} onChange={onChangeFunc} id="myBox" rows="9" placeholder='Enter Text' style={{backgroundColor:props.mode==='light'?'white':'#d2d3db'}}></textarea>
       <button className="btn btn-success my-2" onClick={changeUpperCase}>
        To UpperCase
       </button>
       <button className="btn btn-success my-2 mx-2" onClick={changeLowerCase}>
        To LowerCase
       </button>
       <button className="btn btn-success my-2 mx-1" onClick={changeTitleCase}>
        Title Case
       </button>
       <button className="btn btn-success my-2 mx-1" onClick={clearText}>
        Clear Text
       </button>
       
      </div>
      
     
    </div>
    <div>
    <h3>Your Text Summary</h3>
    <p>
      {text.split(" ").length-1} words and {text.length} characters
    </p>
    <p>Number of Sentences: {text.split(".").length-1}</p>
    <p>
      {0.008*text.split(" ").length} Minutes read
    </p>
    <h3>Preview</h3>
    <p>{text}</p>
        </div>
    

    </>
   
  );
}
