import { createContext } from 'react'
import textDataAll from '../data/text.json'

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const textData = textDataAll

  return <TaskContext.Provider value={{ textData }}>{children}</TaskContext.Provider>
}
