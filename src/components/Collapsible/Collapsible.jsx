import React, { useCallback, useState } from 'react';
import FlecheHaut from '../../assets/fleche-haut.png'

const Collapsible = (props) => {
    const [open, setOPen] = useState(false);
    const toggle = useCallback(() => {
        setOPen((open) => !open)
    }, []);

    const [rotateArrow, setRotateArrow] = useState(false);
    const handleRotate = () => setRotateArrow(!rotateArrow);
    const rotate = rotateArrow ? "rotate(180deg)" : "rotate(0)"

    function click() {
        toggle();
        handleRotate();
    }

    return(
        <div className='desc_ctn'>

            <div className='desc_ctn_flex'>
                <button className='desc_ctn_btn'>{props.label}</button>
                <img src={FlecheHaut} alt='Flêche' style={{ transform: rotate, transition: "all 0.3s linear" }} onClick={click}/>
            </div>

            <div className='transition' style={{maxHeight: open ? '250px' : '0px', transform: open ? 'scaleY(1)' : 'scaleY(0)'}}>{props.children}</div>

        </div>
    )
}
export default Collapsible;