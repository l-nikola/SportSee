export default function Card({ keyData, unit, name, icon }) {
  return (
    <section className="card">
      <figure>
        <div className={`card__icon card__icon--${name.toLowerCase()}`}>
          <img src={icon} alt={`Icon ${name}`} />
        </div>
        <figcaption className="card__caption">
          <p className="card__caption--keyData">
            {keyData}
            {unit}
          </p>
          <p className="card__caption--name">{name}</p>
        </figcaption>
      </figure>
    </section>
  );
}
