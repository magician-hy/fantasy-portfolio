"use client"

import {
  useState,
  createContext,
  SetStateAction,
  Dispatch,
  useContext,
} from "react"
import { links } from "@/lib/data"

export type SectionName = (typeof links)[number]["name"]
type ActionSectionContextProviderProps = {
  children: React.ReactNode
}

type ActionSectionContextType = {
  activeSection: SectionName
  setActiveSection: Dispatch<
    SetStateAction<"首页" | "关于" | "项目" | "作品">
  >
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

const ActionSectionContext = createContext<ActionSectionContextType | null>(
  null
)

export function ActionSectionContextProvider({
  children,
}: ActionSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("首页")
  const [timeOfLastClick, setTimeOfLastClick] = useState(0) // we need to keep track of this to disable the observer temporarily when user clicks on a link

  return (
    <ActionSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActionSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = useContext(ActionSectionContext)
  if (!context) {
    throw new Error(
      "useActiveSectionContext must be used within a ActionSectionContextProvider"
    )
  }
  return context
}
