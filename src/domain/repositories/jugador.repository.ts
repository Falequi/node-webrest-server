import { CreateJugadorDto, UpdateJugadorDto } from '../dto';
import { JugadorEntity } from '../entities/jugador.entity';


export abstract class JugadorRepository {

  
  //todo: paginación
  abstract getAll(): Promise<JugadorEntity[]>;
  
  abstract findById(id: number): Promise<JugadorEntity>;
  abstract findIdByName(nombre_corto: string): Promise<number>;
  abstract create(createJugadorDto: CreateJugadorDto): Promise<JugadorEntity>;
  abstract updateById(updateTodoDto: UpdateJugadorDto): Promise<JugadorEntity>;
  abstract deleteById(id: number): Promise<JugadorEntity>;

}