import { Link } from "react-router-dom";

function Card(props) {

    //loading user data with fetch
    function loadUserData() {
        fetch(
            `${process.env.REACT_APP_BACKEND}/user/all`,
            {
                'method': 'GET',
                'headers': {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(
            function (backenResponse) {
                return backenResponse.json();
            }
        )
        // .then(
        //     user.pictures.forEach(
        //         function (userName){
                    
        //         }
        //     )
        // )
        
    };

    return (
        <div className="col-4" style={{"margin": "10px 0px"}}>
            <div className="card" style={{"width": "300px"}}>
                <img src={props.picture} width="300" alt="Profile"/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                    <Link to="/" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </div>
    );
}

export default Card;