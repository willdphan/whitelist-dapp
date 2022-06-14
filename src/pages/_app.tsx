import 'tailwindcss/tailwind.css'
import { APP_NAME } from '@/lib/consts'
import '@rainbow-me/rainbowkit/styles.css'
import { chain, createClient, WagmiConfig } from 'wagmi'
import '../styles/globals.css'

const wagmiClient = createClient({ autoConnect: true })

const App = ({ Component, pageProps }) => {
	return (
		<WagmiConfig client={wagmiClient}>
			<Component {...pageProps} />
		</WagmiConfig>
	)
}

export default App
