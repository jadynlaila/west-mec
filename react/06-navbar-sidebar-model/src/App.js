import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { links } from "./util/consts";
import Home from "./Pages/Home";
import About from './Pages/About'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        {/* <Route exact path="/">
          <Home />
        </Route> */}

        {/* <Route path="/about">
          <About />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/products">
          <Products />
        </Route> */}

        {/* <Route path="*">
          <Error />
        </Route> */}
        <Route exact path="/">
          <Home />
        </Route>

        {/* {links
          .filter((link) => link.text !== "Home")
          .map((link) => {
            const { id, url, page } = link;
            return <Route key={id} path={url}>
                {page}
              </Route>
          })} */}
      </Switch>
    </>
  );
}

export default App;
