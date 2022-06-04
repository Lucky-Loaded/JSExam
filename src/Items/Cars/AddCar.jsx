import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button, Select, MenuItem } from '@material-ui/core';
import { add } from '../../service/Service';
import { useNavigate } from 'react-router-dom';

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

const AddCar = () => {

    const [car, setCar] = useState(initialValue);
    const { brand, model, constructionYear,
        fuelType, seatsNumber, picture,
        count, carType, pricePerDay } = car;

    const history = useNavigate();

    const onValueChange = (e) => {
        console.log(car);
        setCar({ ...car, [e.target.name]: e.target.value });
    }

    const addCarDetails = async () => {
        await add("cars", car);
        history('/');
    }

    return (
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center" style={{ paddingTop: "30px" }}>Add Client Details</Typography>
                <FormGroup>
                    <FormControl>
                        <InputLabel>Brand</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="brand" value={brand} />
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
                        <Select onChange={(e) => setCar({ ...car, fuelType: e.target.value })}>
                            <MenuItem value={"Petrol"}>Petrol</MenuItem>
                            <MenuItem value={"Diesel"}>Diesel</MenuItem>
                            <MenuItem value={"Electric"}>Electric</MenuItem>
                        </Select>
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
                        <Select onChange={(e) => setCar({ ...car, carType: e.target.value })}>
                            <MenuItem value={"Economy"}>Economy</MenuItem>
                            <MenuItem value={"Luxury"}>Luxury</MenuItem>
                            <MenuItem value={"Cargo"}>Cargo</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Price Per Day</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} type="number" name="pricePerDay" value={pricePerDay} />
                    </FormControl>
                    <div><br /></div>
                    <Box my={3}>
                        <Button variant="contained" onClick={() => addCarDetails()} color="primary" align="center"
                            disabled={
                                car.brand.length !== 0 &&
                                car.model.length !== 0 &&
                                car.constructionYear.length !== 0 &&
                                car.fuelType.length !== 0 &&
                                    parseInt(car.seatsNumber) > 0 &&
                                    parseInt(car.pricePerDay) > 0 &&
                                    parseInt(car.count) > 0 &&
                                    car.carType.length !== 0
                                    ? false
                                    : true
                            }>Add Car</Button>
                        <Button onClick={() => history("/")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                    </Box>
                </FormGroup>
            </Box>
        </Container>
    )
}


export default AddCar;