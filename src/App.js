import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./frases.css";

function App() {
  const [cita, setCita] = useState({});

  useEffect(() => {
    fetch("https://randommcitas.herokuapp.com/api/citarandom")
      .then((data) => data.json())
      .then((citas) => setCita(citas));
  }, []);

  return (
    <div>
    <div className="cita_frase">
    <h2 className="frase_texto"> “{cita.frase}” </h2>
  </div>
      <div
        className="citas"
        style={{
          backgroundImage: `url(${cita.url})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
     
      </div>
    </div>
  );
}

export default App;
