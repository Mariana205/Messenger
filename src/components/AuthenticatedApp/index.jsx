import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChatPage } from '../ChatPage';


function AuthenticatedApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ChatPage />} />
                <Route path="/user/:id" element={<ChatPage />} />

            </Routes>
        </BrowserRouter>
    );
}

export { AuthenticatedApp };
