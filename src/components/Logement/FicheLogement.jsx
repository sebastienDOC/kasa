import Collapsible from '../Collapsible';
import React from 'react';
import FullStar from '../../assets/star-fill.png';
import EmptyStar from '../../assets/star-unfill.png';
import Carousel from '../Carousel';

function FicheLogement({ id, pictures, title, location, rating, tags, description, equipments, host }) {
    const fullStar = Array(5).fill(<img src={FullStar} alt={FullStar}/>)
    const emptyStar = Array(5).fill(<img src={EmptyStar} alt={EmptyStar}/>)



	return (
		<div key={id} className='logement'>

            <div className='logement_banner'>
                {/* <div className='carousel-item'>
                    {pictures.map((picture) => <img src={picture} alt={picture} className='logement_picture' />)}   
                </div> */}
                <Carousel data={pictures} />

            </div>

            <div className='logement_flex'>
                <span className='logement_title'>
                    <h1>{title}</h1>
                    <h2>{location}</h2>
                    <div className='logement_tag_flex'>
                        {tags.map((tag) => <li className='logement_li_flex'>{tag}</li>)}
                    </div>
                </span>
                <div className='logement_host'>
                    <span className='logement_host_flex'>
                        <p align="right">{host.name}</p>
                        <img className='logement_host_round' src={host.picture} alt={host.name} />
                    </span>
                    <span>
                        {fullStar.slice(5-rating).map(fullStar => {
                        return <span>{fullStar}</span>
                        })}
                        {emptyStar.slice(rating).map(emptyStar => {
                            return <span>{emptyStar}</span>
                        })}
                    </span>

                </div>
            </div>

            <span className='logement_desc'>
                <div className='logement_desc_col margin'>
                    <Collapsible label='Description'>
                        <p className='desc_p'>
                            {description}
                        </p>
                    </Collapsible>
                </div>
                <div className='logement_desc_col'>
                    <Collapsible label='Equipements'>
                        <p className='desc_p'>
                            {equipments.map((equipment) => <li>{equipment}</li>)}
                        </p>
                    </Collapsible>
                </div>
            </span>
                
		</div>
	)
}

export default FicheLogement