import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

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
      <>
        {customers.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </>
    );
  }
}
//map 배열 함수를 쓸 경우 key값을 넣어줘야한다.

export default App;
