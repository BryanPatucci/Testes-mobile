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
  var peso = document.imc.altura.value;
  var sexo = document.imc.sexo.value;

  var quadrado = (altura * altura);

  var calculo = (peso/quadrado);

  if (calculo < 18.5){
    M.toast({html: "Voce esta magro, seu IMC é: " + calculo});
  }
  else if (calculo >= 18.5 && calculo < 24.9){
    M.toast({html: "Voce esta normal, seu IMC é: " + calculo});
  }
  else if (calculo >= 25 && calculo < 39.9){
    M.toast({html: "Voce esta obeso, seu IMC é: " + calculo});
  }
  else if (calculo > 40){
    M.toast({html: "Voce esta com obesidade gravissima, seu IMC é: " + calculo});
  }
}

//alert
function alerta(){
  M.toast({html: 'Opa, um alerta chegando! Prontinho.'});
}

//sair
$(document).on("click","fechar",function exitFromApp(){
  navigator.app.exitApp();
});