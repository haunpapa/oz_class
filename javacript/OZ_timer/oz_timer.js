const nowTime = new Date()
console.log(nowTime)
const endTime = new Date(2024,0,31,23,59,59)
console.log(endTime)



function displayCurrentTime() {
    let now = new Date();
    let day = now.getDate(); 
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById('second').innerText =`${endTime.getSeconds()-seconds + 1}초`;
    document.getElementById('min').innerText=`${endTime.getMinutes()-minutes}분`;
    document.getElementById('hour').innerText=`${endTime.getHours()-hours}시간`;
    document.getElementById('day').innerText=`${endTime.getDate()-day}일`;

}

setInterval(displayCurrentTime, 1000);

