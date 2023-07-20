import Montagne from '../assets/montagne.png';
import Collapsible from '../components/Collapsible';
import React from 'react';

function APropos() {
   return (
      <div>
         <div className='img_banner_apropos'>
            <img src={Montagne} alt='Montagne et forêt' className='img_paysage'/>
         </div>

         <div className='desc'>
            <Collapsible label="Fiabilité" collapseHeight="10px">
               <p className='desc_p'>
                  Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
                  et toutes les informations sont régulièrement vérifiées par nos équipes.
               </p>
            </Collapsible>
            <Collapsible label="Respect">
               <p className='desc_p'>
                  La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire
                  ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
               </p>
            </Collapsible>
            <Collapsible label="Service">
               <p className='desc_p'>
                  La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire
                  ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
               </p>
            </Collapsible>
            <Collapsible label="Sécurité">
               <p className='desc_p'>
                  La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logements
                  correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au 
                  locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                  également des ateliers sur la sécurité domestique pour nos hôtes.
               </p>
            </Collapsible>
         </div>
      </div>
   );
}

export default APropos