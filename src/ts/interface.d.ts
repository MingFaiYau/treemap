interface ICSSResponsive {
  mobileToCol?: boolean
  mobileToFull?: boolean
  flexCenter?: boolean
}

interface ITreeMapObj {
  name: string
  weight: number
  value: number
}

interface IResultData {
  treeMap: ITreeMapObj[]
  rows: number
}

 