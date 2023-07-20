import Kasa from '../../assets/kasa.png';
import LogoWhite from '../../assets/LOGO_white.png';

function Footer() {
    return (
        <div>
            <span className='footer'>
                <img src={LogoWhite} alt='Logo blanc' className='footer_logo' />
                <img src={Kasa} alt='Kasa entreprise' />
            </span>
        </div>
    )
}

export default Footer