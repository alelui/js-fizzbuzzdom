
const ul = document.querySelector('.list');

let i;

for ( i = 1; i <= 100; i++){

    if ( i % 3 == 0 &&  i % 5 == 0){
        ul.innerHTML += `<li class="box box-tre-cin"><span>fizzBuzz</span></li>`;

    }else if ( i % 3 == 0 ){
        ul.innerHTML += `<li class="box box-tre"><span>fizz</span></li>`;
   
    }else if ( i % 5 == 0 ){
        ul.innerHTML += `<li class="box box-cin"><span>Buzz</span></li>`;

    }else{
        ul.innerHTML += `<li class="box">${i}</li>`;  
    }
}




