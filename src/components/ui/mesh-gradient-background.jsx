export function MeshGradientBackground() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 18% 10%, #ffd1bd 0%, transparent 28%), radial-gradient(circle at 36% 30%, #72b9bb 0%, transparent 34%), radial-gradient(circle at 82% 14%, #dbf4a4 0%, transparent 35%), linear-gradient(135deg, #ffebe0 0%, #b5d9d9 55%, #8cc5b8 100%)",
        }}
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
