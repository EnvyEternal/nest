import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { User } from './users/users.models';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '7007',
      database: 'nest-db',
      models: [User],
      autoLoadModels: true,
    }),
    UsersModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
