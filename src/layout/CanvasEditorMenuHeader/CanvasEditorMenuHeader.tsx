import { useContext, useState } from "react";
import { cn } from "../../helpers/utils";
import { FileContext } from "../../contexts/FileContext";
import { Box, Input, Text } from "@mantine/core";

export function CanvasEditorMenuHeader() {
  return (
    <Box
      role="navigation"
      className={cn(
        "canvas-editor-menu-header p-2 border-b flex flex-row justify-between items-center"
      )}
    >
      <Box className="Canvas-controlActions-wrapper" />
      <FileNameManager />
      <Box className="Canvas-environmentActions-wrapper" />
    </Box>
  );
}

function FileNameManager() {
  const { fileName, setFileName } = useContext(FileContext);
  const [isFileRenaming, setIsFileRenaming] = useState<boolean>(false);

  const [newFileName, setNewFileName] = useState<string>(fileName);

  const handleFileRename = () => {
    if (!newFileName) {
      setNewFileName(fileName);
      return;
    }
    setFileName(newFileName);
  };

  return (
    <Box
      className={cn(
        "fileName-manager-info-wrapper flex flex-row items-center justify-center gap-2"
      )}
    >
      <Text size="sm">Personal</Text>
      <Text size="xs">{"/"}</Text>
      <Text
        size="sm"
        onDoubleClick={() => setIsFileRenaming(true)}
        onBlur={() => setIsFileRenaming(false)}
      >
        {isFileRenaming ? (
          <Input
            size="fit-content"
            className="=fileName-manager-input h-fit"
            value={newFileName}
            autoFocus
            onChange={(e) => setNewFileName(e.currentTarget.value)}
            onBlur={() => {
              handleFileRename();
              setIsFileRenaming(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.currentTarget.value) {
                handleFileRename();
                setIsFileRenaming(false);
              }
            }}
          />
        ) : (
          fileName
        )}
      </Text>
    </Box>
  );
}
