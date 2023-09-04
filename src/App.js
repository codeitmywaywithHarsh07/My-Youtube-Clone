import './App.css';
import './index.css';
import { AppContext } from './Context/AppContext';
import { Route,Routes } from 'react-router-dom';
import Header from './Components/Header';
import Feed from './Pages/Feed';
import SearchResult from './Pages/SearchResult';
import VideoDetails from './Components/VideoDetails';

function App() {
  return (
    <div className="flex flex-col h-full">
      <Header/>

      <Routes>
        <Route path='/' element={<Feed/>}/>                                                {/* When page is Loaded */}
        <Route path='/searchResult/:searchQuery' element={<SearchResult/>}/>            {/* When some thing is Searched */}
        <Route path='/video/:id' element={<VideoDetails/>}/>                             {/* When some video is clicked */}
      </Routes>
    </div>
  );
}

export default App;
