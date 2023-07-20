import React from 'react';
import logements from '../../datas/logements'
import FicheLogement from './FicheLogement';

function Logement() {
    return (
        <div>
            {logements.slice(0, 1).map(FicheLogement)}
        </div>
    )
}

export default Logement