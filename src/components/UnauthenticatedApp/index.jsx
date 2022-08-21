import { loginWithGoogle } from '../../services/firebase';
import './styles.css';

function UnauthenticatedApp() {
    return (
        <div className='container-login-with-google'>
            <h2 className='title-login-with-google'>Sing in to messenger!</h2>
            <div className='container-btn'>
                <button onClick={loginWithGoogle} className="login login-with-google-btn">
                    Sing in with Google
                </button>
            </div>
        </div>
    );
}

export { UnauthenticatedApp };