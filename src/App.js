import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Action from "./routes/Action";
import Post from "./routes/Post";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add-post" element={<Action />} />
        <Route exact path="/edit-post/:id" element={<Action />} />
        <Route exact path="/post/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
