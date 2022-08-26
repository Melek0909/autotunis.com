var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)
const dollarbtn =document.querySelector('.o1');
const dinarbtn= document.querySelector('.o2');

const eurobtn = document.querySelector('.o3');
const currency =document.querySelectorAll('.curr')
const price= document.querySelectorAll('.price');
  



const btn = document.querySelector('#btn');
const sb = document.querySelector('.options')

let state = '$ dollar';

function getRatio(state) {
    if (state === '$ dollar' && sb.value === 'TN Dinar') return {currency: 'TND ',ratio:3.2};
    if (state === '$ dollar' && sb.value === '€ euro') return {currency: '€ ',ratio:1};
    if (state === 'TN Dinar' && sb.value === '$ dollar') return {currency: '$ ',ratio:1/3.2};
    if (state === 'TN Dinar' && sb.value === '€ euro') return {currency: '€ ',ratio:1/3.2};
    if (state === '€ euro' && sb.value === 'TN Dinar') return {currency: 'TND ',ratio:3.2};
    if (state === '€ euro' && sb.value === '$ dollar') return {currency: '$ ',ratio:1}
}

btn.onclick = (event) => {
    event.preventDefault();
    if (sb.value !== state) {
        for( let i=0; i < price.length; i++){
            currency[i].innerHTML=getRatio(state).currency
            price[i].innerHTML=parseFloat(price[i].innerHTML)*getRatio(state).ratio;
        }

    }
    state = sb.value
};






