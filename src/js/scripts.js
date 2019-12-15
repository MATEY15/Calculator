//= jquery.min.js
//= select2.full.js

// window.onload = function(){
//   // $("body").toggleClass('opacity');
//   $("#overlayer").delay(1000).fadeOut("slow");
//   // overlay.toggle();
//   setTimeout(function() {
//     // overlay.toggle();
//   }, 800);
// }

function heightFooter(){
  var heightFoot = $('.footer').outerHeight();
  $('body').css({ 'padding-bottom': heightFoot});
}
heightFooter()
$( window ).resize(function() {
  heightFooter()
});

// $(".burger-menu").on("click", function() {  
//   $(".menu-header").toggleClass('is-active');
//   $("body").toggleClass('overflow');
// })

/* Popup Window */

// $(".popup").magnificPopup({
//   type: 'inline',
//   removalDelay: 300,
//   mainClass: 'my-mfp-slide-bottom'
// });

/* Popup Window End */

var dataOns = {
  "results": [
    {
      id: 0,
      text: 'Алматы',
      sumkg: 1,
      summ3: 1
    },
    {
      id: 1,
      text: 'Актау',
      sumkg: 110,
      summ3: 14000
    },
    {
      id: 2,
      text: 'Атырау',
      sumkg: 100,
      summ3: 12000
    },
    {
      id: 3,
      text: 'Актобе',
      sumkg: 90,
      summ3: 11000
    },
    {
      id: 4,
      text: 'Кызылорда',
      sumkg: 70,
      summ3: 8000
    },
    {
      id: 5,
      text: 'Шымкент',
      sumkg: 50,
      summ3: 7000
    },
    {
      id: 6,
      text: 'Тараз',
      sumkg: 50,
      summ3: 6000
    },
    {
      id: 7,
      text: 'Караганда',
      sumkg: 50,
      summ3: 7000
    },
    {
      id: 8,
      text: 'Нур-Султан',
      sumkg: 6,
      summ3: 7000
    },
    {
      id: 9,
      text: 'Кокшетау',
      sumkg: 70,
      summ3: 8000
    },
    {
      id: 10,
      text: 'Петропавлск',
      sumkg: 90,
      summ3: 11000
    },
    {
      id: 11,
      text: 'Павлодар',
      sumkg: 70,
      summ3: 8000
    },
    {
      id: 12,
      text: 'Талдыкорган',
      sumkg: 55,
      summ3: 7000
    },
    {
      id: 13,
      text: 'Оскемен',
      sumkg: 70,
      summ3: 80000
    },
    {
      id: 14,
      text: 'Семей',
      sumkg: 85,
      summ3: 8500
    }
  ]
};
// var dataCity = [
//     {
//         id: 0,
//         text: 'Алматы'
//     },
//     {
//         id: 1,
//         text: 'Актау',
//         sumkg: 110,
//         summ3: 14000
//     },
//     {
//         id: 2,
//         text: 'Атырау',
//         sumkg: 100,
//         summ3: 12000
//     },
//     {
//         id: 3,
//         text: 'Актобе',
//         sumkg: 90,
//         summ3: 11000
//     },
//     {
//         id: 4,
//         text: 'Кызылорда',
//         sumkg: 70,
//         summ3: 8000
//     },
//     {
//         id: 5,
//         text: 'Шымкент',
//         sumkg: 50,
//         summ3: 7000
//     },
//     {
//         id: 6,
//         text: 'Тараз',
//         sumkg: 50,
//         summ3: 6000
//     },
//     {
//         id: 7,
//         text: 'Караганда',
//         sumkg: 50,
//         summ3: 7000
//     },
//     {
//         id: 8,
//         text: 'Нур-Султан',
//         sumkg: 6,
//         summ3: 7000
//     },
//     {
//         id: 9,
//         text: 'Кокшетау',
//         sumkg: 70,
//         summ3: 8000
//     },
//     {
//         id: 10,
//         text: 'Петропавлск',
//         sumkg: 90,
//         summ3: 11000
//     },
//     {
//         id: 11,
//         text: 'Павлодар',
//         sumkg: 70,
//         summ3: 8000
//     },
//     {
//         id: 12,
//         text: 'Талдыкорган',
//         sumkg: 55,
//         summ3: 7000
//     },
//     {
//         id: 13,
//         text: 'Оскемен',
//         sumkg: 70,
//         summ3: 80000
//     },
//     {
//         id: 14,
//         text: 'Семей',
//         sumkg: 85,
//         summ3: 8500
//     }
// ];


