import './App.css';
import React, { Suspense, lazy } from 'react'
import ScrollToTop from './scrollToTop'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

// import Landing from "./pages/landing"
const LazyLanding = lazy(() => import('./pages/landing'))
// import Program from "./pages/program"
const LazyProgram = lazy(() => import('./pages/program'))
// import Profil from "./pages/profil"
const LazyProfil = lazy(() => import('./pages/profil'))
// import Relawan from "./pages/relawan"
const LazyRelawan = lazy(() => import('./pages/relawan'))
// import RelawanSukses from "./pages/relawan-sukses"
const LazyRelawanSukses = lazy(() => import('./pages/relawan-sukses'))
// import DetailProgram from "./pages/detail-program"
const LazyDetailProgram = lazy(() => import('./pages/detail-program'))
// import Kepeduliankita from "./pages/kepeduliankita"
const LazyKepeduliankita = lazy(() => import('./pages/kepeduliankita'))
// import DetailKepeduliankita from "./pages/detail-kepeduliankita"
const LazyDetailKepeduliankita = lazy(() => import('./pages/detail-kepeduliankita'))
// import Berita from "./pages/berita"
const LazyBerita = lazy(() => import('./pages/berita'))
// import DetailBerita from "./pages/detail-berita"
const LazyDetailBerita = lazy(() => import('./pages/detail-berita'))
// import BeritaNasional from "./pages/nasional-berita"
const LazyNasionalBerita = lazy(() => import('./pages/nasional-berita'))
// import BeritaInternasional from "./pages/internasional-berita"
const LazyInternasionalBerita = lazy(() => import('./pages/internasional-berita'))
// import EventBerita from "./pages/event-berita"
const LazyEventBerita = lazy(() => import('./pages/event-berita'))
// import DetailEvents from "./pages/detail-events"
const LazyDetailEventBerita = lazy(() => import('./pages/detail-events'))
// import Khazanah from "./pages/khazanah"
const LazyKhazanah = lazy(() => import('./pages/khazanah'))
// import DetailKhazanah from "./pages/detail-khazanah"
const LazyDetailKhazanah = lazy(() => import('./pages/detail-khazanah'))
// import Informasi from "./pages/informasi"
const LazyInformasi = lazy(() => import('./pages/informasi'))
// import DetailGaleri from "./pages/detail-galeri"
const LazyDetailGaleri = lazy(() => import('./pages/detail-galeri'))
const LazyPage404 = lazy(() => import('./pages/page404'))



// function AsLanding() {
//   return (
//     <div>
//       <Suspense fallback={<></>}>
//         <LazyLanding />
//       </Suspense>
//     </div>
//   )
// }

// function AsProgram() {
//   return (
//     <div>
//       <Suspense fallback={<></>}>
//         <LazyProgram />
//       </Suspense>
//     </div>
//   )
// }

// function AsProfil() {
//   return (
//     <div>
//       <Suspense fallback={<></>}>
//         <LazyProfil />
//       </Suspense>
//     </div>
//   )
// }

// function AsRelawan() {
//   return (
//     <div>
//       <Suspense fallback={<></>}>
//         <LazyRelawan />
//       </Suspense>
//     </div>
//   )
// }

// function AsRelawanSukses() {
//   return (
//     <div>
//       <Suspense fallback={<></>}>
//         <LazyRelawanSukses />
//       </Suspense>
//     </div>
//   )
// }

// function AsDetailProgram() {
//   return (
//     <div>
//       <Suspense fallback={<></>}>
//         <LazyDetailProgram />
//       </Suspense>
//     </div>
//   )
// }

// function AsKepeduliankita() {
//   return (
//     <div>
//       <Suspense fallback={<></>}>
//         <LazyKepeduliankita />
//       </Suspense>
//     </div>
//   )
// }

// function AsDetailKepeduliankita() {
//   return (
//     <div>
//       <Suspense fallback={<></>}>
//         <LazyDetailKepeduliankita />
//       </Suspense>
//     </div>
//   )
// }

