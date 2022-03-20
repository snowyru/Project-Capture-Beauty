import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function ProfileSettings(){
    return(
        <>
             <div style={{"backgroundColor" : "#dbf0f9"}} >

                <div style={{"backgroundColor" : "#dbf0f9"}} class="container rounded">
                    <div class="row">
                        <div class="col-md-3 border-right">
                            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">Photographer name</span><span class="text-black-50">photographer@gmail.com</span><span> </span></div>
                        </div>
                        <div class="col-md-5 border-right">
                            <div class="p-3 py-5">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <h4 class="text-right">Profile Settings</h4>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-md-6"><label class="labels">Name</label><TextField variant="standard" class="form-control" placeholder="first name" value=""/></div>
                                    <div class="col-md-6"><label class="labels">last name</label><TextField variant="standard" class="form-control" value="" placeholder="last name"/></div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12"><label class="labels">Mobile Number</label><TextField variant="standard" class="form-control" placeholder="enter phone number" value=""/></div>
                                    <div class="col-md-12"><label class="labels">Email address</label><TextField variant="standard" class="form-control" placeholder="enter email address" value=""/></div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6"><label class="labels">Country</label><TextField variant="standard" class="form-control" placeholder="country" value=""/></div>
                                    <div class="col-md-6"><label class="labels">State/Region</label><TextField variant="standard" class="form-control" value="" placeholder="state/region"/></div>
                                </div>
                                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-3 py-5"><br></br>
                                <br></br>
                                <div class="col-md-12"><label class="labels">Bio</label><TextField variant="standard" class="form-control" placeholder="Add you Bio" value=""/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default ProfileSettings;