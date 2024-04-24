"use client";
import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products`);
                setData(response?.data?.products);
                console.log(response?.data?.products)
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className='table_box'>
            <h2 align="center" mt={2}>Products Data Table</h2>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Thumbnail</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow key={item?.id}>
                                <TableCell component="th" scope="row">
                                    {item.title}
                                </TableCell>
                                <TableCell align="right">{item.price}</TableCell>
                                <TableCell align="right">
                                    <img
                                        src={item?.thumbnail}
                                        width={100}
                                        height={100}
                                        alt="Thumbnail"
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Products;
