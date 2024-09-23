export type ApiError = {
  code: string
  message: string
}

export const checkIfApiError = (val: any): val is ApiError => {
  return val && typeof val.code === 'string' && typeof val.message === 'string'
}
