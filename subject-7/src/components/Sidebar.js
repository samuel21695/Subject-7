import React, { useState } from 'react';
import Home from './pages/Student1';
import Hyun from './pages/Student2';


const Sidebar = () => {
  const [page, setPage] = useState('home');

  const navigatePage = (page) => {
    setPage(page);
  };

  return (
    <div>
      <ul>
        <li><a onClick={() => navigatePage('home')}>김우진</a></li>
        <li><a onClick={() => navigatePage('hyun')}>김현</a></li>
        {/* 나머지 링크들도 위와 같이 추가해주세요. */}
      </ul>
      <div id="content">
        {page === 'home' && <Home />}
        {page === 'hyun' && <Hyun />}

        {/* 나머지 페이지들도 위와 같이 추가해주세요. */}
      </div>
    </div>
  );
};

export default Sidebar;