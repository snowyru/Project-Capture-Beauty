import { useState, useEffect, useContext } from 'react';
import { Context as UserContext } from './UserContext';
import { Link } from 'react-router-dom';

function NavBar(props) {


    const initialState = {
        '/': 'text-secondary',
        '/about': 'text-secondary',
        '/register': 'text-secondary'
    }

    let [ linkState, setLinkState ] = useState(initialState);
    let { state, setUserState } = useContext(UserContext);
    let { loginStatus } = state;

    useEffect(
        function() {
            setLinkState(
                {
                    ...initialState,
                    [props.path]: 'text-white'
                }
            )
        },
        [ props.path ]
    );

    function logout() {
        setUserState(
            {
                ...state,
                loginStatus: false
            }
        );
    };

    

    return (
        <header className="p-2 ps-5 text-white " style={{"background-color":"#003a69", "fontSize":"20px", }}>
            
            <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className={`nav-link px-2 ${linkState['/']}`}>Home</Link></li>
                    <li><Link to="/about" className={`nav-link px-2 ${linkState['/about']}`}>About</Link></li>
                    { loginStatus === false && <li><Link to="/register" className={`nav-link px-2 ${linkState['/register']}`}>Register</Link></li> }
                </ul>
                {/* <div className="text-end pe-5">
                    { loginStatus === true && <Link to="/profile-settings" className="btn btn-outline-light me-2">Profile Settings</Link>}
                    { loginStatus === false && <Link to="/login" className="btn btn-warning">Log in</Link>}
                    { loginStatus === true && <button onClick={logout} className='btn btn-danger'>Log out</button> }
                </div> */}
            </div>
            
            </div>
            
        </header>
    )
};

export default NavBar;