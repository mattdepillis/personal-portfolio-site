// imports
import ExpiryMap from 'expiry-map'
import fetch from 'isomorphic-unfetch'
import pMemoize from 'p-memoize'
import { SearchParams, SearchResults } from 'notion-types'

import { api } from '../config/config'

export const searchNotion = pMemoize(searchNotionImpl, {
  cacheKey: (args) => args[0]?.query,
  cache: new ExpiryMap(10000)
})

async function searchNotionImpl(
  params: SearchParams
): Promise<SearchResults> {
  return fetch(api.searchNotion, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then((res) => {
      if (res.ok) {
        return res
      }

      // convert non-2xx HTTP responses into errors
      const error: any = new Error(res.statusText)
      error.response = res
      return Promise.reject(error)
    })
    .then((res) => res.json())
}
