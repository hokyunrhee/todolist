import axios from "axios"

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || ""

export const httpClient = axios.create({
  baseURL: BACKEND_URL,
  headers: { "content-type": "application/json" },
})
