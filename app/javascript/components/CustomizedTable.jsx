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

const CustomizedTable = ({ tableData }) => {
  const classes = useStyles();
  const headlines = tableData[0] ? Object.keys(tableData[0]) : [];
  console.log(tableData);

  return (
    <>
      {tableData.length > 0 && (
        <TableContainer component={Paper} className={classes.container}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {headlines.map(headline =>
                  (<TableCell align="center">{headline}</TableCell>))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.id}>
                  {Object.values(row).map(cellData => (<TableCell align="center">{cellData}</TableCell>))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default CustomizedTable;