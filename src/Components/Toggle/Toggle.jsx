import React, {useContext} from 'react'
import './Toggle.css'

import Sun from   '@iconscout/react-unicons/icons/uil-sun'
import Moon from  '@iconscout/react-unicons/icons/uil-moon'



import {themeContext} from '../../Context'

const Toggle = () => {
   const theme = useContext(themeContext);
   const darkModeNew = theme.state.darkMode; //true or false

 const handleClick = ()=>{
      theme.dispatch({type: 'toggle'})
 }


 //2.20-2.22
  return (
    <div className="toggle"  onClick = {()=>{handleClick()}}>
            <Moon/>
            <Sun />
            <div className="t-button" style={{left: darkModeNew ? '5px' : '40px'}}
           
            >

            </div>
    </div>
  )
}

export default Toggle