import { JSON_ARRAY_MAX_LENGTH, NAME_MAX_LENGTH } from './constant'

export const checkJSONFormat = (json: string) => {
  try {
    const jsonToArray = JSON.parse(json)
    if (
      Array.isArray(jsonToArray) &&
      isLengthValid(jsonToArray) &&
      isNameValid(jsonToArray) &&
      isWeightValid(jsonToArray) &&
      isValueValid(jsonToArray)
    )
      return jsonToArray
  } catch (ex) {}
  return false
}

export const isLengthValid = (array: ITreeMapObj[]) => {
  return array.length <= JSON_ARRAY_MAX_LENGTH
}

export const isNameValid = (array: ITreeMapObj[]) => {
  return !array.some((val) => {
    return typeof val.name !== 'string' || val.name.length > NAME_MAX_LENGTH
  })
}

export const isWeightValid = (array: ITreeMapObj[]) => {
  return !array.some((val) => {
    return typeof val.weight !== 'number'
  })
}

export const isValueValid = (array: ITreeMapObj[]) => {
  return !array.some((val) => {
    return typeof val.value !== 'number'
  })
}

export const isNumber = (input: string) => {
  if (!input) return true
  try {
    return (
      !Array.from(input).some((val) => {
        const num = parseInt(val, 10)
        return typeof num !== 'number' || isNaN(num)
      }) && parseInt(input, 10) > 0
    )
  } catch (ex) {
    return false
  }
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
  const value = number * factor
  const [intVal, digVal] = getNumberDetail(value)
  const result = (parseInt(intVal, 10) + (digVal && digVal !== '0' ? 1 : 0)) / factor
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
