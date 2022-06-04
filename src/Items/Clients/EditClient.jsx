import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { getById,  edit} from '../../service/Service';
import { useNavigate, useParams } from 'react-router-dom';

const initialValue = {
    fullName: "",
    email: "",
    phoneNumber: "",
}

const EditClient = () => {

    const [client, setClient] = useState(initialValue);
    const {fullName, email, phoneNumber} = client;

    const { id } = useParams();

    useEffect(() => {
        loadClientData();
    },[]);

    const loadClientData = async () =>{
        const response = await getById("clients", id);
        setClient(response.data);
    }

    const history = useNavigate();

    const onValueChange = (e) =>
    {
        setClient({...client, [e.target.name]: e.target.value});
    }

    const editClientDetails = async () =>{
       await edit("clients", id ,client);
       history('/clients');
    }

    return (
        <Container maxWidth="sm">
            <Box my={5}>
            <Typography variant="h5" align="center" style={{paddingTop : "30px"}}>Update Client Details</Typography>
            <FormGroup>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="fullName" value={fullName} />
                </FormControl>
                <FormControl>
                    <InputLabel>Email address</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} type="email" name="email" value={email} />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone Number</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} type="number" name="phoneNumber" value={phoneNumber} />
                </FormControl>
                <div><br /></div>
                <Box my={3}>
                    <Button variant="contained" onClick={() => editClientDetails() } color="primary" align="center">Update Client</Button>
                    <Button onClick={()=> history("/clients")} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Cancel</Button>
                </Box>
            </FormGroup>
            </Box>
        </Container>
    )
}


export default EditClient;