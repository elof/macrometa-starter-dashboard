export default {
  client: {
    url: process.env.NEXT_PUBLIC_CLIENT_URL,
    apiKey: process.env.NEXT_PUBLIC_CLIENT_API_KEY,
    fabricName: process.env.NEXT_PUBLIC_CLIENT_FABRIC_NAME || "_system"
  },
  collections: {
    httpErrorResponseCodeStats: "http_error_response_code_stats_1m",
    httpResponseCodeStats: "http_response_code_stats_1m",
    httpResponseLatencyStats: "http_response_latency_stats_1m",
    httpUrlStats: "http_url_stats_1m",
    logs: "logs",
    uniqueVisitorByCountryStats: "unique_visitor_by_country_stats_1m"
  },
  queryWorkers: {
    getStatsByCollection: "getStatsByCollection",
    getStatusCodeRatio: "getStatusCodeRatio",
    getTopErrorByUrlPath: "getTopErrorByUrlPath",
    getTopUrl: "getTopUrl",
    getUniqueVisitorsByCountry: "getUniqueVisitorsByCountry"
  },
  streams: {
    httpResponseCodeStats: "http_response_code_stats_1m",
    httpResponseLatencyStats: "http_response_latency_stats_1m",
    httpUrlStats: "http_url_stats_1m"
  },
  streamWorkers: {
    httpRequestStats: "http-request-stats-1m-worker",
    httpRequestWorker: "http-request-worker",
    logGenerator: "log-generator",
  }
}