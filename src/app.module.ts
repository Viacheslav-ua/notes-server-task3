import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { SequelizeModule } from "@nestjs/sequelize"
import { Note } from "./notes/notes.model"
import { NotesModule } from './notes/notes.module'
import { CategoryModule } from './category/category.module'
import { Category } from "./category/category.model"
import { StatisticModule } from './statistic/statistic.module'

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
      },
      // ssl: true,
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Note, Category],
      autoLoadModels: true,
    }), StatisticModule, NotesModule, CategoryModule],
})
export class AppModule {}