import { useState, useEffect, useContext } from 'react';
import { Context as UserContext } from './UserContext';
import { Link } from 'react-router-dom';

function NavBar(props) {


    const initialState = {
        '/': 'text-secondary',
        '/features': 'text-secondary',
        '/pricing': 'text-secondary',
        '/faqs': 'text-secondary',
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
        <header className="p-3 bg-dark text-white">
            <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                        <symbol id="bootstrap" viewBox="0 0 118 94">
                            <title>Bootstrap</title>
                            <path fillRule="evenodd" clipRule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"></path>
                        </symbol>
                    </svg>
                </a>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className={`nav-link px-2 ${linkState['/']}`}>Home</Link></li>
                    <li><Link to="/features" className={`nav-link px-2 ${linkState['/features']}`}>Features</Link></li>
                    <li><Link to="/pricing" className={`nav-link px-2 ${linkState['/pricing']}`}>Pricing</Link></li>
                    <li><Link to="/faqs" className={`nav-link px-2 ${linkState['/faqs']}`}>FAQs</Link></li>
                    <li><Link to="/about" className={`nav-link px-2 ${linkState['/about']}`}>About</Link></li>
                    { loginStatus === false && <li><Link to="/register" className={`nav-link px-2 ${linkState['/register']}`}>Register</Link></li> }
                </ul>

                <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                    <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                </div>

                <div className="text-end">
                    { loginStatus === true && <Link to="/profile-settings" className="btn btn-outline-light me-2">Profile Settings</Link>}
                    { loginStatus === false && <Link to="/login" className="btn btn-warning">Log in</Link>}
                    { loginStatus === true && <button onClick={logout} className='btn btn-danger'>Log out</button> }
                </div>
            </div>
            </div>
        </header>
    )
};

export default NavBar;