import React, { useState } from "react";
import StudentOne from './pages/Student1';
import StudentTwo from './pages/Student2';
import StudentThree from './pages/Student3';
import StudentFour from './pages/Student4';
import StudentFive from './pages/Student5';
import StudentSix from './pages/Student6';
import StudentSeven from './pages/Student7';
import StudentEight from './pages/Student8';
import StudentNine from './pages/Student9';
import StudentTen from './pages/Student10';
import StudentEleven from './pages/Student11';
import StudentTwelve from './pages/Student12';
import StudentThirteen from './pages/Student13';
import StudentFourteen from './pages/Student14';
import StudentFifteen from './pages/Student15';
import StudentSixteen from './pages/Student16';
import StudentSeventeen from './pages/Student17';

const Main = () =>{
  const [page, setPage] = useState('home');

  return (
    <div id="main">
      <div id="content">
        {page === 'woo' && <StudentOne />}
        {page === 'hyun' && <StudentTwo />}
        {page === 'bang' && <StudentThree />}
        {page === 'ho' && <StudentFour />}
        {page === 'so' && <StudentFive />}
        {page === 'song' && <StudentSix />}
        {page === 'shin' && <StudentSeven />}
        {page === 'oh' && <StudentEight />}
        {page === 'yu' && <StudentNine />}
        {page === 'yoon' && <StudentTen />}
        {page === 'ming' && <StudentEleven />}
        {page === 'yuan' && <StudentTwelve />}
        {page === 'chae' && <StudentThirteen />}
        {page === 'jung' && <StudentFourteen />}
        {page === 'sung' && <StudentFifteen />}
        {page === 'eun' && <StudentSixteen />}
        {page === 'hong' && <StudentSeventeen />}
      </div>
      <form id="form">
        <input type="text" name="test" id="text" placeholder="Write your name"></input>
        <input type="submit" value="Show"></input>
      </form>
    </div>
  );
}

export default Main;