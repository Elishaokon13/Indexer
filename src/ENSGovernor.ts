import { ponder } from "ponder:registry";

ponder.on("ENSGovernor:ProposalCanceled", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("ENSGovernor:ProposalCreated", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("ENSGovernor:ProposalExecuted", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("ENSGovernor:ProposalQueued", async ({ event, context }) => {
  console.log(event.args);
});
