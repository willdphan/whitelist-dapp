require('@nomiclabs/hardhat-waffle')
require('dotenv').config({ path: '.env' })
require('@nomiclabs/hardhat-etherscan')

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL

const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

module.exports = {
	solidity: '0.8.4',
	networks: {
		rinkeby: {
			url: ALCHEMY_API_KEY_URL,
			accounts: [RINKEBY_PRIVATE_KEY],
		},
	},
	etherscan: {
		apiKey: {
			rinkeby: ETHERSCAN_API_KEY,
		},
	},
}