var mainWrapper = $('.popup-wrapper'),
    tableResult = $('#table-result'),
    popupSelect = mainWrapper.find('.select2-selection__rendered'),
    resultAll,valCity1, valCity2, 
    weight, volume, quantity, 
    resultData, 
    selectedCity1,
    weightCity1, weightCity2, m3City1, m3City2 = '',
    pushArrays = '',
    resultSum1, resultSum2 = '';

var data = $.map(dataOns, function (obj) {
  obj.text = obj.text || obj.name;

  return obj;
});

$(".js-select2").select2({
  data: data,
  placeholder: 'Select none',
  tags: true,
  // minimumResultsForSearch: -1,
});

// dataCity=$("#select-city1").select2('data')[0];
// console.log(dataCity.id);

// $('#select-city1 option').attr('data-alias', 'yourvalue');

$(".select-to").select2({
  data: data,
  tags: true,
  placeholder: 'Select 12'
  // minimumResultsForSearch: -1,
});

$(".product-select").select2({
  data: data,
  tags: true,
});

$.each(dataOns,function(key,data) {
  $.each(data, function(index,value) {
    if(value['sumkg'] != undefined) {
      $($('#select-city1').find('option')[index]).attr('data-weight', value['sumkg']);
      $($('#select-city1').find('option')[index]).attr('data-m3', value['summ3']);
    } 
  });
});
$.each(dataOns,function(key,data) {
  $.each(data, function(index,value) {
    if(value['sumkg'] != undefined) {
      $($('#select-city2').find('option')[index]).attr('data-weight', value['sumkg']);
      $($('#select-city2').find('option')[index]).attr('data-m3', value['summ3']);
    } 
  });
});


// function callUsed() {
//   $('#select-city1').find('option').attr('data-weight', pushArrays);
// }

$('#select-city1').on('change', function(){

  weightCity1 = $(this).children("option:selected").data('weight'); // Цена за кг
  m3City1 = $(this).children("option:selected").data('m3'); // Цена объем
  console.log(weightCity1);
  selectedCity1 = $(this).children("option:selected").text();
});

$('#select-city2').on('change', function(){
  weightCity2 = $(this).children("option:selected").data('weight'); // Цена за кг
  console.log(weightCity2);
  // console.log($(this).val());
  // console.log($(this).data('weight'));
  // console.log($(this).children("option:selected").text())
  // console.log($(this))
  if(selectedCity1 == $(this).children("option:selected").text()) {
    console.log('No City')
  }
});

$(document).ready(function() {
  $('[name=quantity]').bind("change keyup input click", function() {
    if (this.value.match(/[^\d.]/ig)) {
      this.value = this.value.replace(/[^\d.]/ig, '');
    }
  });
});

