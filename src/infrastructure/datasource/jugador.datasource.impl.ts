// import { prisma } from '../../data/postgres';
import { JugadorDatasource,JugadorEntity, } from '../../domain';





export class JugadorDatasourceImpl implements JugadorDatasource {

  getAll(): Promise<JugadorEntity[]> {
    throw new Error('Method not implemented.');
  }



}

