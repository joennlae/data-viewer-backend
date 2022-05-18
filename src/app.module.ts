import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParameterSweepModule } from './parameterSweep/parameterSweep.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ParameterSweepModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'halutdata.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
