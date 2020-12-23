import './App.css';
import ScrollToTop from './scrollToTop'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from "./pages/landing"
import Program from "./pages/program"
import Profil from "./pages/profil"
import Relawan from "./pages/relawan"
import RelawanSukses from "./pages/relawan-sukses"
import DetailProgram from "./pages/detail-program"
import Kepeduliankita from "./pages/kepeduliankita"
import DetailKepeduliankita from "./pages/detail-kepeduliankita"
import Berita from "./pages/berita"
import DetailBerita from "./pages/detail-berita"
import BeritaNasional from "./pages/nasional-berita"
import BeritaInternasional from "./pages/internasional-berita"
import EventBerita from "./pages/event-berita"
import DetailEvents from "./pages/detail-events"
import Khazanah from "./pages/khazanah"
import DetailKhazanah from "./pages/detail-khazanah"
import Informasi from "./pages/informasi"
import DetailGaleri from "./pages/detail-galeri"
import Coba from "./pages/coba"
import Coba2 from "./pages/coba2"

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={Landing}></Route>
            <Route path="/program" exact component={Program}></Route>
            <Route path="/profil" exact component={Profil}></Route>
            <Route path="/relawan" exact component={Relawan}></Route>
            <Route path="/relawan-sukses" exact component={RelawanSukses}></Route>
            <Route path="/program/:id/:program" exact component={DetailProgram}></Route>
            <Route path="/kk" exact component={Kepeduliankita}></Route>
            <Route path="/kk/:id" exact component={DetailKepeduliankita}></Route>
            <Route path="/berita" exact component={Berita}></Route>
            <Route path="/berita/:id" exact component={DetailBerita}></Route>
            <Route path="/beritanasional" exact component={BeritaNasional}></Route>
            <Route path="/beritainter" exact component={BeritaInternasional}></Route>
            <Route path="/events" exact component={EventBerita}></Route>
            <Route path="/events/:id" exact component={DetailEvents}></Route>
            <Route path="/khazanah" exact component={Khazanah}></Route>
            <Route path="/khazanah/:id" exact component={DetailKhazanah}></Route>
            <Route path="/informasi" exact component={Informasi}></Route>
            <Route path="/galeri/:id" exact component={DetailGaleri}></Route>
            <Route path="/coba" exact component={Coba}></Route>
            <Route path="/coba2" exact component={Coba2}></Route>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
      <a href="https://api.whatsapp.com/send?phone=6282239193515&text=" className="float float-wapp" target="_blank">
        <i className="fa fa-whatsapp my-float"/>
      </a>
    </>
  );
}

export default App;
// Assalamu'alaikum Warohmatulloh Wabarokatuh. Kami dari AQL Peduli, ada yang bisa kami bantu?
