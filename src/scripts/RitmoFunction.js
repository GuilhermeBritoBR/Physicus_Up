
export default function RitmoFunction(distance, horas, minutos, segundos){
    console.log(JSON.stringify(distance, horas, minutos, segundos));
    const tempo = parseFloat(horas * 60)+ parseFloat(minutos) + parseFloat(segundos / 60);
    console.log(distance, tempo);
	const pace = tempo / distance;
    console.log(pace);
	const paceMinutos = Math.floor(pace);
	let paceSegundos = Math.round((pace - paceMinutos) * 60);

	if(paceSegundos < 10 && paceSegundos >= 0) {
    paceSegundos = "0" + paceSegundos;
	}
    
	const ritmo = (`Ritmo de ${paceMinutos}:${paceSegundos} Min/KM`);  
    alert(ritmo);
    const send_ritmo = `${paceMinutos}'${paceSegundos} Min/KM`
    return send_ritmo;
}
