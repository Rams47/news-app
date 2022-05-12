import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

function App() {
  const [progress, setprogress] = useState(0)
  return (
    <div className="App bg-gray-300 pb-4 ">
      <BrowserRouter>
      <Navbar />
      <LoadingBar
      height={3}
      color='#f11946'
      progress={progress}
      />
        <Routes>
          <Route exact path="/" element={<News setprogress={setprogress} apiKey="API KEY" country="in" category="general" />}></Route>
          <Route exact path="/business" element={<News setprogress={setprogress} apiKey="API KEY" country="in" category="business" />}></Route>
          <Route exact path="/entertainment" element={<News setprogress={setprogress} apiKey="API KEY" country="in" category="entertainment" />}></Route>
          <Route exact path="/health" element={<News setprogress={setprogress} apiKey="API KEY" country="in" category="health" />}></Route>
          <Route exact path="/science" element={<News setprogress={setprogress} apiKey="API KEY" country="in" category="science" />}></Route>
          <Route exact path="/sports" element={<News setprogress={setprogress} apiKey="API KEY" country="in" category="sports" />}></Route>
          <Route exact path="/technology" element={<News setprogress={setprogress} apiKey="API KEY" country="in" category="technology" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
