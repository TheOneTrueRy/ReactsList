import { api } from "./AxiosService.js"


class HousesService{
  async getHouses() {
    const res = await api.get('houses')
    
  }

}

export const housesService = new HousesService()