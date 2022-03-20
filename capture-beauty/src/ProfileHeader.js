import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function ProfileHeader () {
    return(
        <>
        <br></br>
        <br></br>
        <div className="pcontainer">
        <div className="avatar-flip">
            <img alt="" src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="150" width="150"/>
            <img alt="" src="http://i1112.photobucket.com/albums/k497/animalsbeingdicks/abd-3-12-2015.gif~original" height="150" width="150"/>
        </div>
        <br></br>
        <h2>John Doe</h2>

        <Grid ><Button className="m-2" variant='contained'>Message</Button>
            <Button className="m-2" variant='contained'>Follow</Button></Grid>
            <h4>Bio</h4>        
        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna ip sum dolore.</p>
        <p>Connec dolore ipsum faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </div>
        
        </>
    );
}
export default ProfileHeader;