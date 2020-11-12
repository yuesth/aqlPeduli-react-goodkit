import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from "./pages/landing"
import Program from "./pages/program"
import Profil from "./pages/profil"
import DetailProgram from "./pages/detail-program"
import Kepeduliankita from "./pages/kepeduliankita"
import DetailKepeduliankita from "./pages/detail-kepeduliankita"
import Coba from "./pages/coba"
import Coba2 from "./pages/coba2"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/program" exact component={Program}></Route>
        <Route path="/profil" exact component={Profil}></Route>
        <Route path="/program/:id" exact component={DetailProgram}></Route>
        <Route path="/kk" exact component={Kepeduliankita}></Route>
        <Route path="/kk/:id" exact component={DetailKepeduliankita}></Route>
        <Route path="/coba" exact component={Coba}></Route>
        <Route path="/coba2" exact component={Coba2}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
