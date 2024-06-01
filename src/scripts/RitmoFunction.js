
export default function RitmoFunction(distance, horas, minutos, segundos){
    console.log(JSON.stringify(distance, horas, minutos, segundos));
    const tempo = parseFloat(horas * 60)+ parseFloat(minutos) + parseFloat(segundos / 60);
    console.log(distance, tempo);
	const pace = tempo / distance;
    console.log(pace);
	const paceMinutos = Math.floor(pace);
	const paceSegundos = Math.round((pace - paceMinutos) * 60);

	if(paceSegundos < 10) {
		const paceSegundos = "0" + paceSegundos;
	} 
    else if(paceSegundos === 0.99){
        const paceSegundos = 0;
        const paceMinutos = paceMinutos + 1;
    }
	const ritmo = (`Ritmo de ${paceMinutos}:${paceSegundos} Min/KM`);  
    alert(ritmo);
    const send_ritmo = `${paceMinutos}'${paceSegundos} Min/KM`
    return send_ritmo;
}
