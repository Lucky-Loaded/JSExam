import React, { useEffect, useState } from "react";
import { getAll, remove } from '../../service/Service';
import { Link, NavLink } from 'react-router-dom';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';

const useStyle = makeStyles({
    table: {
        width: '70%',
        margin: '40px 0px 0px 200px',
    },
    thead: {
        '& > *': {
            background: '#000000',
            color: '#d6d6d6',
            fontSize: '14px'
        }
    },
    trow: {
        '& > *': {
            fontSize: '14px'
        }
    }
})

const Cars = () => {
    const classes = useStyle();

    const [car, setCars] = useState([]);

    useEffect(() => {
        getCars();
    }, []);

    const getCars = async () => {
        const response = await getAll("cars");

        setCars(response.data);
    }

    const deleteData = async (id) => {
        await remove("cars", id);
        getCars();
    }

    return (
        <div>
            <Button variant="contained" style={{ background:'#00FF00', color:'#FFFFFF', margin: '10px 20px' }} item={Link} to={`/addCar`}>Add Car</Button>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>ID</TableCell>
                        <TableCell>Brand</TableCell>
                        <TableCell>Model</TableCell>
                        <TableCell>Construction Year</TableCell>
                        <TableCell>Fuel Type</TableCell>
                        <TableCell>Seats Number</TableCell>
                        <TableCell>Picture</TableCell>
                        <TableCell>Count</TableCell>
                        <TableCell>Car Type</TableCell>
                        <TableCell>Price Per Day</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        car.map((data) => (
                            <TableRow className={classes.trow}>
                                <TableCell>{data.id}</TableCell>
                                <TableCell>{data.brand}</TableCell>
                                <TableCell>{data.model}</TableCell>
                                <TableCell>{data.constructionYear}</TableCell>
                                <TableCell>{data.fuelType}</TableCell>
                                <TableCell>{data.seatsNumber}</TableCell>
                                <TableCell>{data.picture}</TableCell>
                                <TableCell>{data.count}</TableCell>
                                <TableCell>{data.carType}</TableCell>
                                <TableCell>{data.pricePerDay}</TableCell>
                                <TableCell>
                                    <Button variant="contained" style={{ background:'#00FF00', color:'#FFFFFF', margin: '5px 5px' }} item={Link} to={`/rentCar/${data.id}`}
                                    disabled={
                                        data.count > 0 
                                        ? false
                                        : true
                                    }
                                    >Rent</Button>
                                    <Button variant="contained" style={{ background:'#00FF00', color:'#FFFFFF', margin: '5px 5px' }} item={Link} to={`/editCar/${data.id}`}>Edit</Button>
                                    <Button variant="contained" style={{ background:'#ff2424', color:'#FFFFFF', margin: '5px 5px' }} onClick={() => deleteData(data.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default Cars;