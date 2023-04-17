import tour from '../images/tour.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function TourBlock({id, name, date, more_date, price, place_country, place_city, imageUrl}) {
    return (
        <article>
          <div
            className="photo"
            style={{backgroundImage: "url("+imageUrl+")"}}
          >
            <i className="fa-solid fa-star"></i>
            <FontAwesomeIcon icon = {faStar } />
          </div>
          <div className="info">
            <h5>{name.toUpperCase()}</h5>
            <p>
              {" "}
              <i className="fa-solid fa-calendar"></i>{date + " "}
              <span>и ещё {more_date} даты... </span>
            </p>
            <p>
              {" "}
              <i className="fa-sharp fa-solid fa-location-dot"></i> {place_country + (place_city ? ", " + place_city : "")}
            </p>
            <p className="price">{price} р.</p>
          </div>
        </article>
    );
}

export default TourBlock;