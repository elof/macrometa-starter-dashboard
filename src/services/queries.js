import jsC8 from "jsc8"
import config from "./config"

const client = new jsC8({
  url: config.client.url,
  apiKey: config.client.apiKey,
})

const truncateAllCollections = async () => {
  try {
    const promises = config.collections.map((collection) => (
      client.collection(collection).truncate()
    ))
    await Promise.all(promises)
  } catch (error) {
    console.error("Failed to truncate", error.message)
  }
}

const fetchNextBatch = async (cursorId, previousResult = []) => {
  const url = `${client._connection._urls[0]}/_fabric/_system/_api/restql/fetch/${cursorId}`
  try {
    const fetchPromise = await fetch(url, {
      method: "PUT",
      headers: client._connection._headers,
    })
    const { result, hasMore, id } = await fetchPromise.json()
    previousResult = [ ...previousResult, ...result ]
    if (!hasMore) {
      return previousResult
    }
    return await fetchNextBatch(id, previousResult)
  }
  catch (error) {
    return previousResult
  }
}

const executeRestql = async (name, params = {}) => {
  let restqlResponse = []
  try {
    const { result, hasMore, id } = await client.executeRestql(name, params)
    if (!hasMore) {
      return result
    }
    restqlResponse = await fetchNextBatch(id, result)
    return restqlResponse
  }
  catch (error) {
    console.error(`Failed to ${name}`, error.message)
    return restqlResponse
  }
}

export {
  executeRestql,
  truncateAllCollections
}