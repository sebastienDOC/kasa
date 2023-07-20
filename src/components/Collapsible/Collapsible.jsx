import React from 'react';
import { useState } from 'react';
import FlecheHaut from '../../assets/fleche-haut.png'

const Collapsible = (props) => {
    const [open, setOPen] = useState(false);
    const toggle = () => {setOPen(!open)};

    const [rotateArrow, setRotateArrow] = React.useState(false);
    const handleRotate = () => setRotateArrow(!rotateArrow);
    const rotate = rotateArrow ? "rotate(180deg)" : "rotate(0)"

    function onClick() {
        toggle();
        handleRotate();
    }

    return(
        <div className='desc_ctn'>

            <div className='desc_ctn_flex' onClick={onClick}>
                <button className='desc_ctn_btn'>{props.label}</button>
                <img src={FlecheHaut} alt='Flêche' style={{ transform: rotate, transition: "all 0.3s linear" }} onClick={onClick}/>
            </div>
            {open && (
                <div >{props.children}</div>
            )}
        </div>
    )
}
export default Collapsible;