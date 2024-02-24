import { Request, Response } from 'express';
// import { prisma } from '../../data/postgres';
// import { CreateTodoDto, UpdateTodoDto } from '../../domain/dtos';
import { GetJugadores, JugadorRepository } from '../../domain';
import { prisma } from '../../data/postgres';
import { CreateJugadorDto, UpdateJugadorDto } from '../../domain/dto';


export class JugadoresController {

  //* DI
  constructor(
    private readonly todoRepository: JugadorRepository,
  ) { }


  public getJugadores = async (req: Request, res: Response) => {
    const jugadores = await prisma.jugador.findMany();
    return res.json(jugadores);
    // new GetJugadores(this.todoRepository)
    //   .execute()
    //   .then(todos => res.json(todos))
    //   .catch(error => res.status(400).json({ error }));

  };

  public getJugadorById = async (req: Request, res: Response) => {

    const id = +req.params.id;
    console.log(id);
    if (isNaN(id)) return res.status(400).json({ error: 'ID argument is not a number' });

    const jugador = await prisma.jugador.findFirst({
      where: { id }
    });

    (jugador)
      ? res.json(jugador)
      : res.status(404).json({ error: `Jugador with id ${id} not found ` });

    //   new GetTodo( this.todoRepository )
    //     .execute( id )
    //     .then( todo => res.json( todo ) )
    //     .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createJugador = async (req: Request, res: Response) => {

    const [error, createJugadorDto] = CreateJugadorDto.create(req.body);

    if (error) return res.status(400).json({ error });

    const jugador = await prisma.jugador.create({
      data: createJugadorDto!
    });

    res.json(jugador);

    //   new CreateTodo( this.todoRepository )
    //     .execute( createTodoDto! )
    //     .then( todo => res.json( todo ) )
    //     .catch( error => res.status( 400 ).json( { error } ) );
  };

  public updateJugador = async (req: Request, res: Response) => {

    const id = +req.params.id;
    const [error, updateJugadorDto] = UpdateJugadorDto.create({ ...req.body,id});

    if(error) return res.status(400).json({error}); 

    if (isNaN(id)) return res.status(400).json({ error: 'ID argument is not a number' });

    const jugador = await prisma.jugador.findFirst({
      where: { id }
    });

    if (!jugador) return res.status(404).json({ error: `Jugador with id ${id} not found` });

    const updatedJugador = await prisma.jugador.update({
      where: { id },
      data: updateJugadorDto!.values
    });

    res.json(updatedJugador);

    //   const [ error, updateTodoDto ] = UpdateTodoDto.create( { ...req.body, id } );
    //   if ( error ) return res.status( 400 ).json( { error } );

    //   new UpdateTodo( this.todoRepository )
    //     .execute( updateTodoDto! )
    //     .then( todo => res.json( todo ) )
    //     .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteJugador = async (req: Request, res: Response) => {
    const id = +req.params.id;

    const jugador = await prisma.jugador.findFirst({
      where: { id }
    });

    if (!jugador) return res.status(404).json({ error: `Jugador with id ${id} not found` });

    const deletedJugador = await prisma.jugador.delete({
      where: { id }
    });

    res.json(deletedJugador);

    //   new DeleteTodo( this.todoRepository )
    //     .execute( id )
    //     .then( todo => res.json( todo ) )
    //     .catch( error => res.status( 400 ).json( { error } ) );

  };



} 