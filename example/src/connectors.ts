import { InjectedConnector } from '@web3-react/injected-connector'
import { NetworkConnector } from '@web3-react/network-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { AuthereumConnector } from '@web3-react/authereum-connector'
import { TorusConnector } from '@web3-react/torus-connector'
import { FortmaticConnector } from '@web3-react/fortmatic-connector'
import { MagicConnector } from '@web3-react/magic-connector'
import { PortisConnector } from '@web3-react/portis-connector'
import { LedgerConnector } from '@web3-react/ledger-connector'
import { FrameConnector } from '@web3-react/frame-connector'

const POLLING_INTERVAL = 12000
const RPC_URLS: { [chainId: number]: string } = {
  1: 'https://mainnet.infura.io/v3/84842078b09946638c03157f83405213' as string,
  4: 'https://mainnet.infura.io/v3/84842078b09946638c03157f83405213' as string
}

const injected = {
  connector: new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42, 56, 97]
  }),
  image: '/images/metamask.svg',
  title: 'Metamask',
  desc: 'Connect to your Metamask Wallet'
}

const network = {
  connector: new NetworkConnector({
    urls: { 1: RPC_URLS[1] },
    defaultChainId: 56
  }),
  image: '/images/walletconnect.svg',
  title: 'WalletConnect',
  desc: 'Scan with WalletConnect to connect'
}

const walletconnect = {
  connector: new WalletConnectConnector({
    rpc: { 1: RPC_URLS[1] },
    qrcode: true,
    pollingInterval: POLLING_INTERVAL
  }),
  image: '/images/walletconnect.svg',
  title: 'WalletConnect',
  desc: 'Scan with WalletConnect to connect'
}

const walletlink = {
  connector: new WalletLinkConnector({
    url: RPC_URLS[1],
    appName: 'web3-react example',
    supportedChainIds: [1, 3, 4, 5, 42, 56, 97]
  }),
  image: '/images/coinbase.svg',
  title: 'Coinbase',
  desc: 'Connect to your Coinbase Wallet'
}

const authereum = {
  connector: new AuthereumConnector({ chainId: 56 }),
  image: '/images/authereum.svg',
  title: 'Authereum',
  desc: 'Connect with your Authereum account'
}

const torus = {
  connector: new TorusConnector({ chainId: 56 }),
  image: '/images/torus.svg',
  title: 'Torus',
  desc: 'Connect with your Torus account'
}

const fortmatic = {
  connector: new FortmaticConnector({
    chainId: 4,
    apiKey: process.env.REACT_APP_FORTMATIC_API_KEY as string
  }),
  image: '/images/fortmatic.svg',
  title: 'Fortmatic',
  desc: 'Connect to your Fortmatic Wallet'
}

const magic = {
  connector: new MagicConnector({
    chainId: 4,
    apiKey: process.env.REACT_APP_MAGIC_API_KEY as string,
    email: 'hello@example.com'
  }),
  image: '/images/magic.svg',
  title: 'Magic',
  desc: 'Connect to your Magic Wallet'
}

const portis = {
  connector: new PortisConnector({
    dAppId: process.env.REACT_PORTIS_DAPP_ID as string,
    networks: [1, 100]
  }),
  image: '/images/portis.svg',
  title: 'Portis',
  desc: 'Connect to your Portis Wallet'
}

const ledger = {
  connector: new LedgerConnector({
    chainId: 1,
    url: RPC_URLS[1],
    pollingInterval: POLLING_INTERVAL
  }),
  image: '/images/ledger.svg',
  title: 'Ledger',
  desc: 'Connect to your Ledger Wallet'
}

const frame = {
  connector: new FrameConnector({
    supportedChainIds: [1]
  }),
  image: '/images/image.svg',
  title: 'Frame',
  desc: 'Connect to your Frame Wallet'
}

export default {
  injected,
  torus,
  network,
  authereum,
  walletlink,
  walletconnect,
  fortmatic,
  magic,
  portis,
  ledger,
  frame
}
