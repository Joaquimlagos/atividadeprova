$(document).ready(function(){
    $('.mascaraCPF').mask('999.999.999-99');
    $('.mascaraData').mask('99/99/9999');
    $('.mascaraCep').mask('99999-999');
});
$('.salario').priceFormat({
    prefix: 'R$ ',
    centsSeparator: ',',
    thousandsSeparator: '.'
});
