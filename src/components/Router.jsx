import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import APropos from '../pages/a-propos';
import Logement from '../pages/fiche-logement';
import Error from '../components/Error';

function Router() {
    return (
        <Routes>
            <Route path="/kasa/home" element={<Home />} />
            <Route path="/kasa/a-propos" element={<APropos />} />
            <Route path="/kasa/logement/:logementId" element={<Logement />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default Router