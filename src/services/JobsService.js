import { AppState } from "../AppState.js"
import { Job } from "../models/Job.js"
import { api } from "./AxiosService.js"


class JobsService{
  async getJobs() {
    AppState.cars = []
    AppState.houses = []
    AppState.displaying = 'jobs'
    const res = await api.get('jobs')
    AppState.jobs = res.data.map(j => new Job(j))
  }

}

export const jobsService = new JobsService()