import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

export function MeshGradientBackground() {
  const [dims, setDims] = useState({ w: window.innerWidth, h: window.innerHeight });
  const [canRenderShader, setCanRenderShader] = useState(false);

  useEffect(() => {
    setCanRenderShader(supportsWebGL());
    const update = () => setDims({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}>
      {canRenderShader ? (
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
      ) : (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 18% 10%, #ffd1bd 0%, transparent 28%), radial-gradient(circle at 36% 30%, #72b9bb 0%, transparent 34%), radial-gradient(circle at 82% 14%, #dbf4a4 0%, transparent 35%), linear-gradient(135deg, #ffebe0 0%, #b5d9d9 55%, #8cc5b8 100%)",
          }}
        />
      )}
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
