
const ul = document.querySelector('.list');


let i;
let x;
let hope; 



// for ( i = 1; i <= 15; i++ ){
//     ul.innerHTML += `<li class="box box-${i}">${i}</li>`;
//     console.log(i);
// }

for ( i= 1; i <= 15; i++){

    ul.innerHTML += `<li class="box">${i}</li>`;

    if ( i % 3 == 0){
        console.log(i);
        x = 'tre';
        hope = document.querySelector('.box');
        hope.classList.add(`box-${x}`);
    }
}