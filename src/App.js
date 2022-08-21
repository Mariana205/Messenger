import React from 'react'; 
 
import { AuthenticatedApp } from './components/AuthenticatedApp' 
import { UnauthenticatedApp } from './components/UnauthenticatedApp' 
import { useAuth } from './hooks/useAuth'; 
 
function App() { 
    const auth = useAuth(); 
 
    return ( 
        <> 
            {auth ? <AuthenticatedApp /> : <UnauthenticatedApp />} 
        </> 
    ); 
} 
 
export default App;