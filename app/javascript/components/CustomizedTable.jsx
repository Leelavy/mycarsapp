import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  container: {
    maxWidth: 800,
    margin: '2rem 0',
  },
  table: {
    minWidth: 300,
    '& .MuiTableCell-root': {
      padding: '1rem 0 1rem 2rem',
    },
  },
});

const createData = (id, name, createdAt) => {
  return { id, name, createdAt };
}

const rows = [
  createData('1', "mazda", "1990..."),
  createData('2', "mazda", "1990..."),
  createData('3', "mazda", "1990..."),
  createData('4', "mazda", "1990..."),
  createData('5', "mazda", "1990..."),
  createData('1', "mazda", "1990..."),
  createData('2', "mazda", "1990..."),
  createData('3', "mazda", "1990..."),
  createData('4', "mazda", "1990..."),
  createData('5', "mazda", "1990..."),
  createData('1', "mazda", "1990..."),
  createData('2', "mazda", "1990..."),
  createData('3', "mazda", "1990..."),
  createData('4', "mazda", "1990..."),
  createData('5', "mazda", "1990..."),
];

const CustomizedTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">NAME</TableCell>
            <TableCell align="center">CREATED AT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomizedTable;