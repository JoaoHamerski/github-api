export type RequestParams = Record<string, string>

export type RequestOptions = RequestInit & {
  params?: RequestParams
}

export type UrlParams = Record<string, string | null>
