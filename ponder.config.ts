import { createConfig } from "ponder";
import { http } from "viem";

import { ENSGovernorAbi } from "./abis/ENSGovernorAbi";

export default createConfig({
  networks: {
    mainnet: { chainId: 1, transport: http(process.env.PONDER_RPC_URL_1) },
  },
  contracts: {
    ENSGovernor: {
      network: "mainnet",
      address: "0x323A76393544d5ecca80cd6ef2A560C6a395b7E3",
      abi: ENSGovernorAbi,
      startBlock: 13533772,
    },
  },
});
