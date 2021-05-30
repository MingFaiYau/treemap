import React from 'react'
import { isNumber } from '../utils'

interface AppContextState {
  rows: string
  onRowsChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  treeMaps: ITreeMapObj[]
  insertTreeMap: (treeMap: ITreeMapObj) => void
  removeTreeMap: (treeMap: ITreeMapObj) => void
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
  const [rows, setRows] = React.useState<string>('1')

  const onRowsChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isNumber(e.target.value) && parseInt(e.target.value, 10) <= treeMaps.length) {
        setRows(e.target.value)
      }
    },
    [treeMaps, setRows],
  )

  const insertTreeMap = React.useCallback((treeMap: ITreeMapObj) => {
    setTreeMaps((prevTreeMaps) => [...prevTreeMaps, treeMap])
  }, [])

  const removeTreeMap = React.useCallback((treeMap: ITreeMapObj) => {
    setTreeMaps((prevTreeMaps) => prevTreeMaps.filter((val) => val.name === treeMap.name))
  }, [])

  const value = React.useMemo(() => {
    return { rows, onRowsChange, treeMaps, insertTreeMap, removeTreeMap }
  }, [rows, onRowsChange, treeMaps, insertTreeMap, removeTreeMap])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
