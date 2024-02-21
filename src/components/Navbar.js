import React from 'react'
import PropTypes from 'prop-types';
export default function Navbar(props){
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={`${props.mode}`} >
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.titleName}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>  
      </ul>

     
  
  <button type="button" class="btn btn-primary my-2 mx-2 rounded-circle" onClick={props.changeColor}></button>
  <button type="button" class="btn btn-danger my-2 mx-2 rounded-circle"></button>
  <button type="button" class="btn btn-success my-2 mx-2 rounded-circle"></button>
  



      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.mode==='dark'?'enable light':'enable dark'}</label>
</div>

      
    </div>
  </div>
</nav>
  );
}

Navbar.propTypes={
  titleName: PropTypes.string

}