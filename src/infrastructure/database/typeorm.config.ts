import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: "",
    database: 'eigen_db',
    synchronize: true,
    logging: false,
    entities: [__dirname + '/../../domain/entities/*.ts'],
});

export default AppDataSource;