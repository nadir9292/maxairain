import "../styles/globals.css"
import AppContextProvider from "../src/components/AppContext"

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  )
}

export default MyApp
