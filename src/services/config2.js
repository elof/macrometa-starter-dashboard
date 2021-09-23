export default {
  client: {
    url: process.env.NEXT_PUBLIC_CLIENT2_URL,
    apiKey: process.env.NEXT_PUBLIC_CLIENT2_API_KEY,
    fabricName: process.env.NEXT_PUBLIC_CLIENT2_FABRIC_NAME || "_system"
  },
  streamWorkers: {
    forwardLogsToGdn: "forward-logs-to-gdn"
  }
}