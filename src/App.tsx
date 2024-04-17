import { Box } from "@mantine/core";
import CanvasEditor from "./layout/CanvasEditor";
import { FileContextProvider } from "./providers/FileContextProvider";

export default function App() {
  return (
    <Box className="App-container">
      <FileContextProvider>
        <CanvasEditor />
      </FileContextProvider>
    </Box>
  );
}
