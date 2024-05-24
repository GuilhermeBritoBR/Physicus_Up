
export default function RitmoFunction(distance, horas, minutos, segundos){
    const tempo = ((horas*60)+minutos+(segundos/60));
    console.log(distance, tempo);
	const pace = (tempo / distance);
    console.log(pace);
	const paceMinutos = (Math.floor(pace));
	const paceSegundos = (Math.round((pace - paceMinutos) * 60));

	if(paceSegundos < 10) {
		const paceSegundos = "0" + paceSegundos;
	} 

	const ritmo = (`Ritmo de ${paceMinutos}:${paceSegundos} Min/KM`);  
    alert(ritmo);
}
