import RootLayout from "../src/layout"

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )

}

export default MyApp
