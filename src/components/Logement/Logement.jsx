import React from 'react';
import tableau from '../../datas/logements.json'
import FicheLogement from './FicheLogement';
import { useParams  } from 'react-router-dom';
import Error from '../Error';

function Logement() {
    const {logementId} = useParams();
    const logement = tableau.find((logement) => {
        return logement.id === logementId 
    })
    if (!logement) {
        return <Error />;
    }

    return (
        <div>
            <FicheLogement 
                {...logement}
            />
        </div>
    )
}

export default Logement