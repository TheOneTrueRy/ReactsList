import { AppState } from "../AppState.js"
import { Car } from "../models/Car.js"
import { api } from "./AxiosService.js"


class CarsService{
  async getCars(){
    AppState.houses = []
    AppState.jobs = []
    AppState.displaying = 'cars'
    const res = await api.get('cars')
    AppState.cars = res.data.map(c => new Car(c))
  }

  async createCar(carData){
    const res = await api.post('cars', carData)
    AppState.cars.push(new Car(res.data))
  }
}

export const carsService = new CarsService()