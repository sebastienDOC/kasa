import React from 'react';
import tableau from '../../datas/logements.json'
import FicheLogement from './FicheLogement';
import { useParams } from 'react-router-dom';

function Logement() {
    const {logementId} = useParams();
    const logement = tableau.find(function(item){
        return item.id === logementId
    })

    return (
        <div>
            <FicheLogement 
                    id={logement.id}
                    pictures={logement.pictures}
                    title={logement.title}
                    location={logement.location}
                    rating={logement.rating}
                    tags={logement.tags}
                    description={logement.description}
                    equipments={logement.equipments}
                    host={logement.host}
                />
        </div>
    )
}

export default Logement

