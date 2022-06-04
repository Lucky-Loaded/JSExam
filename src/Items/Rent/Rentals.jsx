import React, { useEffect, useState } from 'react';
import { getAll, getById, remove } from '../../service/Service';
import { Link, NavLink } from 'react-router-dom';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';

const useStyle = makeStyles({
    table: {
        width: '80%',
        margin: '50px 100px 100px 140px',
    },
    thead: {
        '& > *': {
            background: '#000000',
            color: '#FFFFFF',
            fontSize: '16px'
        }
    },
    trow: {
        '& > *': {
            fontSize: '16px'
        }
    }
})

const Rentals = () => {
    const classes = useStyle();

    const [rental, setRentals] = useState([]);

    useEffect(() => {
        getRentals();
    }, []);

    const getRentals = async () => {
        const response = await getAll("rentalEvents");

        setRentals(response.data);
    }

    const deleteData = async (id) => {
        await remove("rentalEvents", id);
        getRentals();
    }

    return (
        <div>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>ID</TableCell>
                        <TableCell>Start Date</TableCell>
                        <TableCell>End Date</TableCell>
                        <TableCell>Vehicle</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rental.map((data) => (
                            <TableRow className={classes.trow}>
                                <TableCell>{data.id}</TableCell>
                                <TableCell>{data.startDate}</TableCell>
                                <TableCell>{data.endDate}</TableCell>
                                <TableCell>{data.vehicleId}</TableCell>
                                <TableCell>{data.customerId}</TableCell>
                                <TableCell>{data.price}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="secondary" style={{ margin: '0px 20px' }} onClick={() => deleteData(data.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default Rentals;