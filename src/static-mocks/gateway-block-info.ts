import { GatewayBlockInfoResponse } from "src/gateway-types.js";

export function mockGatewayBlockInfoResponse(): GatewayBlockInfoResponse {
  return {
    blockNumber: 12345,
    finalizedBlockNumber: 12340,
  };
}
