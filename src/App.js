
import MyNav from './component/MyNav';
import Home from './page/Home';
import Genre from './page/Genre';
import Chapter from './component/Chapter';
import NewsDetail from './component/NewsDetail';
import Details from './component/Details';
import PageNotFound from './component/PageNotFound';
import SearchManga from './component/SearchManga';
import GenreDetail from './component/GenreDetail';
// import About from './About';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// const Home = lazy(()=>import('./page/Home'));
// const Chapter = lazy(() => import('./component/Chapter'));
// const NewsDetail = lazy(()=>import('./component/NewsDetail'));
// const Details = lazy(()=>import('./component/Details'));
// const PageNotFound = lazy(() => import('./component/PageNotFound'))
// const SearchManga = lazy(()=>import('./component/SearchManga'))


function App() {
  return ( 
    <BrowserRouter>
      <MyNav/>
        <Routes>
          <Route path="/" element={
           <Container style={{paddingTop:"100px"}}>
              <Home />
           </Container>
          } />
              <Route path="/404" element={<PageNotFound/>}/>
              <Route path="/search" 
                element={
                  <Container style={{paddingTop:"100px"}}>
                  <SearchManga/>
                </Container>  
                 } />
              <Route path="/genre"
                element={
                  <Container style={{paddingTop:"100px"}}>
                    <Genre/>
                  </Container>  
                 } />
              <Route path="/genre/:genre/:page"
                element={
                  <Container style={{paddingTop:"100px"}}>
                    <GenreDetail/>
                 </Container>
                 } />
              <Route path="/daftar-komik/:page"
                element={
                  <Container style={{paddingTop:"100px"}}>
                      <NewsDetail/>
                   </Container>  
                 } />
              <Route path="/detail/:type/:title"
                element={
                  <Container style={{paddingTop:"100px"}}>
                    <Details/>
                </Container>
                 } />
              <Route path="/chapter/:title/:chapter"
                element={
                  <Chapter/>   
                 } />
              {/* 
    
              <Route path="/chapter/:title/:chapter">
                  <Chapter/>   
              </Route> */}
          </Routes> 
    </BrowserRouter>


  )
}

export default App;