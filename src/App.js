import React from "react";
import "./App.css";
import Navbar from "./components/navBar";
import LocationBar from "./components/locations";
import RecipeReviewCard from "./components/jobCards";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main role="main" className="container-fluid" style={{paddingTop: 20}}>
        <div className="row">
          <LocationBar />
          <RecipeReviewCard />
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;