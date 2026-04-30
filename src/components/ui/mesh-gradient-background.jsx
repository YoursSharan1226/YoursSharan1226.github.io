import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

export function MeshGradientBackground() {
  const [dims, setDims] = useState({ w: window.innerWidth, h: window.innerHeight });

  useEffect(() => {
    const update = () => setDims({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}>
      <MeshGradient
        width={dims.w}
        height={dims.h}
        colors={["#72b9bb", "#b5d9d9", "#ffd1bd", "#ffebe0", "#8cc5b8", "#dbf4a4"]}
        distortion={1.2}
        swirl={0.6}
        grainMixer={0}
        grainOverlay={0}
        speed={0.8}
        offsetX={0.08}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(238, 243, 251, 0.18)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