$('#button-submite').on('click', function(e){

  e.preventDefault();
  weightCity1 = $('#select-city1').children("option:selected").data('weight'); // Цена за кг
  weightCity2 = $('#select-city2').children("option:selected").data('weight'); // Цена за кг
  m3City1 = $('#select-city1').children("option:selected").data('m3'); // Цена объем
  m3City2 = $('#select-city2').children("option:selected").data('m3'); // Цена объем

  // console.log(m3City1);
  // console.log(m3City2);
  // console.log(weightCity2);

  valCity1 = $('#select-city1').next().find('.select2-selection__rendered').text();
  valCity2 = $('#select-city2').next().find('.select2-selection__rendered').text();

  weight = $('#weight').val();
  volume = $('#volume').val();
  quantity = $('#quantity').val();

  if(valCity1 == valCity2) {
    mainWrapper.next('.error-massege').find('p').text('Направление не существует!')
  } else {
    mainWrapper.next('.error-massege').find('p').text('')
    resultSum1 = (weightCity1 * weightCity2) * parseFloat(weight);
    resultSum2 = (m3City1 * m3City2) * parseFloat(volume);

    tableResult.find('tbody tr:nth-child(1) td:nth-child(3)').text(valCity1+ ' & ' +valCity2)
    tableResult.find('tbody tr:nth-child(2) td:nth-child(3)').text(valCity1+ ' & ' +valCity2)
    tableResult.find('tbody tr:nth-child(3) td:nth-child(3)').text(valCity1+ ' & ' +valCity2)
    tableResult.find('tbody tr:nth-child(4) td:nth-child(3)').text(valCity1+ ' & ' +valCity2)
    tableResult.find('tbody tr:nth-child(2) td:nth-child(4)').text(valCity2)
    tableResult.find('tbody tr:nth-child(2) td:nth-child(4)').text(valCity2)
    tableResult.find('tbody tr:nth-child(3) td:nth-child(2)').text(valCity1)
    tableResult.find('tbody tr:nth-child(4) td:nth-child(2)').text(valCity1)
    tableResult.find('tbody tr:nth-child(4) td:nth-child(4)').text(valCity2)
    $('.result-wrapper h3').text('Варианты перевозки между: '+valCity1+'-'+valCity2)

    if(resultSum1 > resultSum2) {
      tableResult.find('tbody tr:nth-child(1) td:last-child').text(parseFloat(Math.round(resultSum1).toFixed(2)))
      tableResult.find('tbody tr:nth-child(2) td:last-child').text(parseFloat(Math.round(resultSum1).toFixed(2)) + 4000)
      tableResult.find('tbody tr:nth-child(3) td:last-child').text(parseFloat(Math.round(resultSum1).toFixed(2)) + 3000)
      tableResult.find('tbody tr:nth-child(4) td:last-child').text(parseFloat(Math.round(resultSum1).toFixed(2)) + 7000)
      $('#itog p').text('ИТОГО: '+parseFloat(Math.round(resultSum1).toFixed(2))+ ' ТГ')
      
    } else {
      tableResult.find('tbody tr:nth-child(1) td:last-child').text(parseFloat(Math.round(resultSum2).toFixed(2)))
      tableResult.find('tbody tr:nth-child(2) td:last-child').text(parseFloat(Math.round(resultSum2).toFixed(2)) + 4000)
      tableResult.find('tbody tr:nth-child(3) td:last-child').text(parseFloat(Math.round(resultSum2).toFixed(2)) + 3000)
      tableResult.find('tbody tr:nth-child(4) td:last-child').text(parseFloat(Math.round(resultSum2).toFixed(2)) + 7000)
      $('#itog p').text('ИТОГО: '+parseFloat(Math.round(resultSum2).toFixed(2))+ ' ТГ')
    }

    $('.result-wrapper').slideDown('is-active')

    console.log(resultSum1)
    console.log(resultSum2)
  }

  // console.log(valCity1) // Текст города
  // console.log(valCity2) // Текст города

  // console.log(weightCity1); // Цена за кг
  // console.log(weightCity2); // Цена за кг

  // console.log(volume) // Объемы (м3):
  // console.log(parseFloat(weight)) // Вес (кг):
  // console.log(quantity) // Кол-во мест:

  



  // console.log(mainWrapper.find('select').val())
  // addResult();
});

tableResult.find('tbody tr').on('click', function(){
  tableResult.find('tbody tr').removeClass('is-active');
  $(this).addClass('is-active');
  $(this).find('td input[type="radio"]').prop('checked', true);
  $('#itog p').text('ИТОГО: ' + $(this).find('td:last-child').text()+' ТГ');
});

$('.open--contact-form .button-open--contact-form').on('click', function(e){
  e.preventDefault();
  $('.popup-sub').slideDown();
  $('.popup-wrapp').slideUp();
});

function addResult(){

  weightCity1 = $('#select-city1').children("option:selected").data('weight'); // Цена за кг
  weightCity2 = $('#select-city2').children("option:selected").data('weight'); // Цена за кг
  console.log(weightCity1);
  console.log(weightCity2);

}

