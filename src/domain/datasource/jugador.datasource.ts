// import { CreateTodoDto, UpdateTodoDto } from '../dtos';
import { JugadorEntity } from '../entities/jugador.entity';



export abstract class JugadorDatasource {

//   abstract create( createTodoDto: CreateTodoDto ): Promise<TodoEntity>;

  //todo: paginación
  abstract getAll(): Promise<JugadorEntity[]>;

//   abstract findById( id: number ): Promise<TodoEntity>;
//   abstract updateById( updateTodoDto: UpdateTodoDto ): Promise<TodoEntity>;
//   abstract deleteById( id: number ): Promise<TodoEntity>;

}