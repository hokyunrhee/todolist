import type { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import "@/styles/globals.css"

if (process.env.NODE_ENV === "development") {
  if (typeof window !== "undefined") {
    const { worker } = require("@/mocks/browser")
    worker.start()
  }
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp
