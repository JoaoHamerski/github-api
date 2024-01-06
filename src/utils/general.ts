import { useToastStore } from '@/store/toast-store'
import type { UrlParams } from '@/types/utils'

export const updateUrlParams = (params: UrlParams) => {
  const newUrl = new URL(window.location.href)

  for (const key in params) {
    if (params[key] === null) {
      newUrl.searchParams.delete(key)
      continue
    }

    newUrl.searchParams.set(key, params[key] as string)
  }

  window.history.pushState({}, '', newUrl.href)
}

export const getUrlParams = (
  searchParams: string | string[],
): string | null | UrlParams => {
  const currentUrl = new URL(window.location.href)
  const params: UrlParams = {}

  if (Array.isArray(searchParams)) {
    for (const param of searchParams) {
      params[param] = currentUrl.searchParams.get(param)
    }

    return params
  }

  return currentUrl.searchParams.get(searchParams)
}

export const copyToClipboard = (text: string, toastMessage?: string) => {
  const textarea = document.createElement('textarea')
  const toastStore = useToastStore()

  textarea.value = text
  textarea.select()
  textarea.setSelectionRange(0, 99999)

  try {
    navigator.clipboard.writeText(textarea.value)

    if (toastMessage) {
      toastStore.info(toastMessage)
    }
  } catch (error) {
    toastStore.error('Não foi possível copiar para a área de transferência')
  }
}
