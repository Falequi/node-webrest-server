import { CreatePartidoJugadoresDto, UpdatePartidoJugadoresDto } from "../dto";
import { PartidoJugadoresEntity } from "../entities/partidojugadores.entity";




export abstract class PartidoJugadoresDatasource {


  //todo: paginación
  abstract getAll(): Promise<PartidoJugadoresEntity[]>;

  abstract findById(id: number): Promise<PartidoJugadoresEntity>;
  abstract create(createPartidoJugadoresDto: CreatePartidoJugadoresDto, nombre_corto: string, fecha: string): Promise<PartidoJugadoresEntity>;
  abstract createAll(partidoJugadores:[{[key:string]:any}]) : Promise<{mesage:string}>
  abstract updateById(updatePartidoJugadoresDto: UpdatePartidoJugadoresDto): Promise<PartidoJugadoresEntity>;
  abstract updateAllJugadoresPartido(partidoJugadores:[{[key:string]:any}]): Promise<PartidoJugadoresEntity[]>;
  abstract deleteById(id: number): Promise<PartidoJugadoresEntity>;

  abstract asistenciaPartidos()                       :Promise<{nombre_corto: string, numero_asistencias: number}[]>;
  abstract calificacionPorPartidoJugador(fecha:string):Promise<{nombre_corto: string, calificacion: number}[]>;
  abstract goleador():Promise<{nombre_corto: string, goles: number}[]>;
  abstract goleadorPorPartido(fecha:string):Promise<{nombre_corto: string, goles: number}[]>;
  abstract partidoGanadosComoDt():Promise<{nombre_corto: string, partidos_ganados_dt: number}[]>;
  abstract partidoGanadosPorJugador():Promise<{nombre_corto: string, partidos_ganados_jugador: number}[]>;
  abstract vayaMenosVencida():Promise<{nombre_corto: string, goles_encajados: number}[]>;
  abstract tarjetasAmarillas():Promise<{nombre_corto: string, tarjetas_amarillas: number}[]>;
  abstract tarjetasRojas():Promise<{nombre_corto: string, tarjetas_rojas: number}[]>;
}