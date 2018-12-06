

let cards = document.querySelectorAll('#cards');
let faculInput = document.querySelector('input');

function apresentaCard(){
    if(faculInput.value == 'unifesp' || faculInput.value == 'UNIFESP'){
        let  card1 = document.querySelector('#card1');
        let  card2 = document.querySelector('#card2');
        let card3 = document.querySelector('#card3');
        card1.style.display = 'block';
        card2.style.display = 'none';
        card3.style.display = 'none';
    }else if (faculInput.value == 'unicamp' || faculInput.value == 'UNICAMP'){
        let  card1 = document.querySelector('#card1');
        let  card2 = document.querySelector('#card2');
        let card3 = document.querySelector('#card3');
        card1.style.display = 'none';
        card2.style.display = 'block';
        card3.style.display = 'none';
    }else if (faculInput.value == 'usp' || faculInput.value == 'USP'){
        let  card1 = document.querySelector('#card1');
        let  card2 = document.querySelector('#card2');
        let card3 = document.querySelector('#card3');
        
        card1.style.display = 'none';
        card2.style.display = 'none';
        card3.style.display = 'block';
    }
}

