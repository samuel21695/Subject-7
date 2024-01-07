import React, { useState, useEffect } from 'react';
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


const Sidebar = () => {
  const [page, setPage] = useState('home');
  const [inputValue, setInputValue] = useState('');

  const pageMap = {
    '김우진': 'woo',
    '김현': 'hyun',
    '방승희': 'bang',
    '변호녕': 'ho',
    '소사무엘': 'so',
    '송영준': 'song',
    '신동현': 'shin',
    '오승민': 'oh',
    '유승민': 'yu',
    '윤준현': 'yoon',
    '이민구': 'ming',
    '이유안': 'yuan',
    '이채이': 'chae',
    '정영식': 'jung',
    '최성민': 'sung',
    '최은철': 'eun',
    '홍문기': 'hong',
    // 나머지 매핑도 이와 같이 추가해주세요.
  };

  const navigatePage = (page) => {
    setPage(page);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pageMap[inputValue])  {
      navigatePage(pageMap[inputValue]);
    }
  };



  return (
    <div id="page">
      <div id="sidebar">
      <ul>
        <li><a onClick={() => navigatePage('woo')}>김우진</a></li>
        <li><a onClick={() => navigatePage('hyun')}>김현</a></li>
        <li><a onClick={() => navigatePage('bang')}>방승희</a></li>
        <li><a onClick={() => navigatePage('ho')}>변호녕</a></li>
        <li><a onClick={() => navigatePage('so')}>소사무엘</a></li>
        <li><a onClick={() => navigatePage('song')}>송영준</a></li>
        <li><a onClick={() => navigatePage('shin')}>신동현</a></li>
        <li><a onClick={() => navigatePage('oh')}>오승민</a></li>
        <li><a onClick={() => navigatePage('yu')}>유승민</a></li>
        <li><a onClick={() => navigatePage('yoon')}>윤준현</a></li>
        <li><a onClick={() => navigatePage('ming')}>이민구</a></li>
        <li><a onClick={() => navigatePage('yuan')}>이유안</a></li>
        <li><a onClick={() => navigatePage('chae')}>이채이</a></li>
        <li><a onClick={() => navigatePage('jung')}>정영식</a></li>
        <li><a onClick={() => navigatePage('sung')}>최성민</a></li>
        <li><a onClick={() => navigatePage('eun')}>최은철</a></li>
        <li><a onClick={() => navigatePage('hong')}>홍문기</a></li>
        {/* 나머지 링크들도 위와 같이 추가해주세요. */}
      </ul>
      </div>
      <div id="main">
        <div id="contents">
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
        {/* 나머지 페이지들도 위와 같이 추가해주세요. */}
        </div>
        <form id="form" onSubmit={handleSubmit}>
          <input type="text" name="text" id="text" placeholder="Write your name" value={inputValue} onChange={handleInputChange}></input>
          <input type="submit" value="Show"></input>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;