import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { getById,  edit} from '../../service/Service';
import { useNavigate, useParams } from 'react-router-dom';

const initialValue = {
    brand: "",
    model: "",
    constructionYear: "",
    fuelType: "",
    seatsNumber: 0,
    picture: "",
    count: 0,
    carType: "",
    pricePerDay: 0,
}

const EditCar = () => {

    const [car, setCar] = useState(initialValue);
    const {brand, model, constructionYear, 
        fuelType, seatsNumber, picture,
        count, carType, pricePerDay} = car;

    const { id } = useParams();

    useEffect(() => {
        loadCarData();
    },[]);

    const loadCarData = async () =>{
        const response = await getById("cars", id);
        setCar(response.data);
    }

    const history = useNavigate();

    const onValueChange = (e) =>
    {
        setCar({...car, [e.target.name]: e.target.value});
    }

    const editCarDetails = async () =>{
       await edit("cars", id ,car);
       history('/');
    }

    return (
        <Container maxWidth="sm">
        <Box my={5}>
        <Typography variant="h5" align="center" style={{paddingTop : "30px"}}>Edit Client Details</Typography>
        <FormGroup>
            <FormControl>
                <InputLabel>Brand</InputLabel>
                <Input onChange={(e) => onValueChange(e)}  name="brand" value={brand} />
            </FormControl>
            <FormControl>
                <InputLabel>Model</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="model" value={model} />
            </FormControl>
            <FormControl>
                <InputLabel>Construction Year</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="constructionYear" value={constructionYear} />
            </FormControl>
            <FormControl>
                <InputLabel>Fuel Type</InputLabel>
                <Input onChange={(e) => onValueChange(e)}  name="fuelType" value={fuelType} />
            </FormControl>
            <FormControl>
                <InputLabel>Seats Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} type="number" name="seatsNumber" value={seatsNumber} />
            </FormControl>
            <FormControl>
                <InputLabel>Picture</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="picture" value={picture} />
            </FormControl>
            <FormControl>
                <InputLabel>Count</InputLabel>
                <Input onChange={(e) => onValueChange(e)} type="number" name="count" value={count} />
            </FormControl>
            <FormControl>
                <InputLabel>Car Type</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="carType" value={carType} />
            </FormControl>
            <FormControl>
                <InputLabel>Price Per Day</InputLabel>
                <Input onChange={(e) => onValueChange(e)} type="number" name="pricePerDay" value={pricePerDay} />
            </FormControl>
            <div><br /></div>
            <Box my={3}>
                <Button variant="contained" onClick={() => editCarDetails() } color="primary" align="center">Edit Car</Button>
                <Button onClick={()=> history("/")} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Cancel</Button>
            </Box>
        </FormGroup>
        </Box>
    </Container>
    )
}


export default EditCar;