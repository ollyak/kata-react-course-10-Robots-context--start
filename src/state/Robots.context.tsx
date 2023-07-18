import React, {Dispatch, FC, ReactNode, SetStateAction, useContext, useEffect, useState} from "react";
import {Robot} from "../types.ts";
import {getRobotsList} from "../api/robots.api.ts";

type RobotsContextType = {
  isLoading: Boolean,
  errorMsg: string,
  robotsList: Robot[],
  setRobotsList: Dispatch<SetStateAction<Robot[]>>,
  selectedProfile: Robot | null,
  setSelectedProfile: Dispatch<SetStateAction<Robot | null>>
};

const RobotsContext = React.createContext<RobotsContextType | null>(null);

const RobotsProvider: FC<{children: ReactNode}> = ({ children }) => {
  const [robotsList, setRobotsList] = useState<Robot[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<Robot | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    (async () => {
      const result = await getRobotsList();
      setRobotsList(result);
      setSelectedProfile(result[0]);
      setIsLoading(false);
    })().catch((error: unknown) => setErrorMsg(`fetch operation failed: ${(error as Error).message}`));
  }, []);

  const state = {
    robotsList,
    selectedProfile,
    isLoading,
    errorMsg
  };

  const actions = {
    setRobotsList,
    setIsLoading,
    setSelectedProfile,
    setErrorMsg
  };

  return (
    <RobotsContext.Provider value={{ ...state, ...actions }}>{children}</RobotsContext.Provider>
  );
};

const useRobotsContext = (): RobotsContextType => {
  const robotsContext =  useContext(RobotsContext);
  if (!robotsContext) {
    throw new Error('useRobotsContext must be consumed within the RobotsContext');
  }
  return robotsContext;
}

export { RobotsProvider, RobotsContext, useRobotsContext };
