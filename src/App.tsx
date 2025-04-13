import AppRouter from "./components/AppRouter";

function App() {
  return (
    <div className="App">
      <div style={{ marginLeft: "200px", padding: "20px" }}>
        <header>
          <h1>My little food truck ❤️</h1>
        </header>
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
