import logements from '../../datas/logements'
import Card from './Card'
import { Link } from "react-router-dom";

function CardsLogements() {
    return (
        <div>
            <ul className='box_fiches'>
                {logements.map(({id, cover, title}) =>
                    <Link to="/logement">        
                        <Card 
                            key={id}
                            cover={cover}
                            title={title}
                        />
                    </Link>
                )}
            </ul>
        </div>
    )
}

export default CardsLogements