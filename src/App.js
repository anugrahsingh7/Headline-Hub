import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import './App.css'; 
function App() {
  const [apiUrl, setApiUrl] = useState("https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=0f242ff4e67b3a734d117843614de000");

  const handleUrlChange = (newUrl) => {
    setApiUrl(newUrl);
  };
  return (
    <div className="app-container" >
      <NavBar onUrlChange={handleUrlChange}  />
      <News key={apiUrl} ApiUrl={apiUrl} />
      
    </div>
  );
}

export default App;
