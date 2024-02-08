let time = document.getElementById('time')
let now = new Date()
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate(); 
let now_time = `( ${year}년 ${month}월 ${day}일 )`
time.append(now_time)


// data-table의 모든 0번 로우에 체크박스를 추가하는 함수
function addCheckboxToAllRows() {
    var dataTable = document.getElementById('data-table');
    var rows = dataTable.getElementsByTagName('tr');
  
    // 첫 번째 로우부터 시작하여 모든 0번 로우에 체크박스를 추가
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var firstCell = row.cells[0];
  
      // 체크박스 엘리먼트 생성
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
  
      // 체크박스를 로우의 첫 번째 셀에 추가
      firstCell.appendChild(checkbox);
    }
  }
  
  // 모든 0번 로우에 체크박스 추가 실행
  addCheckboxToAllRows();



  // 페이지네이션을 처리하는 함수
function handlePagination() {
    var dataTable = document.getElementById('data-table');
    var rows = dataTable.rows;
    var itemsPerPage = 25; // 한 페이지에 보여줄 항목 수
  
    // 페이지 수 계산
    var pageCount = Math.ceil(rows.length / itemsPerPage);
  
    // 페이지네이션을 표시할 엘리먼트 선택
    var pagination = document.querySelector('.pagination');
  
    // 이전 페이지 링크 생성
    var previousLink = document.createElement('a');
    previousLink.classList.add('page-link');
    previousLink.href = '#';
    previousLink.innerText = 'Previous';
  
    // 이전 페이지 링크를 페이지네이션에 추가
    var previousItem = document.createElement('li');
    previousItem.classList.add('page-item');
    previousItem.appendChild(previousLink);
    pagination.appendChild(previousItem);
  
    // 각 페이지 링크 생성 및 추가
    for (var i = 1; i <= pageCount; i++) {
      var pageLink = document.createElement('a');
      pageLink.classList.add('page-link');
      pageLink.href = '#';
      pageLink.innerText = i;
  
      var pageItem = document.createElement('li');
      pageItem.classList.add('page-item');
      pageItem.appendChild(pageLink);
      pagination.appendChild(pageItem);
    }
  
    // 다음 페이지 링크 생성
    var nextLink = document.createElement('a');
    nextLink.classList.add('page-link');
    nextLink.href = '#';
    nextLink.innerText = 'Next';
  
    // 다음 페이지 링크를 페이지네이션에 추가
    var nextItem = document.createElement('li');
    nextItem.classList.add('page-item');
    nextItem.appendChild(nextLink);
    pagination.appendChild(nextItem);
  
    // 초기 페이지로 첫 번째 페이지 설정
    showPage(1);
  
    // 페이지를 변경할 때마다 해당 페이지의 데이터만 보여주는 함수
    function showPage(page) {
      // 각 페이지의 첫 번째 항목과 마지막 항목의 인덱스 계산
      var startIndex = (page - 1) * itemsPerPage;
      var endIndex = startIndex + itemsPerPage;
  
      // 모든 항목을 숨김
      for (var i = 0; i < rows.length; i++) {
        rows[i].style.display = 'none';
      }
  
      // 해당 페이지의 항목만 보여줌
      for (var j = startIndex; j < endIndex; j++) {
        if (rows[j]) {
          rows[j].style.display = 'table-row';
        }
      }
    }
  
    // 페이지네이션 링크를 클릭할 때마다 해당 페이지로 이동하도록 이벤트 리스너 추가
    pagination.addEventListener('click', function (event) {
      event.preventDefault();
      var target = event.target;
  
      if (target.tagName === 'A') {
        var page = parseInt(target.innerText);
        if (!isNaN(page)) {
          showPage(page);
        }
      }
    });
  }
  
  // 페이지네이션 처리 실행
  handlePagination();
