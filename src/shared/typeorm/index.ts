import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234567',
    database: 'apivendas',
    migrations: ['./src/shared/typeorm/migrations/*.ts'],
});

AppDataSource.initialize()
    .then(() => {
        console.log('PostGres inicializado com sucesso');
    })
    .catch(err => {
        console.error('Error during Data Source initialization', err);
    });
