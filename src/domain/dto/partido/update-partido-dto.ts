

export class UpdatePartidoDto {

    private constructor(
        public readonly id: number,
        public readonly fecha: string,
        public readonly lugar: string,
        public readonly hora: string,
    ) { }

    get values() {

        const returnObj: { [key: string]: any } = {};

        if (this.fecha) returnObj.fecha = this.fecha;
        if (this.lugar) returnObj.lugar = this.lugar;
        if (this.hora) returnObj.hora = this.hora;
        
        return returnObj;
    }

    static create(props: { [key: string]: any }): [string?, UpdatePartidoDto?] {

        const { id,fecha,lugar,hora } = props;
        
            let newfechanacimiento = new Date();

        if( !id || isNaN (Number(id))) return ['id must be a valid number'];

        if (fecha) {
            newfechanacimiento = new Date(fecha)
            if(newfechanacimiento.toString() === 'Invalid Date'){
                return ['fecha must be a valid date'];
            }
        }

        return [undefined,
            new UpdatePartidoDto(id,fecha,lugar,hora)];
    }

}

