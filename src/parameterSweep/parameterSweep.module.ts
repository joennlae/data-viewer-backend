import { Module } from '@nestjs/common';
import { ParameterSweepService } from './parameterSweep/parameterSweep.service';
import { ParameterSweepController } from './parameterSweep/parameterSweep.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParameterSweepEntity } from './parameterSweep/parameterSweep.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([ParameterSweepEntity]),
  ],
  providers: [ParameterSweepService],
  controllers: [ParameterSweepController]
})
export class ParameterSweepModule {}
