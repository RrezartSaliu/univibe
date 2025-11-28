import React from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./CategoryEvents.css";

const categoriesConfig = {
  tech: {
    name: "Технологија",
    events: [],
  },
  career: {
    name: "Кариeра",
    events: [],
  },
  research: {
    name: "Истражување",
    events: [],
  },
  culture: {
    name: "Култура",
    events: [],
  },
  health: {
    name: "Здравје",
    events: [],
  },
  sport: {
    name: "Спорт",
    events: [
      {
        id: 1,
        title: "Турнир во пинг-понг",
        date: "5 декември 2025",
        icon: "🏓",
      },
      {
        id: 2,
        title: "Кошаркарски меч",
        date: "10 декември 2025",
        icon: "🏀",
      },
    ],
  },
  edu: {
    name: "Едукација",
    events: [],
  },
  workshops: {
    name: "Работилници",
    events: [],
  },
};

export default function CategoryEvents() {
  const { categoryId } = useParams();

  const category = categoriesConfig[categoryId] || {
    name: "Категорија",
    events: [],
  };

  const { name: categoryName, events } = category;

  return (
    <div className="category-events-page">
      <div className="category-events-inner">
       
        <div className="breadcrumb">
          <Link to="/" className="crumb-link">
            Дома
          </Link>
          <span className="sep">›</span>
          <span className="crumb-muted">Категории</span>
          <span className="sep">›</span>
          <span className="current">{categoryName}</span>
        </div>

      
        <h1 className="category-title">Категорија: {categoryName}</h1>

       
        <div className="events-search-row">
          <div className="events-search-bar">
            <span className="events-search-icon">🔍</span>
            <input
              type="text"
              placeholder="Пребарај настан..."
              className="events-search-input"
            />
          </div>
          <button className="events-filter-btn">Барај</button>
        </div>

        {events.length === 0 ? (
          <p className="no-events">
            Моментално нема пронајдени настани за оваа категорија. Следи нѐ,
            наскоро ќе додадеме нешто интересно. ✨
          </p>
        ) : (
          <section className="events-grid">
            {events.map((event) => (
              <article key={event.id} className="event-card">
                <div className="event-image">
                  {event.image ? (
                    <img src={event.image} alt={event.title} />
                  ) : (
                    <span>{event.icon}</span>
                  )}
                </div>

                <div className="event-body">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-date">{event.date}</p>

                  <button className="event-details-btn">Детали</button>
                </div>
              </article>
            ))}
          </section>
        )}

        <Footer />
      </div>
    </div>
  );
}
