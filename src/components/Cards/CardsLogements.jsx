import tableau from '../../datas/logements.json'
import Card from './Card'
import { Link } from "react-router-dom";

function CardsLogements() {
    return (
        <ul className='box_fiches'>
            {tableau.map(({ id, cover, title }) =>
                <Link to={'/logement/' + id}>        
                    <Card 
                        id={id}
                        key={id}
                        cover={cover}
                        title={title}
                    />
                </Link>
            )}
        </ul>
    )
}

export default CardsLogements