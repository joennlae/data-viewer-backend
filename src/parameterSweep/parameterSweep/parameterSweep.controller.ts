import { Controller, Get } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";

import { ParameterSweepEntity } from "./parameterSweep.entity";
import { ParameterSweepService } from "./parameterSweep.service";

@Crud({
  model: {
    type: ParameterSweepEntity,
  },
})
@Controller("parametersweep")
export class ParameterSweepController implements CrudController<ParameterSweepEntity> {
  constructor(public service: ParameterSweepService) {}

  @Get("allLayers")
  index(): Promise<Partial<ParameterSweepEntity[]>> {
    return this.service.findAllLayers();
  }
}