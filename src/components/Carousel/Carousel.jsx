import React, { useState } from "react"
import ArrowLeft from '../../assets/arrow-left.png';
import ArrowRight from '../../assets/arrow-right.png';

function Carousel({data}) {
    const [slide, setSlide] = useState(0);
    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };
    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    return (
        <div className="logement_banner">{data.map((item, id) => {
            return <img 
                src={item} 
                alt={item} 
                key={id} 
                className={slide === id ? "logement_picture" : "logement_picture hidden" } 
            />
        })}
            <img 
                src={ArrowLeft} 
                alt='Flêche gauche' 
                className='arrow_left' 
                onClick={prevSlide}
            />
            <img 
                src={ArrowRight} 
                alt='Flêche droite' 
                className='arrow_right' 
                onClick={nextSlide}
            />
            <span className="points">
                {data.map((_ , id) => {
                    return <button 
                        key={id} 
                        onClick={() => setSlide(id)} 
                        className={slide === id ? "point" : "point inactif"}>
                        </button>
                    })}
            </span>
        </div>
    )
}

export default Carousel