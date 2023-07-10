import './App.css'
import Row from './Row'
import request from './requests'
function App() {
  return (

    <div classname="App">
      <h1>netflix</h1>
      <Row title="Netflix orginals" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Trending" fetchUrl={request.fetchTrending} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovie} />
      <Row title="Horror MOvies" fetchUrl={request.fetchHorrorMovie} />
      <Row title="Romantic Movies" fetchUrl={request.fetchRomanceMovie} />
      <Row title="Documentry" fetchUrl={request.fetchDocumentaryMovie} />
    </div>
  )
}

export default App