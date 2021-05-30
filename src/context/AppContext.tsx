import React from 'react'
interface AppContextState {
  rows: number
  addRows: () => void
  reduceRows: () => void
  treeMaps: ITreeMapObj[]
  insertTreeMap: (treeMap: ITreeMapObj) => void
  removeTreeMap: (id: number) => void
}

const AppContext = React.createContext<AppContextState | undefined>(undefined)

export const useAppContext = () => {
  return React.useContext(AppContext) as AppContextState
}
interface AppContextProps {
  children: React.ReactNode
}

export const AppProvider: React.FC<AppContextProps> = ({ children }) => {
  const [treeMaps, setTreeMaps] = React.useState<ITreeMapObj[]>([])
  const [rows, setRows] = React.useState<number>(1)

  React.useEffect(() => {
    if (treeMaps.length < rows && rows !== 1) {
      setRows(treeMaps.length)
    }
  }, [treeMaps, rows])

  const addRows = React.useCallback(() => {
    setRows((prevRows) => (prevRows + 1 > treeMaps.length ? prevRows : prevRows + 1))
  }, [treeMaps])

  const reduceRows = React.useCallback(() => {
    setRows((prevRows) => (prevRows - 1 < 1 ? prevRows : prevRows - 1))
  }, [])

  const insertTreeMap = React.useCallback((treeMap: ITreeMapObj) => {
    setTreeMaps((prevTreeMaps) => [...prevTreeMaps, treeMap])
  }, [])

  const removeTreeMap = React.useCallback((id: number) => {
    setTreeMaps((prevTreeMaps) => prevTreeMaps.filter((val) => val.id !== id))
  }, [])

  const value = React.useMemo(() => {
    return { rows, addRows, reduceRows, treeMaps, insertTreeMap, removeTreeMap }
  }, [rows, addRows, reduceRows, treeMaps, insertTreeMap, removeTreeMap])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
