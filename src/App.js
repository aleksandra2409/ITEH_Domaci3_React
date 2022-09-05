import Header from "./components/Header";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/movie"
            element={
              <Movie/>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
