export const ENSGovernorAbi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_token",
        type: "address",
        internalType: "contract ERC20Votes",
      },
      {
        name: "_timelock",
        type: "address",
        internalType: "contract TimelockController",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    name: "ProposalCanceled",
    type: "event",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    name: "ProposalCreated",
    type: "event",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "proposer",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "targets",
        type: "address[]",
        indexed: false,
        internalType: "address[]",
      },
      {
        name: "values",
        type: "uint256[]",
        indexed: false,
        internalType: "uint256[]",
      },
      {
        name: "signatures",
        type: "string[]",
        indexed: false,
        internalType: "string[]",
      },
      {
        name: "calldatas",
        type: "bytes[]",
        indexed: false,
        internalType: "bytes[]",
      },
      {
        name: "startBlock",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "endBlock",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "description",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    name: "ProposalExecuted",
    type: "event",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    name: "ProposalQueued",
    type: "event",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "eta",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    name: "QuorumNumeratorUpdated",
    type: "event",
    inputs: [
      {
        name: "oldQuorumNumerator",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "newQuorumNumerator",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    name: "TimelockChange",
    type: "event",
    inputs: [
      {
        name: "oldTimelock",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "newTimelock",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    name: "VoteCast",
    type: "event",
    inputs: [
      {
        name: "voter",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "proposalId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "support",
        type: "uint8",
        indexed: false,
        internalType: "uint8",
      },
      {
        name: "weight",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "reason",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    name: "BALLOT_TYPEHASH",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "COUNTING_MODE",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "pure",
  },
  {
    name: "castVote",
    type: "function",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "support",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    name: "castVoteBySig",
    type: "function",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "support",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "v",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "r",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    name: "castVoteWithReason",
    type: "function",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "support",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "reason",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    name: "execute",
    type: "function",
    inputs: [
      {
        name: "targets",
        type: "address[]",
        internalType: "address[]",
      },
      {
        name: "values",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "calldatas",
        type: "bytes[]",
        internalType: "bytes[]",
      },
      {
        name: "descriptionHash",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "payable",
  },
  {
    name: "getVotes",
    type: "function",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
      {
        name: "blockNumber",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "hasVoted",
    type: "function",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "hashProposal",
    type: "function",
    inputs: [
      {
        name: "targets",
        type: "address[]",
        internalType: "address[]",
      },
      {
        name: "values",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "calldatas",
        type: "bytes[]",
        internalType: "bytes[]",
      },
      {
        name: "descriptionHash",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "pure",
  },
  {
    name: "name",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "proposalDeadline",
    type: "function",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "proposalEta",
    type: "function",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "proposalSnapshot",
    type: "function",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "proposalThreshold",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "pure",
  },
  {
    name: "proposalVotes",
    type: "function",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "againstVotes",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "forVotes",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "abstainVotes",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "propose",
    type: "function",
    inputs: [
      {
        name: "targets",
        type: "address[]",
        internalType: "address[]",
      },
      {
        name: "values",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "calldatas",
        type: "bytes[]",
        internalType: "bytes[]",
      },
      {
        name: "description",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    name: "queue",
    type: "function",
    inputs: [
      {
        name: "targets",
        type: "address[]",
        internalType: "address[]",
      },
      {
        name: "values",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "calldatas",
        type: "bytes[]",
        internalType: "bytes[]",
      },
      {
        name: "descriptionHash",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    name: "quorum",
    type: "function",
    inputs: [
      {
        name: "blockNumber",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "quorumDenominator",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "pure",
  },
  {
    name: "quorumNumerator",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "state",
    type: "function",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "enum IGovernor.ProposalState",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "supportsInterface",
    type: "function",
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "timelock",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "token",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract ERC20Votes",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "updateQuorumNumerator",
    type: "function",
    inputs: [
      {
        name: "newQuorumNumerator",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    name: "updateTimelock",
    type: "function",
    inputs: [
      {
        name: "newTimelock",
        type: "address",
        internalType: "contract TimelockController",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    name: "version",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "votingDelay",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "pure",
  },
  {
    name: "votingPeriod",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "pure",
  },
] as const;
