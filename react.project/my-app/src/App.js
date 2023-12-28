import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3, //여백
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080,
  },
  tableHead: {
    fontSize: '1.0rem',
  },
});
const classes = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3, //여백
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080,
  },
  tableHead: {
    fontSize: '1.0rem',
  },
});
// 스타일을 사용하기 위해 withStyles를 사용한다.
const customers = [
  {
    id: 1,
    image: 'https://source.unsplash.com/user/c_v_r/100x100',
    name: '김일순',
    birthday: '961225',
    gender: 'male',
    job: 'university student',
  },
  {
    id: 2,
    image: 'https://source.unsplash.com/user/c_v_r/100x100',
    name: '김이순',
    birthday: '661225',
    gender: 'female',
    job: 'highschool student',
  },
  {
    id: 1,
    image: 'https://source.unsplash.com/user/c_v_r/100x100',
    name: '김산순',
    birthday: '990205',
    gender: 'male',
    job: 'middle student',
  },
];
class App extends Component {
  render() {
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((c) => {
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  gender={c.gender}
                  job={c.job}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
//map 배열 함수를 쓸 경우 key값을 넣어줘야한다.

export default withStyles(styles)(App);
