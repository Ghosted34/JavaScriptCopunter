let count  = 0;
const displayRes = ()=>{
    document.querySelector('#res').innerText = count;
}

displayRes();

let lower = document.getElementById('lower');
let higher = document.getElementById('higher');
displayRes()

const reduction =()=>{
    if(count <=0){
        count = 0;
    }else{
        count--
    }
    displayRes()
    console.log(count)
}

const increment = ()=>{
    if(count >=50){
        count = 50;
    }else{
        count++
    }
    displayRes()
    console.log(count)
}


lower.addEventListener('click', reduction);
higher.addEventListener('click', increment);
document.querySelector('#res').innerText = count;

