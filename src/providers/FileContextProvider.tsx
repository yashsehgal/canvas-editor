import { useState } from "react";
import { FileContext, INITIAL_FILE_CONTEXT } from "../contexts/FileContext";

export function FileContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fileName, setFileName] = useState<string>(
    INITIAL_FILE_CONTEXT.fileName
  );

  const ContextValue = {
    fileName,
    setFileName,
  };

  return (
    <FileContext.Provider value={ContextValue}>{children}</FileContext.Provider>
  );
}
