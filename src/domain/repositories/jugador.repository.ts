// import { CreateTodoDto, UpdateTodoDto } from '../dtos';
import { JugadorEntity } from '../entities/jugador.entity';
// import { TodoEntity } from '../entities/todo.entity';



export abstract class JugadorRepository {

//   abstract create( createTodoDto: CreateTodoDto ): Promise<TodoEntity>;

  //todo: paginación
  abstract getAll(): Promise<JugadorEntity[]>;

//   abstract findById( id: number ): Promise<TodoEntity>;
//   abstract updateById( updateTodoDto: UpdateTodoDto ): Promise<TodoEntity>;
//   abstract deleteById( id: number ): Promise<TodoEntity>;

}