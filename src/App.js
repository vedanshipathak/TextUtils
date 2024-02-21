
import './App.css';//css
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import React,{useState} from 'react';
function App() {
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode("dark");
      document.body.style.backgroundColor='#3f474e';
      document.body.style.color='white';
      showAlert("Dark mode is enabled","primary");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light mode is enabled","success");
      //if you want to change the title of the website when the toggle mode is happening 
      //document.title='TextUtils-Dark/light mode is enabled'
    }
   
  }
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
 
  const changeColor=()=>{
    document.body.style.backgroundColor='#1B1B3A';
    document.body.style.color='white';
    setMode('dark');
  }
  return (
    <>
    <Navbar titleName="TextUtils" mode={mode} toggleMode={toggleMode} changeColor={changeColor}/> 
    <Alert alert={alert}/>
    <div className="container my-4">
    <TextBox  showA={showAlert} heading="Enter Text:" mode={mode} />

    {/* <About/>*/}
    </div>
    </>
  );
}

export default App;