import { JugadorDatasource, JugadorEntity, JugadorRepository } from '../../domain';


export class JugadorRepositoryImpl implements JugadorRepository {

    constructor(
        private readonly datasource: JugadorDatasource,
      ) { }
    
    getAll(): Promise<JugadorEntity[]> {
        throw new Error('Method not implemented.');
    }

  
}


