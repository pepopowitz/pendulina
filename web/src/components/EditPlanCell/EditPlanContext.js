import { useContext } from 'react'

export const EditPlanContext = React.createContext({})

export function EditPlanContextProvider({ refetch, children }) {
  const value = { refetch }
  return (
    <EditPlanContext.Provider value={value}>
      {children}
    </EditPlanContext.Provider>
  )
}

export function useEditPlanContext() {
  const value = useContext(EditPlanContext)

  return value
}