import Title from './Title';
import { services } from '../data';

function Services() {
  return (
    <section className="section services" id="services">
      <Title title="our" span="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, p, title } = service;
          return (
            <article key={id} className="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{p}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
export default Services;
