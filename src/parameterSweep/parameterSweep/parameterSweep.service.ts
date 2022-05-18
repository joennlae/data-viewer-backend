import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { ParameterSweepEntity } from "./parameterSweep.entity";


@Injectable()
export class ParameterSweepService extends TypeOrmCrudService<ParameterSweepEntity> {
  constructor(@InjectRepository(ParameterSweepEntity) repo) {
    super(repo);
  }

  async findAllLayers(): Promise<Partial<ParameterSweepEntity[]>> {
    return await this.repo.query("SELECT DISTINCT layer_name, layer_name_canonical FROM parametersweep");
  }
}
