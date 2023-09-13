import { useState, useEffect, createContext } from 'react';
import { Router,Route,Routes } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
export const NewsContext = createContext();
import Home from './Home';
import Layout from './Layout';
import Economic from './Economic';
import FavoritesPage from './Favorites';
import Gaming from './Gaming';
import General from './General';
import Login from './Login';
import Search from './Search';
import RunSearch from './RunSearch';
import Sport from './Sport';

function App() {
  const [IsraeliNews, setIsraeliNews] = useState([]);
  const [SportNews, setSportNews] = useState([]);
  const [EconomicNews, setEconomicNews] = useState([]);
  const [GamingNews, setGamingNews] = useState([]);
  const [GeneralNews, setGeneralNews] = useState([]);
  const [Favorites, setFavorites] = useState([])
  const [user,setUser] = useState([])

  useEffect(() => {
    async function fetchData(setter,api) {
      try {
        const response = await axios.get(api);
   
        setter(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    console.log("Fetching")
    fetchData(setIsraeliNews, `https://newsapi.org/v2/top-headlines?country=il&apiKey=${import.meta.env.VITE_API_KEY}`)
    fetchData(setSportNews, `https://newsapi.org/v2/top-headlines?country=il&category=sports&apiKey=${import.meta.env.VITE_API_KEY}`)
    fetchData(setEconomicNews, `https://newsapi.org/v2/top-headlines?country=il&category=business&apiKey=${import.meta.env.VITE_API_KEY}`)
    fetchData(setGamingNews, `https://newsapi.org/v2/top-headlines?country=il&category=gaming&apiKey=${import.meta.env.VITE_API_KEY}`)
    fetchData(setGeneralNews, `https://newsapi.org/v2/top-headlines?category=general&apiKey=${import.meta.env.VITE_API_KEY}`)
  }, []);
return (
    <>
<NewsContext.Provider value={{ IsraeliNews,SportNews,EconomicNews,GamingNews, GeneralNews,Favorites,setFavorites,user,setUser }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route  path="Home" element={<Home />} />
          <Route  path="Search" element={<Search />} />
          <Route path="Economic" element={<Economic />} />
          <Route path="Gaming" element={<Gaming />} />
          <Route path="Favorites" element={<FavoritesPage />} />
          <Route path="General" element={<General />} />
          <Route path="Sport" element={<Sport />} />

          <Route path="RunSearch/:select/:keyword" element={<RunSearch />} />
        </Route>
      </Routes>
      </NewsContext.Provider>
  </>
  );
}

export default App;
