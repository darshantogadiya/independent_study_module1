import "./App.css";

function App() {
  return (
    <form className="App" autoComplete="off">
      <div className="form-field">
        <label htmlFor="service">Service(s)</label>
        <div className="services">
          <div className="first-division">
            <input name="service" type="text" id="service" required />
            <button type="button" className="add-btn">
              <span>Add a Service</span>
            </button>
          </div>
          <div className="second-division">
            <button type="button" className="remove-btn">
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div>
      <div className="output">
        <h2>Output</h2>
      </div>
    </form>
  );
}

export default App;
