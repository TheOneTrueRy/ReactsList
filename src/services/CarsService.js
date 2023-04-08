import { AppState } from "../AppState.js"
import { Car } from "../models/Car.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class CarsService{
  async getCars(){
    const res = await api.get('cars')
    AppState.cars = res.data.map(c => new Car(c))
    logger.log(AppState.cars)
  }
}

export const carsService = new CarsService()