import React from 'react';
import './myStyles.css';

//How to apply styles with a regular stylesheets. 
function Stylesheet(props) {
  //To conditionally apply a style use props
  let className = props.primary ? 'primary' : '';
  return (
    <div>
      {/* Variable values need {}, template litteral */}
      <h1 className={`${className} font-xl`}>Stylesheet</h1>
    </div>
  )
}

export default Stylesheet
