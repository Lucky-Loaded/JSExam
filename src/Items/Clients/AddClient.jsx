import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { add } from '../../service/Service';
import { useNavigate  } from 'react-router-dom';

const initialValue = {
    fullName: "",
    email: "",
    phoneNumber: "",
}

const AddClient = () => {

    const [client, setClient] = useState(initialValue);
    const {fullName, email, phoneNumber} = client;

    const history = useNavigate();

    const onValueChange = (e) =>
    {
        setClient({...client, [e.target.name]: e.target.value});
    }

    const addClientDetails = async () =>{
        if(validateClient(client)){
            await add("clients", client);
            history('/clients');
        }else{
            history('/addClients');
        }        
    }

    const validateClient = (client) => {
        if (client.fullName === "" || client.email === "" || client.phoneNumber === ""){
            return false;
        }

        return true;
    }

    return (
        <Container maxWidth="sm">
            <Box my={5}>
            <Typography variant="h5" align="center" style={{paddingTop : "30px"}}>Add Customer Details</Typography>
            <FormGroup>
                <FormControl>
                    <InputLabel>Customer Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)}  name="fullName" value={fullName} />
                </FormControl>
                <FormControl>
                    <InputLabel>Email address</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} type="email" name="email" value={email} />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone Number</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="phoneNumber" value={phoneNumber} />
                </FormControl>
                <div><br /></div>
                <Box my={3}>
                    <Button variant="contained" onClick={() => addClientDetails() } color="primary" align="center"
                    disabled={
                        client.fullName.length !== 0 && client.email.length !==0 && client.phoneNumber.length !== 0
                        ? false
                        : true
                    }>Add Customer</Button>
                    <Button onClick={()=> history("/clients")} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Cancel</Button>
                </Box>
            </FormGroup>
            </Box>
        </Container>
    )
}


export default AddClient;