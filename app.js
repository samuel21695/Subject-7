 // 페이지 이동을 처리하는 함수
function navigatePage(page) {
  switch (page) {
    case 'home':
      document.getElementById('content').innerHTML = `<div class ="introduce"><h1>김우진 소개</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim placeat fugit mollitia error totam voluptatibus, corrupti tempore? Illo libero, eveniet dolorum nihil nemo incidunt aut ea maxime necessitatibus odio.</p></div><div c;ass="chracter"><h2>김우진 장점</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas, facilis omnis modi dolores rem nobis atque nesciunt dolorum iure? Impedit esse modi quo facere rem adipisci ad tempora accusamus?</p></div>`;
      break;
    case 'hyun':
      document.getElementById('content').innerHTML = 
      '<h1>김현 소개</h1>';
      break;
    case 'seunghee':
      document.getElementById('content').innerHTML = '<h1>방승희</h1>';
      break;
    case 'honyeong':
      document.getElementById('content').innerHTML = '<h1>변호녕</h1>';
      break;
    case 'samuel':
      document.getElementById('content').innerHTML = '<h1>소사무엘</h1>';
      break;
    case 'youngjoon':
      document.getElementById('content').innerHTML = '<h1>송영준</h1>';
      break;
    case 'donghyun':
      document.getElementById('content').innerHTML = '<h1>신동현</h1>';
      break;
    case 'seungmin':
      document.getElementById('content').innerHTML = '<h1>오승민</h1>';
      break;      
    case 'seungmin2':
      document.getElementById('content').innerHTML = '<h1>유승민</h1>';
      break;
    case 'joon':
      document.getElementById('content').innerHTML = '<h1>윤준현</h1>';
      break;
    case 'mingoo':
      document.getElementById('content').innerHTML = '<h1>이민구</h1>';
      break;
    case 'yuan':
      document.getElementById('content').innerHTML = '<h1>이유안</h1>';
      break;
    case 'chae':
      document.getElementById('content').innerHTML = '<h1>이채이</h1>';
      break;
    case 'young':
      document.getElementById('content').innerHTML = '<h1>정영식</h1>';
      break;
    default:
      document.getElementById('content').innerHTML = '<p>페이지를 찾을 수 없습니다.</p>';
  }
}

// 초기 페이지 로딩 시 홈 페이지 표시

// 각 링크 클릭 시 페이지 이동
const aTags = document.querySelectorAll('ul a')
aTags.forEach(link => {
  link.addEventListener('click', () => {
    const page = link.getAttribute('href').substring(1); // # 제거
    navigatePage(page);
  });
});  

// form 제출 시 이벤트 발생
document.getElementById('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const inputValue = document.getElementById('text').value
  aTags.forEach(link => {
    if (link.textContent === inputValue) {
    const page = link.getAttribute('href').substring(1); // # 제거
    navigatePage(page);
  };
});
});
