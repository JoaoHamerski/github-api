export type ToastTypes = 'success' | 'info' | 'error'

export type Toast = {
  id: string
  type: ToastTypes
  message: string
}

export interface ToastOptions {
  timeout?: number
}
