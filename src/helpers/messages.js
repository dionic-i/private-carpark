import { Toast } from 'buefy/dist/components/toast'


export const showInfo = (message, ...otherProps) => Toast.open({
  message,
  type: 'is-success',
  ...otherProps
})

export const showWarning = (message, ...otherProps) => Toast.open({
  message,
  type: 'is-warning',
  ...otherProps
})

export const showError = (message, ...otherProps) => Toast.open({
  message,
  type: 'is-danger',
  ...otherProps
})
