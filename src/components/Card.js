function Card({ title, img, text }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${img})` }}>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default Card;
