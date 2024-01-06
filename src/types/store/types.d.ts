export type ToastType = 'success' | 'info' | 'error'

export type Toast = {
  id: string
  type: ToastType
  message: string
}

export interface ToastOptions {
  timeout?: number
}
