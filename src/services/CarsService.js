import { AppState } from "../AppState.js"
import { Car } from "../models/Car.js"
import { api } from "./AxiosService.js"


class CarsService{
  async getCars(){
    AppState.houses = []
    AppState.jobs = []
    const res = await api.get('cars')
    AppState.cars = res.data.map(c => new Car(c))
  }
}

export const carsService = new CarsService()