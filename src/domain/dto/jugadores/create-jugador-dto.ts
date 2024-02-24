

export class CreateJugadorDto {

    private constructor(
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


    static create(props: { [key: string]: any }): [string?, CreateJugadorDto?] {

        const { nombres, apellidos, nombre_corto, cedula,
            RH, telefono, email, talla_camiseta, fecha_nacimiento, } = props;

        if (!fecha_nacimiento) return ['Fecha de Nacimiento is required', undefined];

        props.edad = this.calcularEdad(fecha_nacimiento);

        const { edad } = props;

        return [undefined,
            new CreateJugadorDto(nombres, apellidos, nombre_corto, cedula, RH,
                telefono, email, talla_camiseta, fecha_nacimiento,
                edad)];

        

    }
    
}

