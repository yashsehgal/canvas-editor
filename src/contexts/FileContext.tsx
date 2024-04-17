import { createContext } from "react";

export type FileCategoryType =
  | "personal"
  | {
      teamName: string;
    };

export interface FileContextType {
  fileName: string;
  setFileName: (fileName: string) => void;
}

export const INITIAL_FILE_CONTEXT: FileContextType = {
  fileName: "Untitled",
  setFileName: () => {},
};

export const FileContext = createContext<FileContextType>({
  ...INITIAL_FILE_CONTEXT,
});
