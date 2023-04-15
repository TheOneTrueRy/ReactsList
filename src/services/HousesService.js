import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"


class HousesService{
  async getHouses() {
    AppState.cars = []
    AppState.jobs = []
    const res = await api.get('houses')
    AppState.houses = res.data.map(h => new House(h))
  }

}

export const housesService = new HousesService()