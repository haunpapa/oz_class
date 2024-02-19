const submitButton = document.querySelector('input[type="submit"]');

// 가입완료 버튼 클릭 시 실행되는 함수입니다.
function handleSubmit(event) {
  // 기본 동작인 폼 전송을 막습니다.
  event.preventDefault();

  // 입력된 데이터를 가져옵니다.
  const name = document.querySelector('#name').value;
  const id = document.querySelector('#id').value;
  const password = document.querySelector('#password').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const checkNumber = document.querySelector('#checknumber').value;
  const city = document.querySelector('#city').value;
  const sex = document.querySelector('input[name="sex"]:checked').value;

  // 데이터를 로그에 출력합니다.
  console.log('이름:', name);
  console.log('아이디:', id);
  console.log('비밀번호:', password);
  console.log('이메일:', email);
  console.log('휴대전화 번호:', phone);
  console.log('인증번호:', checkNumber);
  console.log('지역:', city);
  console.log('성별:', sex);
}

// 가입완료 버튼에 클릭 이벤트 리스너를 추가합니다.
submitButton.addEventListener('click', handleSubmit);