
const ul = document.querySelector('.list');


let i;
let x;

let li;


for ( i= 1; i <= 15; i++){

    if ( i % 3 == 0 &&  i % 5 == 0){
        x = 'tre-cin';
        ul.innerHTML += `<li class="box box-${x}">${i}</li>`;
        li = document.querySelector(`.box-${x}`).innerHTML = 'fzzBzz';


    }else if ( i % 3 == 0 ){
        x = 'tre';
        ul.innerHTML += `<li class="box box-${x}">${i}</li>`;
        li = document.querySelector(`.box-${x}`).innerHTML = 'fzz';
   

        
    }else if ( i % 5 == 0 ){
        x = 'cin';
        ul.innerHTML += `<li class="box box-${x}">${i}</li>`;
        li = document.querySelector(`.box-${x}`).innerHTML = 'Bzz';

    }else{
        ul.innerHTML += `<li class="box">${i}</li>`;  
    }
    console.log(li);
}




