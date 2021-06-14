import { useContext } from 'react'

export const ManagePlanContext = React.createContext({})

export function ManagePlanContextProvider({ refetch, children }) {
  const value = { refetch }
  return (
    <ManagePlanContext.Provider value={value}>
      {children}
    </ManagePlanContext.Provider>
  )
}

export function useManagePlanContext() {
  const value = useContext(ManagePlanContext)

  return value
}
