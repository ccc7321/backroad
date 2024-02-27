import Title from './Title';
import { tours } from '../data';

function Tour() {
  return (
    <section className="section" id="tours">
      <Title title="featured" span="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, img, date, title, p, country, days, price } = tour;
          return (
            <article key={id} className="tour-card">
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{p}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{' '}
                    {country}
                  </p>
                  <p>{days}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
export default Tour;
