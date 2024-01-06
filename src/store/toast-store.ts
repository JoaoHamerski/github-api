import { defineStore } from "pinia"
import { uniqueId } from "lodash-es"

export type ToastTypes = 'success' | 'info' | 'error'
type Toast = {id: string, type: ToastTypes, message: string}

interface ToastOptions {
  timeout?: number
}

const DEFAULT_TIMEOUT = 4000

export const useToastStore = defineStore('toast', {
  state: () => ({
    toasts: [] as Toast[]
  }),
  actions: {
    show(type: ToastTypes, message: string, options: ToastOptions = {}) {
      this.toasts.unshift({
        id: uniqueId(),
        type, 
        message
      })

      setTimeout(() => {
        this.toasts.shift()
      }, options.timeout || DEFAULT_TIMEOUT)
    },
    success (message: string, options: ToastOptions = {}) {
      this.show('success', message, options)
    },
    info (message: string, options: ToastOptions = {}) {
      this.show('info', message, options)
    },
    error (message: string, options: ToastOptions = {}) {
      this.show('error', message, options)
    }
  }
})
