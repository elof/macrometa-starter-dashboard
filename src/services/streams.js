import jsC8 from "jsc8"
import config from "./config"
import config2 from "./config2"

const client1 = new jsC8({
  url: config.client.url,
  apiKey: config.client.apiKey,
})

const client2 = new jsC8({
  url: config2.client.url,
  apiKey: config2.client.apiKey,
})

const logsRelayStreamStartStop = async (active) => {
  try {
    await client2.activateStreamApp(config2.streamWorkers.forwardLogsToGdn, active)
  }
  catch (error) {
    console.error(error)
  }
}

const activateStreamApp = async (steamsApps, active) => {
  try {
    await logsRelayStreamStartStop(active)
    for (const app of steamsApps) {
        await client1.activateStreamApp(app, active)
    }
    return true
  } catch (error) {
    console.error("Failed start or stop streams", error.message)
    return false
  }
}

const startStreamApps = async () => {
  return await activateStreamApp(Object.values(config.streamWorkers), true)
}

const stopStreamApps = async () => {
  const streamApps = Object.values(config.streamWorkers).reverse()
  return await activateStreamApp(streamApps, false)
}

const createStreamReader = async (streamName) => {
  let response
  try {
    response = await client1.createStreamReader(
        streamName,
        `${streamName}-${Math.round(Math.random() * 1000)}`,
        false,
        false,
        config.client.url.replace("https://", ""),
    )
  } catch (error) {
    console.error(error)
  }
  return response
}

export {
  createStreamReader,
  startStreamApps,
  stopStreamApps
}