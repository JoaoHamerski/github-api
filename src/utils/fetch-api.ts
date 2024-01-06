import type { RequestParams, RequestOptions } from '@/types/utils/fetch-api-types'

const API_URL = 'https://api.github.com'

const DEFAULT_OPTIONS: RequestInit = {
  headers: {
    'X-Github-Api-Version': '2022-11-28'
  }
}

function getFormattedEndpoint (endpoint: string) {
  return endpoint.startsWith('/')
    ? endpoint.replace('/', '')
    : endpoint
}

function getEndpoint (endpoint: string, params?: RequestParams) {
  const formattedEndpoint = getFormattedEndpoint(endpoint)

  const url = endpoint.startsWith('http')
    ? endpoint
    : `${API_URL}/${formattedEndpoint}`

  if (params) {
    const queryString = new URLSearchParams(params).toString()

    return url + `?${queryString}`
  }

  return url
}

async function fetchAPI (endpoint: string, options: RequestOptions = {}) {
  const url = getEndpoint(endpoint, options.params)

  const response = await fetch(url, { ...options, ...DEFAULT_OPTIONS })

  if (!response.ok) {
    throw response
  }

  return response.json()
}


export default fetchAPI
