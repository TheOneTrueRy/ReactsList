import { api } from "./AxiosService.js"


class JobsService{
  async getJobs() {
    const res = api.get('jobs')
    
  }

}

export const jobsService = new JobsService()