import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import APropos from '../pages/a-propos';
import Logement from '../pages/fiche-logement';
import Error from '../components/Error';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Router() {
    return (
        <HashRouter >
            <Header />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/a-propos" element={<APropos />} />
                <Route path="/logement/:logementId" element={<Logement />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </HashRouter >
    )
}

export default Router