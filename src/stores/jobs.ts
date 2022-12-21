import { defineStore } from "pinia";
import axios from "axios";

export const FETCH_JOBS = "FETCH_JOBS";
export const useJobStore = defineStore("jobs", {
  state: () => ({
    jobs: [],
  }),
  actions: {
    async [FETCH_JOBS]() {
      const baseUrl = import.meta.env.VITE_APP_URL;
      const response = await axios.get(`${baseUrl}/jobs`);
      this.jobs = response.data;
    },
  },
});
