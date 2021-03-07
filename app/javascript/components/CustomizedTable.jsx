import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { convertDate } from '../utils/utils';

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

const renderCell = (key, val) => {
  if (key === 'created_at') {
    return (<TableCell align="center" key={key}>{convertDate(new Date(val))}</TableCell>);
  }
  return (<TableCell align="center" key={key}>{val}</TableCell>);
}

const CustomizedTable = ({ tableData }) => {
  const classes = useStyles();
  const headlines = tableData[0] ? Object.keys(tableData[0]) : [];

  return (
    <>
      {tableData.length > 0 && (
        <TableContainer component={Paper} className={classes.container}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {headlines.length && headlines.map(headline =>
                  (<TableCell align="center" key={headline}>{headline}</TableCell>))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.id}>
                  {Object.keys(row).map(key => renderCell(key, row[key]))}
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