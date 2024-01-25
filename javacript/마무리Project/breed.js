const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/42"
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all"
const request1 = new XMLHttpRequest()
const request2 = new XMLHttpRequest()

const header = document.getElementById("header")
const main = document.getElementById("main")
const input = document.getElementById("filter-text")
const button = document.getElementById("filter-button")
const select = document.getElementById("filter-select")
const more = document.getElementById("more")
const tothetop = document.getElementById("tothetop")
const reset = document.getElementById("reset")

const currentDogs=[]

reset.addEventListener('click',function(){
    main.innerHTML = " "
    const request3 = new XMLHttpRequest()
    request3.open("get",apiRandomDogs)
    request3.addEventListener("load",function(){
        const response = JSON.parse(request3.response)
        response.message.forEach(function(item){
        currentDogs.push(item)
        displayDogs(item)
        });
    })
    request3.send()
})

function displayDogs(item){
    const dogImageDiv=document.createElement("div")
    dogImageDiv.classList.add("flex-item")
    dogImageDiv.innerHTML = `
    <img src=${item}>`

main.appendChild(dogImageDiv)

}

window.addEventListener('load',function(){

    // 강아지 사진 뿌리기
    request1.open('get', apiRandomDogs)
    request1.addEventListener('load',function(){
        const response = JSON.parse(request1.response)
        response.message.forEach(function(item){
            currentDogs.push(item)
            displayDogs(item)
        });
    })
    request1.send()

    // 셀렉트에 견종 정보 뿌리기
    request2.open("get", apiAllBreeds)
    request2.addEventListener("load",function(){
        const response = JSON.parse(request2.response)
        Object.keys(response.message).forEach(function(item){
            const option = document.createElement("option")
            option.textContent = item
            option.value = item
            select.appendChild(option)
        });

    })
    request2.send()
    
})

button.addEventListener("click",function(){
    main.innerHTML = " "
    let filteredDogs = currentDogs.filter(function(item){
        return item.indexOf(input.value) !== -1
    })

    input.value = ""

    filteredDogs.forEach(function(item){
        displayDogs(item)
    })
})

select.addEventListener("change",function(){
    main.innerHTML = " "
    let filteredDogs = currentDogs.filter(function(item){
        return item.indexOf(select.value) !== -1
    })

    filteredDogs.forEach(function(item){
        displayDogs()
    })
})

more.addEventListener('click',function(){
    request1.open("get",apiRandomDogs)
    request1.addEventListener("load",function(){
        const response = JSON.parse(request1.response)
        response.message.forEach(function(item){
        currentDogs.push(item)
        displayDogs(item)
        });
    })
    request1.send()
})

tothetop.addEventListener("click",function(){
    window.scrollTo({ top : 0 })
})

