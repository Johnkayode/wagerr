import { getDeploymentData } from '@/utils/getDeploymentData'
import { initPolkadotJs } from '@/utils/initPolkadotJs'
import { ContractPromise } from '@polkadot/api-contract'
import {
  contractQuery,
  contractTx,
  decodeOutput,
  deployContract,
} from '@scio-labs/use-inkathon/helpers'

/**
 * TODO: Debug the deployContract method
 * Example script that updates & reads a message from a wagerr contract.
 * Can be used as a template for other scripts.
 *
 * Parameters:
 *  - `DIR`: Directory to read contract build artifacts (optional, defaults to `./deployments`)
 *  - `CHAIN`: Chain ID (optional, defaults to `development`)
 *
 * Example usage:
 *  - `pnpm run script <script-name>`
 *  - `CHAIN=alephzero-testnet pnpm run script <script-name>`
 */
const main = async () => {
  const { api, account } = await initPolkadotJs()

  // Deploy wagerr contract
  const { abi, wasm } = await getDeploymentData('wagerr')
  const { address } = await deployContract(api, account, abi, wasm, 'default', [])
  const contract = new ContractPromise(api, abi, address)

  // // Update message
  // try {
  //   await contractTx(api, account, contract, 'set_message', {}, ['Hello, script!'])
  //   console.log('\nSuccessfully updated greeting')
  // } catch (error) {
  //   console.error('Error while updating greeting', error)
  // }

  // // Read message
  // const result = await contractQuery(api, '', contract, 'greet')
  // const { decodedOutput } = decodeOutput(result, contract, 'greet')
  // console.log('\nQueried greeting:', decodedOutput)
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(() => process.exit(0))
