import React, { useState } from 'react';
import StudentOne from './pages/Student1';
import StudentTwo from './pages/Student2';


const Sidebar = () => {
  const [page, setPage] = useState('home');

  const navigatePage = (page) => {
    setPage(page);
  };

  return (
    <div>
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
      <div id="content">
        {page === 'woo' && <StudentOne />}
        {page === 'hyun' && <StudentTwo />}

        {/* 나머지 페이지들도 위와 같이 추가해주세요. */}
      </div>
    </div>
  );
};

export default Sidebar;