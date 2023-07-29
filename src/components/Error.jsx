import { Link } from 'react-router-dom'
import Error404 from '../assets/404.png'

function Error() {
    return (
        <div className='center'>
            <img src={Error404} alt='Erreur 404' />
            <h2>Oups ! La page que vous demandez n'existe pas.</h2>
            <Link to="/kasa/home">Retourner à la page d'acceuil</Link>
        </div>
    )
}
 
export default Error