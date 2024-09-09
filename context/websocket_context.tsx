'use client'

import { connectWebsocket } from "@/utils/websocket";
import { createContext, useContext, useEffect, useState } from "react";

interface WebSocketContextType {
  notifications: any[];
}

export const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);

export const WebSocketProvider = ({children}: {children: React.ReactNode}) => {
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    const ws = connectWebsocket((data) => {
      if (data.type === 'ping' || !data.message) return;
      setNotifications((prev) => [...prev, data.message])
    });
  },[]);

  // const ws = connectWebsocket((data) => {
  //   if (data.type === 'ping' || !data.message) return;
  //   setNotifications((prev) => [...prev, data.message])
  // });

  // ws

  // connectWebsocket()

  return (
    <WebSocketContext.Provider value={{notifications}}>
      {children}
    </WebSocketContext.Provider>
  )
}

export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (context === undefined) {
    throw new Error('useWebSocket must be used within a WebSocketProvider');
  }
  return context;
};
