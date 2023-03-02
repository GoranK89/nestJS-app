import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5500,
  username: ' postgres',
  password: '9WuDu3L4',
  database: 'boardproject',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
