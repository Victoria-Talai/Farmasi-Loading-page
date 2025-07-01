import poza1 from "../assets/poza-1-principala.jpg";

function Principal() {
  return (
    <div className="content-principal">
      <div className="content-container">
        <img src={poza1} alt="Principal" />
      </div>
      <div className="content-text">
        <h1>Construiește-ți succesul alături de mine!</h1>
        <button>Contacteaza-ne</button>
      </div>
    </div>
  );
}
export default Principal;
