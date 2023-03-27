const minutos = 1000 * 60;
const horas = minutos * 60;
const dias = horas * 24;
const meses = dias * 12;

const getTimeUntilDate = () => {
  const fechaFinal = new Date("2050-06-27");
  const hoy = new Date();
  const mannana = new Date(
    hoy.getFullYear(),
    hoy.getMonth(),
    hoy.getDate() + 1
  );
  const siguienteHora = new Date(
    hoy.getFullYear(),
    hoy.getMonth(),
    hoy.getDate(),
    hoy.getHours() + 1,
    0,
    0,
    0
  );
  const milisegundosSigHora = siguienteHora - hoy;

  const diferenciaTiempo = mannana.getTime() - hoy.getTime();
  const ultimoDiaMes = new Date(
    hoy.getFullYear(),
    hoy.getMonth() + 1,
    0
  ).getDate();
  const diferenciaDias = ultimoDiaMes - hoy.getDate();
  const diferenciaAnnos = fechaFinal.getFullYear() - hoy.getFullYear();
  const diferenciaMeses = fechaFinal.getMonth() - hoy.getMonth();
  const mesesTotales = diferenciaAnnos * 12 + diferenciaMeses;
  const diferenciaHoras = Math.round(diferenciaTiempo / (1000 * 60 * 60));
  const diferenciaMiliSegundos = Math.round(milisegundosSigHora / 1000);
  const diferenciaMinutos = Math.round(diferenciaMiliSegundos / 60);

  const resultado = document.getElementById("resultado");

  const diferenciaSegundos = 60 - hoy.getSeconds();
  resultado.innerHTML = `${diferenciaAnnos}: ${mesesTotales}: ${diferenciaDias}: ${diferenciaHoras}: ${diferenciaMinutos}: ${diferenciaSegundos}`;
};

setInterval(() => {
  getTimeUntilDate();
}, 1000);
