import React from 'react'
import './inputItem.css'

function InputItem({Icon,Color,title}) {
    return (
        <div className="input__item">
            <Icon style={{color:Color,fontSize:"2.5rem"}} />
          <h3>{title}</h3>
        </div>
    )
}

export default InputItem;

