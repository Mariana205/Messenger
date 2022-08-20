import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from '../MainPage';


function AuthenticatedApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/user/:id" element={<MainPage />} />

            </Routes>
        </BrowserRouter>
    );
}

export { AuthenticatedApp };
