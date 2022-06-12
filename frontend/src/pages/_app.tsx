import type { AppProps } from "next/app"
import "@/styles/globals.css"

if (process.env.NODE_ENV === "development") {
  if (typeof window !== "undefined") {
    const { worker } = require("@/mocks/browser")
    worker.start()
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
