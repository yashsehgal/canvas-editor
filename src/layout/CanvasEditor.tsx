import { Box } from "@mantine/core";
import { cn } from "../helpers/utils";
import { CanvasEditorMenuHeader } from "./CanvasEditorMenuHeader";

export default function CanvasEditor() {
  return (
    <Box className={cn("Canvas-editor-container")}>
      <CanvasEditorMenuHeader />
      <div className="canvas-editor-canvas-container"></div>
    </Box>
  );
}
