import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from "@nestjs/common";
import { Vehicle } from "./vehicle";
import { VehicleService } from "./vehicle.service";

@Controller("vehicles")
export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  @Get()
  public async getVehicles(): Promise<Vehicle[]> {
    return this.vehicleService.getAll();
  }

  @Get("delete/:id")
  public async deleteVehicleById(@Param("id") id: string): Promise<any> {
    const result = this.vehicleService.delete(id);
    if (!result) {
      throw new HttpException("cannot delete this vehicle", HttpStatus.EXPECTATION_FAILED);
    }
    return true;
  }

  @Post(":create")
  public async addVehicle(@Body() vehicle: Vehicle): Promise<Vehicle> {
    return this.vehicleService.createVehicle(vehicle);
  }
}
