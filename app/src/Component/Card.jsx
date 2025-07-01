function Card() {
  const card = [
    {
      service: "Mama și liderul din ea",
      description: "O mamă în MLM nu vinde doar produse, ci oferă oportunități! Ea construiește o echipă, inspiră și creează un viitor mai bun pentru familia sa.",
      btn: "Contactează-ne",
    },
    {
      service: "Exemplu pentru viitor",
      description: "Copiii nu fac ce li se spune, ci ceea ce văd. O mamă care reușește în MLM le arată că visurile devin realitate prin muncă și perseverență!",
      btn: "Contactează-ne",
    },
    {
      service: "De la mamă la antreprenoare",
      description: "MLM nu este doar un job, este libertatea de a lucra de acasă, de a-ți crește copiii și, în același timp, de a construi un imperiu financiar!",
      btn: "Contactează-ne",
    },
  ];
  return (
    <div className="card">
        {card.map((item, index) => (
          <div key={index} className="item">
            <h2 className="service">{item.service}</h2>
            <p className="description">{item.description}</p>
            <button className="btn">{item.btn}</button>
          </div>
        ))}
    </div>
  );
}
export default Card;
