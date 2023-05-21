import './App.css';
import { useState, useEffect } from  'react'
import Gallery from './Gallery.jsx'
import ButtonBar from './ButtonBar.js'

function App() {
  let [data, setData] = useState({})
  let [artId, setArtId] = useState(465)

  useEffect(() => {
    document.title = 'Welcome to ArtWorld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(res => res.json())
    .then(resData => setData(resData))
  }, [artId])

  const handleIterate = e => {
    setArtId(artId + Number(e.target.value))
  }

  return (
    <div className="App">
      <Gallery data={data}/>
      <ButtonBar handleIterate={handleIterate}/>
    </div>
  );
}

export default App;
