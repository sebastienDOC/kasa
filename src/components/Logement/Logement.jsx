import React from 'react';
import logements from '../../datas/logements'
import FicheLogement from './FicheLogement';

function Logement() {
    return (
        <div>
            {logements.slice(14, 15).map(FicheLogement)}
        </div>
    )
}

export default Logement