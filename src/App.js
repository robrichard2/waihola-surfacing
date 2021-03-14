import "./App.css";

import { Route, Switch } from "react-router-dom";

import { Home } from "./scenes/home";
import { Projects } from "./scenes/projetcs";
import { Contact } from "./scenes/contact";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { NotFound } from "./components/notFound";
import { Services } from "./scenes/services";
import { About } from "./scenes/about";
import { Testimonials } from "./scenes/testimonials";

function App() {
  return (
    <div className="body-inner">
      <Header />
      <Switch>
        <Route exact path={["/home", ""]} component={Home} />
        <Route exact path="/projects/" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/testimonials" component={Testimonials} />

        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
