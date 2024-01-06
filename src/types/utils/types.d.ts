export type RequestParams = {
  [any: string]: string | number
}

export type RequestOptions = RequestInit & {
  params?: RequestParams
}

export type UrlParams = {
  [prop: string]: string | null
}
