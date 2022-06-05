import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { add, getAll, getById, edit } from '../../service/Service';
import { useNavigate, useParams } from 'react-router-dom';

const initialValue = {
    clientId: "",
    carId: "",
    startDate: "",
    endDate: "",
    price: 0
}

const initialCar = {
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


const RentACar = () => {

    const [rent, setRent] = useState(initialValue);
    const [car, setCar] = useState(initialCar);
    const { clientId, carId, startDate, endDate, price } = rent;
    const { brand, model, constructionYear, 
        fuelType, seatsNumber, picture,
        count, carType, pricePerDay} = car;
    const { id } = useParams();

    const history = useNavigate();

    useEffect(() => {
        getData();
    }, []);

    const onValueChange = (e) => {
        setRent({ ...rent, [e.target.name]: e.target.value });
    }

    async function getData() {
        const response = await getById("cars", id);

        setCar(response.data);
    }

    const addRentDetails = async () => {
        rent.price = checkRentalPeriod();

        const car = await getById("cars", id);

        car.data.count -= 1;

        await edit("cars", id, car.data);

        await add("rentalEvents", rent);

        history('/rentals');
    }

    const checkRentalPeriod = () => {
        if(endDate.length === 0){
            return;
        }

        const _days = new Date(Date.parse(endDate)).getDate() - new Date(Date.parse(startDate)).getDate();

        if (_days < 3) {
            return {pricePerDay} * _days;
        }
        else if (_days >= 3 && _days < 5) {
            return ({pricePerDay} * _days * 0.95).toFixed(2);
        }
        else if (_days >= 5 && _days < 10) {
            return ({pricePerDay} * _days * 0.93).toFixed(2);
        }
        else {
            return ({pricePerDay} * _days * 0.9).toFixed(2);
        }
    }


    return (
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center" style={{ paddingTop: "30px" }}>Add Client Details</Typography>
                <FormGroup>
                    <FormControl>
                        <InputLabel>Car</InputLabel>
                        <Input value={brand + " " + model}></Input>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Client Id</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} type="number" name="clientId" value={clientId} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Start Date</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} type="date" name="startDate" value={startDate} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>End Date</InputLabel>
                        <Input onChange={(e) => setRent({...rent, endDate : e.target.value, price: checkRentalPeriod()})} type="date" name="endDate" value={endDate} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Price</InputLabel>
                        <Input value={price}></Input>
                    </FormControl>
                    <div><br /></div>
                    <Box my={3}>
                        <Button variant="contained" onClick={() => addRentDetails()} color="primary" align="center">Add Client</Button>
                        <Button onClick={() => history("/cars")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                    </Box>
                </FormGroup>
            </Box>
        </Container>
    )
}


export default RentACar;