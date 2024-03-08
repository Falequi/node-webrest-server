import { prisma } from '../../data/postgres';
import { JugadorDatasource, JugadorEntity } from '../../domain';
import { CreateJugadorDto, UpdateJugadorDto } from '../../domain/dto';


export class JugadorDatasourceImpl implements JugadorDatasource {

  async findIdByName(nombre_corto: string): Promise<number> {

    const jugador = await prisma.jugador.findFirst({
      where:{nombre_corto}
    });

    return jugador!.id;
  }

  async getAll(): Promise<JugadorEntity[]> {

    const jugadores = await prisma.jugador.findMany();

    return jugadores.map(jugador => JugadorEntity.fromObject(jugador));
  }

  async create(createJugadorDto: CreateJugadorDto): Promise<JugadorEntity> {

    const jugador = await prisma.jugador.create({
      data: createJugadorDto!
    });

    return JugadorEntity.fromObject(jugador);
  }

  async findById(id: number): Promise<JugadorEntity> {

    const jugador = await prisma.jugador.findFirst({
      where: { id }
    });

    if (!jugador) throw `Jugador with id ${id} not found`;

    return JugadorEntity.fromObject(jugador);
  }

  async updateById(updateJugadorDto: UpdateJugadorDto): Promise<JugadorEntity> {

    await this.findById(updateJugadorDto.id);

    const updatedJugador = await prisma.jugador.update({
      where: { id: updateJugadorDto.id },
      data: updateJugadorDto!.values
    });

    return JugadorEntity!.fromObject(updatedJugador);
  }

  async deleteById(id: number): Promise<JugadorEntity> {

    await this.findById(id);

    const deletedJugador = await prisma.jugador.delete({
      where: { id }
    });

    return JugadorEntity.fromObject(deletedJugador);
  }




}

