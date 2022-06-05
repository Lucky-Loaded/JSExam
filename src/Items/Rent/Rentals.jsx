import React, { useEffect, useState } from 'react';
import { getAll, getById, remove } from '../../service/Service';
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
            color: '#FFFFFF',
            fontSize: '14px'
        }
    },
    trow: {
        '& > *': {
            fontSize: '14px'
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
                        <TableCell>Car</TableCell>
                        <TableCell>Client</TableCell>
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
                                <TableCell>{data.carId}</TableCell>
                                <TableCell>{data.clientId}</TableCell>
                                <TableCell>{data.price}</TableCell>
                                <TableCell>
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

export default Rentals;