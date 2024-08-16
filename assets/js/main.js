const form = document.getElementById('form');


form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const bmi = (weight/(height*height)).toFixed(2);
    const value = document.getElementById('value');
    let description = '';
    value.classList.add('atencao');
    document.getElementById('infos').classList.remove('hidden');

    if(bmi < 18.5){
        description = 'Cuidado! Você está abaixo do seu peso ideal.';
        value.classList.remove('atencao');
        value.classList.add('cuidado');

    } else if(bmi <= 25){
        description = 'Parabéns! Você está com o seu peso ideal.';
        value.classList.remove('atencao');
        value.classList.add('normal');

    } else if(bmi <= 30){
        description = 'Atenção! Você está com sobrepeso.';

    } else if(bmi <= 35){
        description = 'Atenção! Você está com obesidade moderada.';

    } else if(bmi <= 40){
        description = 'Atenção! Você está com obesidade severa.';

    } else{
        description = 'Atenção!, Você está com obesidade morbida.';
        
    }

    value.textContent = bmi.replace('.',',');
    document.getElementById('description').textContent = description;
})