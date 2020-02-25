//carousel
$('.carousel.carousel-slider').carousel({
    indicators: true,
    fullWidth: true,
    padding: 200
}, setTimeout(autoplay, 4500));

//autoplay do carousel
function autoplay(){0
  $('.carousel').carousel('next');
  setTimeout(autoplay, 4500);
}

//select
  $(document).ready(function(){
    $('select').formSelect();
  });

//calculadora de imc
function calcIMC(){
  var altura = document.imc.altura.value;
  var peso = document.imc.peso.value;

  var quadrado = (altura * altura);

  var calculo = (peso/quadrado);

  if (calculo < 18.5){
    alert("Voce esta magro, seu IMC é: " + calculo);
  }
  else if (calculo >= 18.5 && calculo < 24.9){
    alert("Voce esta normal, seu IMC é: " + calculo);
  }
  else if (calculo >= 25 && calculo < 39.9){
    alert("Voce esta obeso, seu IMC é: " + calculo);
  }
  else if (calculo > 40){
    alert("Voce esta com obesidade gravissima, seu IMC é: " + calculo);
  }
}

//local
$(document).on("click", "#botao", function(){
  L.mapquest.key = 'ZwXIxS30jRGGr2LAN5dA4dAms5Lsw5Rb';

  L.mapquest.map('map', {
    center: [-24.1226656,-46.6784699],
    layers: L.mapquest.tileLayer('map'),
    zoom:17
  });
});

//alert
function alerta(){
  M.toast({html: 'Opa, um alerta chegando! Prontinho.'});
}

//sair
$(document).on("click","#fechar",function exitFromApp(){
  navigator.app.exitApp();
});