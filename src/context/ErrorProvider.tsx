/* eslint-disable @typescript-eslint/no-empty-function */
import { checkApiHealth } from "@/services/checkApiHealth";
import { useState, createContext, useEffect } from "react";

type Props = {
  children: React.ReactNode;
};
export const ErrorContext = createContext({
  isOffline: false,
  isError: false,
  setIsError: (bool: boolean) => {},
});

export const ErrorProvider = ({ children }: Props) => {
  const [isOffline, setIsOffline] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const handleCheck = async () => {
      setIsError(await checkApiHealth());
    };

    handleCheck();
  });

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOffline(true);
      setIsError(!navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  });

  return (
    <ErrorContext.Provider value={{ isOffline, isError, setIsError }}>
      {children}
    </ErrorContext.Provider>
  );
};
