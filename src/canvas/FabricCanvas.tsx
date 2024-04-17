import { useEffect, useRef } from "react";
import * as fabric from "fabric";

export const FabricJSCanvas = () => {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const options = {};
    const canvas = new fabric.Canvas(canvasEl.current!, options);
    const updateCanvasContext = (canvas: fabric.Canvas | null) => {};
    updateCanvasContext(canvas);
    return () => {
      updateCanvasContext(null);
      canvas.dispose();
    };
  }, []);

  return (
    <canvas
      id="fabric-canvas"
      ref={canvasEl}
      style={{ width: "100%", height: "100%" }}
    />
  );
};
