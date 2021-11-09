
const ul = document.querySelector('.list');


let i;
let x;
let hope; 



// for ( i = 1; i <= 15; i++ ){
//     ul.innerHTML += `<li class="box box-${i}">${i}</li>`;
//     console.log(i);
// }

for ( i= 1; i <= 100; i++){

    if ( i % 3 == 0 &&  i % 5 == 0){
        x = 'tre-cin';
        ul.innerHTML += `<li class="box box-${x}">${i}</li>`;

    }else if ( i % 3 == 0 ){
        x = 'tre';
        ul.innerHTML += `<li class="box box-${x}">${i}</li>`;
        
    }else if ( i % 5 == 0 ){
        x = 'cin';
        ul.innerHTML += `<li class="box box-${x}">${i}</li>`;
        
    }else{
        ul.innerHTML += `<li class="box">${i}</li>`;
    }
}




