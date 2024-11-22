"use client"
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react"

type Props = {
   children: ReactNode
}

// NOTE: Global context props
interface contextProps {
   isFetching: boolean
   setIsFetching: Dispatch<SetStateAction<boolean>>
}

// NOTE: Global context store
const ChatContext = createContext<contextProps>({
   isFetching: false,
   setIsFetching: () => {}
})

// NOTE: Global provider for context store
export const ChatProvider = ({ children }: Props) => {
   const [isFetching, setIsFetching] = useState<boolean>(false)

   // NOTE: Return the global context provider
   return (
      <ChatContext.Provider
         value={{
            isFetching,
            setIsFetching
         }}>
         {children}
      </ChatContext.Provider>
   )
}

// NOTE: Global context hook
export const useChatContext = () => useContext(ChatContext)