// function AsBerita() {
//   return (
//     <div>
//       <Suspense fallback={<></>}>
//         <LazyBerita />
//       </Suspense>
//     </div>
//   )
// }

// function AsDetailBerita() {
//   return (
//     <div>
//       <Suspense fallback={<></>}>
//         <LazyDetailBerita />
//       </Suspense>
//     </div>
//   )
// }

// function AsNasionalBerita() {
//   return (
//     <div>
//       <Suspense fallback={<></>}>
//         <LazyNasionalBerita />
//       </Suspense>
//     </div>
//   )
// }

// function AsInternasionalBerita() {
//   return (
//     <div>
//       <Suspense fallback={<></>}>
//         <LazyInternasionalBerita />
//       </Suspense>
//     </div>
//   )
// }

// function AsEventBerita() {
//   return (
//     <div>
//       <Suspense fallback={<></>}>
//         <LazyEventBerita />
//       </Suspense>
//     </div>
//   )
// }

// function AsDetailEventBerita() {
//   return (
//     <div>
//       <Suspense fallback={<></>}>
//         <LazyDetailEventBerita />
//       </Suspense>
//     </div>
//   )
// }

// function AsKhazanah() {
//   return (
//     <div>
//       <Suspense fallback={<></>}>
//         <LazyKhazanah />
//       </Suspense>
//     </div>
//   )
// }

// function AsDetailKhazanah() {
//   return (
//     <div>
//       <Suspense fallback={<></>}>
//         <LazyDetailKhazanah />
//       </Suspense>
//     </div>
//   )
// }

// function AsInformasi() {
//   return (
//     <div>
//       <Suspense fallback={<></>}>
//         <LazyInformasi />
//       </Suspense>
//     </div>
//   )
// }

// function AsDetailGaleri() {
//   return (
//     <div>
//       <Suspense fallback={<></>}>
//         <LazyDetailGaleri />
//       </Suspense>
//     </div>
//   )
// }

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Suspense fallback={<></>}>
            <Switch>
              <Route path="/" exact component={LazyLanding}></Route>
              <Route path="/kepedulian" exact component={LazyProgram}></Route>
              <Route path="/kepedulian/:paramKepedulian" exact component={LazyDetailProgram}></Route>
              <Route path="/profil" exact component={LazyProfil}></Route>
              <Route path="/relawan" exact component={LazyRelawan}></Route>
              <Route path="/relawan-sukses" exact component={LazyRelawanSukses}></Route>
              <Route path="/kepedulian-kita" exact component={LazyKepeduliankita}></Route>
              <Route path="/kepedulian-kita/:id" exact component={LazyDetailKepeduliankita}></Route>
              <Route path="/berita" exact component={LazyBerita}></Route>
              <Route path="/berita/:paramBerita" exact component={LazyDetailBerita}></Route>
              <Route path="/beritanasional" exact component={LazyNasionalBerita}></Route>
              <Route path="/beritainter" exact component={LazyInternasionalBerita}></Route>
              <Route path="/events" exact component={LazyEventBerita}></Route>
              <Route path="/events/:paramEvents" exact component={LazyDetailEventBerita}></Route>
              <Route path="/khazanah" exact component={LazyKhazanah}></Route>
              <Route path="/khazanah/:paramKhazanah" exact component={LazyDetailKhazanah}></Route>
              <Route path="/informasi" exact component={LazyInformasi}></Route>
              <Route path="/galeri/:id" exact component={LazyDetailGaleri}></Route>
              <Route path="/404" component={LazyPage404}></Route>
              <Redirect to="/404"></Redirect>
            </Switch>
          </Suspense>
        </ScrollToTop>
      </BrowserRouter>
      <a href="https://api.whatsapp.com/send?phone=6282239193515&text=" className="float float-wapp" target="_blank">
        <i className="fa fa-whatsapp my-float" />
      </a>
    </>
  );
}

export default App;
// Assalamu'alaikum Warohmatulloh Wabarokatuh. Kami dari AQL Peduli, ada yang bisa kami bantu?
