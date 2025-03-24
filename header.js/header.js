// 절주온 하위 메뉴 토글
function toggleSubBar() {
  const subBar = document.getElementById('subBar');
  subBar.style.display = subBar.style.display === 'block' ? 'none' : 'block';
}

// SNS 리스트 토글
function toggleSNSList() {
  const snsList = document.getElementById('snsList');
  snsList.style.display = snsList.style.display === 'block' ? 'none' : 'block';
}

// 외부 클릭 시 메뉴 닫기
document.addEventListener('click', function (event) {
  const subBar = document.getElementById('subBar');
  const topBarBtn = document.querySelector('.topBarbtn');
  const snsList = document.getElementById('snsList');
  const snsWrapper = document.querySelector('.snsWrapper');

  if (!topBarBtn.contains(event.target) && !subBar.contains(event.target)) {
    subBar.style.display = 'none';
  }

  if (!snsWrapper.contains(event.target)) {
    snsList.style.display = 'none';
  }
});

function toggleSubBar() {
  const subBar = document.getElementById('subBar');
  const triangleIcon = document.querySelector('.triangleIcon');

  if (subBar.style.display === 'block') {
    subBar.style.display = 'none';
    triangleIcon.classList.remove('rotate');
  } else {
    subBar.style.display = 'block';
    triangleIcon.classList.add('rotate');
  }
}
