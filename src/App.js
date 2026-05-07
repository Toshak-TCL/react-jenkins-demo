function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        color: "white",
        fontFamily: "Arial"
      }}
    >
      <h1>🚀 React Jenkins CI/CD Demo</h1>

      <h2>Deployment Successful</h2>

      <p>Frontend deployed automatically using Jenkins Pipeline</p>

      <div
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          background: "#00c853",
          borderRadius: "10px",
          fontWeight: "bold"
        }}
      >
        ✅ Version 2 Live
      </div>
    </div>
  );
}

export default App;