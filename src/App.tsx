import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ marginLeft: "200px", padding: "20px" }}>
        <header>
          <h1>My little food truck ❤️</h1>
        </header>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
