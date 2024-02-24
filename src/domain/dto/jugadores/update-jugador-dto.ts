

export class UpdateJugadorDto {

    private constructor(
        public readonly id: number,
        public readonly nombres: string,
        public readonly apellidos: string,
        public readonly nombre_corto: string,
        public readonly cedula: string,
        public readonly RH: string,
        public readonly telefono: string,
        public readonly email: string,
        public readonly talla_camiseta: string,
        public readonly fecha_nacimiento: string,
        public readonly edad?: number,
    ) { }

    get values() {

        const returnObj: { [key: string]: any } = {};

        if (this.nombres) returnObj.nombres = this.nombres;
        if (this.apellidos) returnObj.apellidos = this.apellidos;
        if (this.nombre_corto) returnObj.nombre_corto = this.nombre_corto;
        if (this.cedula) returnObj.cedula = this.cedula;
        if (this.RH) returnObj.RH = this.RH;
        if (this.telefono) returnObj.telefono = this.telefono;
        if (this.email) returnObj.email = this.email;
        if (this.talla_camiseta) returnObj.talla_camiseta = this.talla_camiseta;
        if (this.fecha_nacimiento) returnObj.fecha_nacimiento = this.fecha_nacimiento;

        return returnObj;
    }

    static calcularEdad(fecha_nacimiento: string) {

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


    static create(props: { [key: string]: any }): [string?, UpdateJugadorDto?] {

        const { id,nombres, apellidos, nombre_corto, cedula,
            RH, telefono, email, talla_camiseta, fecha_nacimiento, } = props;
        
            let newfechanacimiento = new Date();

        if( !id || isNaN (Number(id))) return ['id must be a valid number'];

        if (fecha_nacimiento) {
            newfechanacimiento = new Date(fecha_nacimiento)
            if(newfechanacimiento.toString() === 'Invalid Date'){
                return ['fecha_nacimiento must be a valid date'];
            }
        }

        props.edad = this.calcularEdad(fecha_nacimiento);

        const { edad } = props;

        return [undefined,
            new UpdateJugadorDto(id,nombres, apellidos, nombre_corto, cedula, RH,
                telefono, email, talla_camiseta, fecha_nacimiento,
                edad)];
    }

}

