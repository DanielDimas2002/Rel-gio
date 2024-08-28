const pont_horas = document.querySelector(".ponteiro_horas");
const pont_minutos = document.querySelector(".ponteiro_minutos");
const pont_segundos = document.querySelector(".ponteiro_segundos");

const getTime = () =>{
    const date = new Date();

    return{
        horas: date.getHours(),
        minutos: date.getMinutes(),
        segundos: date.getSeconds(), 
    };
};

setInterval(() =>{

    const {segundos, minutos, horas} = getTime()

    pont_segundos.style.transform = `translate(0, -50%) rotate(${segundos * 6}deg) `;
    pont_minutos.style.transform = `translate(0, -50%) rotate(${minutos * 6}deg) `;
    pont_horas.style.transform = `translate(0, -50%) rotate(${horas * 30}deg) `;
}, 1000)

