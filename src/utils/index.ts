import { MAX_NAME_LENGTH } from './constant'

export const isNameValid = (input: string) => {
  return input && input.length <= MAX_NAME_LENGTH
}

export const isNumber = (input: string) => {
  return !!input.match(/^-?\d+\.?\d*$/g)
}

export const isInteger = (input: string) => {
  return !!input.match(/^-?\d+$/g)
}

export const isPositiveInteger = (input: string, allowZero = false) => {
  return isInteger(input) && parseInt(input, 10) > (allowZero ? -1 : 0)
}

export const sortByWeight = (treeMap: ITreeMapObj[]) => {
  return treeMap.sort((a, b) => b.weight - a.weight)
}

export const convertValueToPercentage = (value: number) => {
  const percentage = value * 100
  return `${roundUp(percentage, 2)}%`
}

export const roundUp = (number: number, dec: number) => {
  const factor = Math.pow(10, dec)
  const isNev = number < 0
  const value = number * factor
  const [intVal, digVal] = getNumberDetail(value)
  const result = (parseInt(intVal, 10) + (digVal && digVal !== '0' ? isNev?-1:1 : 0)) / factor
  return parseFloat(strip(result, dec))
}

export const strip = (number: number, dec: number) => {
  const [intVal, digVal] = getNumberDetail(number)
  if (!digVal || dec <= 0) return intVal
  if (digVal.length < dec) return `${intVal}.${digVal}`
  return `${intVal}.${digVal.slice(0, dec)}`
}

export const getNumberDetail = (number: number) => {
  const numberToString = number.toString()
  const intVal = numberToString.split('.')[0]
  const digValue = numberToString.split('.')[1]
  return [intVal, digValue]
}
