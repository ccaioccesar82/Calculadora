function Calculadora(){

this.display = document.querySelector('#display');
this.enter = document.querySelector('.btn-eq');

this.fazConta = () =>  {

try{
    const conta = eval(this.display.value);
        if(!conta){

alert('Conta Inválida');
this.display.value = true;

    }

    this.display.value = conta;

} 
catch(e){

alert('Conta inválida');

}
}

this.capturaCliques = () => {

document.addEventListener('click', function(e){


let el = e.target;

    if(el.classList.contains('btn-num')) {

this.addNumInput(el);

    }

    if(el.classList.contains('btn-clear')){

this.apagaNum();

    }

    if(el.classList.contains('btn-del')){

this.deletaNum();

    }

    if(el.classList.contains('btn-eq')) {

this.fazConta();


    }
    
}.bind(this));

};

this.addNumInput = (el) => {

this.display.value += el.innerText;
this.display.focus();

}

this.apagaNum= () => {

    this.display.value = '';

}

this.deletaNum = () => {

this.display.value = this.display.value.slice(0,-1);

}

this.capturaEnter = () => {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        this.fazConta();
      }
    });
  };

this.inicia = () => {

this.capturaCliques();
this.capturaEnter();

};

}

const calculadora = new Calculadora();
calculadora.inicia();