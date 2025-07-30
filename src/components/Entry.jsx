/*
It is stuck with one data here because we're passing the data directly not through props
const Entry = () => {
  const dataElements = data.map((dataE) => {
    return (
      <article className="journal-entry" key={dataE.id}>
        <div className="main-image-container">
          <img className="main-image" src={dataE.img.src} alt={dataE.img.src} />
        </div>
        <div className="info-container">
          <img
            className="marker"
            src="../images/marker.png"
            alt="map marker icon"
          />
          <span className="country">{dataE.country}</span>
          <a href={dataE.googleMapsLink} target="_blank">
            View on Google Maps
          </a>
          <h2 className="entry-title">{dataE.title}</h2>
          <p className="trip-dates">{dataE.dates}</p>
          <p className="entry-text">{dataE.text}</p>
        </div>
      </article>
    );
  });

  return <>{dataElements};</>;
};
export default Entry; */

export default function Entry(props) {
  // Console.log(props) to see the details of what you passed in.
  return (
    <article className="journal-entry">
      <div className="main-image-container" key={props.ent.id}>
        <img
          className="main-image"
          src={props.ent.img.src}
          alt={props.ent.alt}
        />
      </div>
      <div className="info-container">
        <img
          className="marker"
          src="../images/marker.png"
          alt="map marker icon"
        />
        <span className="country">{props.ent.country}</span>
        <a href={props.googleMapsLink} target="_blank">
          View on Google Maps
        </a>
        <h2 className="entry-title">{props.ent.title}</h2>
        <p className="trip-dates">{props.ent.dates}</p>
        <p className="entry-text">{props.ent.text}</p>
      </div>
    </article>
  );
}
