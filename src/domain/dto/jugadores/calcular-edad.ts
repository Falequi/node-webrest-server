


export class Edad{
   
    static calcular(fecha_nacimiento:string):number{
        let hoy = new Date();
        let fechaNacimiento = new Date(fecha_nacimiento);
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
        if (
            diferenciaMeses < 0 ||
            (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
        ) {
            edad--
        }
        return edad;
    }
}