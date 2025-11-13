import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import vector from "../../../src/assests/images/Circle-heart.png";
import arrow from "../../../src/assests/images/Icon.svg"
import logo from "../../../src/assests/images/logo.png"
import loyalty from "../../../src/assests/images/loyalty.png"
import Trustpilot from "../../../src/assests/images/Frame 748.png"
import star from "../../../src/assests/images/image 13.png"
import bg from "../../../src/assests/images/image.png"
// import frame from "../../../src/assests/images/Frame 562.png"
// import frame1 from "../../../src/assests/images/Frame 562 (1).png"
import frame2 from "../../../src/assests/images/Frame 562 (2).png"
import p1 from "../../../src/assests/images/Product card (1).png"
import lt from "../../../src/assests/images/Lighthouse.png"
import bt from "../../../src/assests/images/Boat.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import m1 from "../../../src/assests/images/image001 1.png"
import riverlyImg from "../../../src/assests/images/G.png"; 
import img1 from "../../../src/assests/images/Frame1.png";
import img2 from "../../../src/assests/images/Frame2.png";
import img3 from "../../../src/assests/images/Frame3.png";
import img4 from "../../../src/assests/images/Frame4.png";

import img5 from "../../../src/assests/images/Frame123.png";
import user from "../../../src/assests/images/image111.png";
import boat1 from "../../../src/assests/images/Productimage.png";
import blogImg from "../../../src/assests/images/image2.png"; 
import authorImg from "../../../src/assests/images/image111.png"; 

const HomePage = () => {
   const [activeAccordion, setActiveAccordion] = useState("collapseOne");
  const sectionRefs = {
    collapseOne: useRef(null),
    collapseTwo: useRef(null),
    collapseThree: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const firstTop = sectionRefs.collapseOne.current?.getBoundingClientRect().top;
      const secondTop = sectionRefs.collapseTwo.current?.getBoundingClientRect().top;
      const thirdTop = sectionRefs.collapseThree.current?.getBoundingClientRect().top;

      if (firstTop < window.innerHeight / 1 && scrollY > 400) {
        setActiveAccordion("collapseTwo");
      }
        if (secondTop < window.innerHeight / 1 && scrollY > 400) {
        setActiveAccordion("collapseTwo");
      }
      if (thirdTop < window.innerHeight / 1 && scrollY > 800) {
        setActiveAccordion("collapseThree");
      }
      if (scrollY < 300) {
        setActiveAccordion("collapseOne");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


   const offers = [
    {
      img: frame2,
      title: "Last Minute -30% sur tout mai",
      desc: "Embarquez pour une aventure fluviale en mai. -30% sur tous les séjours de mai.",
      color: "text-dark",
      btn: "#1D6C54",
    },
    {
      img: frame2,
      title: "Last Minute -30% sur tout mai",
      desc: "Embarquez pour une aventure fluviale en mai. -30% sur tous les séjours de mai.",
      color: "text-dark",
      btn: "#1D6C54",
    },
    {
      img: frame2,
      title: "Last Minute -30% sur tout mai",
      desc: "Embarquez pour une aventure fluviale en mai. -30% sur tous les séjours de mai.",
      color: "text-dark",
      btn: "#1D6C54",
    },
  ];


  const destinations = [
  { img: p1 },
  { img: p1 },
  { img: p1 },
  { img: p1 },
  { img: p1 },
  { img: p1 },
];
  const [showMore, setShowMore] = useState(false);

  const visibleDestinations = showMore ? destinations : destinations.slice(0, 6);


    const categories = ["France", "Allemagne", "Pays-Bas", "Italie", "Irlande", "Portugal", "Hongrie"];
const cruises = [
    {
      country: "France",
      title: "Canal du Midi",
      desc: "Une région historique, un savoir-faire unique et une expérience inoubliable.",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    },
    {
      country: "France",
      title: "Bourgogne et environs",
      desc: "Une région historique, un savoir-faire unique et une expérience inoubliable.",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      country: "France",
      title: "Alsace",
      desc: "Une région historique, un savoir-faire unique et une expérience inoubliable.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      country: "France",
      title: "Bretagne",
      desc: "Une région historique, un savoir-faire unique et une expérience inoubliable.",
      img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80",
    },
    {
      country: "France",
      title: "Charente",
      desc: "Une région historique, un savoir-faire unique et une expérience inoubliable.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
  ];


  const ideas = [
  {
    title: "Oenologie & Gastronomie",
    desc: "Direction la gastronomie et les cépages dans ces escapades gourmandes et romantiques.",
    icon: "🍷",
    img: img1,
  },
  {
    title: "Baignade",
    desc: "Détente et fraîcheur : découvrez des croisières parfaites pour la baignade en pleine nature.",
    icon: "🏊‍♂️",
    img: img2,
  },
  {
    title: "100% Nature",
    desc: "Direction la nature et les paysages verdoyants pour une pause bien-être.",
    icon: "🌿",
    img: img3,
  },
  {
    title: "Patrimoine",
    desc: "Explorez les trésors architecturaux et culturels de nos régions françaises.",
    icon: "🏰",
    img: img4,
  },
];


const cruises1 = [
  {
    country: "France",
    region: "Alsace",
    title: "Croisière sur le canal de la Marne au Rhône",
    depart: "Saverne",
    arrivee: "Saverne",
    duree: "1 semaine",
    type: "Aller - retour",
    price: "À partir de 670€",
    img: img5,
  },
  {
    country: "France",
    region: "Alsace",
    title: "Croisière sur le canal de la Marne au Rhône",
    depart: "Saint-Léger-sur-Dheune",
    arrivee: "Saint-Léger-sur-Dheune",
    duree: "1 semaine",
    type: "Aller",
    price: "À partir de 670€",
    img: img5,
  },
  {
    country: "France",
    region: "Alsace",
    title: "Croisière sur le canal de la Marne au Rhône",
    depart: "Saverne",
    arrivee: "Saverne",
    duree: "1 semaine",
    type: "Aller - retour",
    price: "À partir de 670€",
    img: img5,
  },
];

const reviews = [
  {
    title: "Tout est bien conçu et organisé",
    text: "La péniche est maniable. L’intérieur est propre et bien conçu. Il ne manque rien en matière de matériel de cuisine.",
    location: "Départ depuis Glénac",
    name: "Josette",
    rating: "5/5",
    img: user,
  },
 {
    title: "Tout est bien conçu et organisé",
    text: "La péniche est maniable. L’intérieur est propre et bien conçu. Il ne manque rien en matière de matériel de cuisine.",
    location: "Départ depuis Glénac",
    name: "Josette",
    rating: "5/5",
    img: user,
  },
 {
    title: "Tout est bien conçu et organisé",
    text: "La péniche est maniable. L’intérieur est propre et bien conçu. Il ne manque rien en matière de matériel de cuisine.",
    location: "Départ depuis Glénac",
    name: "Josette",
    rating: "5/5",
    img: user,
  },
  {
    title: "Tout est bien conçu et organisé",
    text: "La péniche est maniable. L’intérieur est propre et bien conçu. Il ne manque rien en matière de matériel de cuisine.",
    location: "Départ depuis Glénac",
    name: "Josette",
    rating: "5/5",
    img: user,
  },
];

const categories1 = [
  "Classic",
  "Comfort",
  "Premium",
  "Premium +",
  "Pénichettes",
  "Cruisers",
];


const boats = [
  {
    label: "COMFORT",
    title: "Pénichette Comfort 4/6 pers.",
    cabins: 4,
    baths: 3,
    ac: true,
    price: "À partir de 990€",
    img: boat1,
  },
  {
    label: "PREMIUM +",
    title: "Cruiser Premium + 6/8 pers.",
    cabins: 4,
    baths: 3,
    ac: true,
    price: "À partir de 990€",
    img: boat1,
  },
  {
    label: "PREMIUM +",
    title: "Cruiser Premium + 6/8 pers.",
    cabins: 4,
    baths: 3,
    ac: true,
    price: "À partir de 990€",
    img: boat1,
  },
];
  const [activeCategory, setActiveCategory] = useState("Classic");

  const blogs = [
    {
      title: "Les meilleures croisières fluviales à découvrir en 2025",
      author: "Raphaëlle",
      date: "12/05/25",
      img: blogImg,
    },
    {
      title: "Les meilleures croisières fluviales à découvrir en 2025",
      author: "Raphaëlle",
      date: "12/05/25",
      img: blogImg,
    },
    {
      title: "Les meilleures croisières fluviales à découvrir en 2025",
      author: "Raphaëlle",
      date: "12/05/25",
      img: blogImg,
    },
  ];

const faqData = [
  {
    id: "faq1",
    q: "Combien coûte la location de bateau ?",
    a:
      "Les prix varient selon la durée, la saison et le type de bateau. La location commence à environ 1120 € pour une semaine en basse saison. Pour un tarif précis, consultez le site Riverly ou contactez notre service clientèle."
  },
  {
    id: "faq2",
    q: "Comment louer un bateau avec Riverly ?",
    a:
      "Rien de plus simple ! Sélectionnez votre bateau, choisissez vos dates et réservez directement en ligne."
  },
  {
    id: "faq3",
    q: "Est-il nécessaire d’avoir un permis pour louer un bateau ?",
    a:
      "Non, la plupart de nos bateaux se pilotent sans permis. Une initiation est fournie avant le départ."
  },
  {
    id: "faq4",
    q: "Quels sont les équipements inclus avec la location de mon bateau ?",
    a:
      "Tous nos bateaux disposent d’une cuisine équipée, de linge de lit, de serviettes et d’un espace extérieur."
  }
];


  const [openId, setOpenId] = useState("faq1"); 

  const toggle = (id) => {
    setOpenId(prev => (prev === id ? null : id)); 
  }
  return (
    <div>

  <div className="top-banner text-center py-2">
        <img src={vector} alt="heart" width="18" className="me-2" />
        Coup de coeur La route des Vins de Bourgogne
        <img src={arrow} alt="arrow" className="ms-2" />
      </div>

      {/* 🌊 Header */}
      <header className="homepage">
        <nav className="navbar navbar-expand-lg px-4 py-3 position-absolute w-100 top-0 z-3">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <img src={logo} alt="logo" style={{ width: "130px" }} />

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav align-items-center">
                <li className="nav-item mx-2">
                  <a className="nav-link text-white" href="/">Destinations</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link text-white" href="/">Idées séjours</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link text-white" href="/">Nos bateaux</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link text-white" href="/">L’expérience Riverly</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link bons-plan-link d-flex align-items-center gap-1" href="/">
                    Bons plans <img src={loyalty} alt="loyalty" width="16" />
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <button className="btn btn-success">Devis</button>
                </li>
                <li className="nav-item mx-2">
                  <button className="btn btn-success">Réservation rapide</button>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link call" href="/">+33 35 77 77 77</a>
                </li>
              </ul>
            </div>

            <div className="text-white ms-3 small">FR — € ▾</div>
          </div>
        </nav>

        <img src={bg} alt="river" className="hero-bg" />
        <div className="overlay"></div>

        <div className="hero-text">
          <h1 className="fw-bold display-5">Vivez la croisière fluviale, autrement.</h1>
          <p className="lead mt-3">
            Partez sans permis à la découverte des rivières et canaux de France et d’Europe.
            Naviguez à votre rythme, partagez des moments précieux en famille ou entre amis,
            reconnectez-vous à la nature et redécouvrez ce qui vous lie.
          </p>

          <div className="trust-box bg-white text-dark px-3 py-2 rounded shadow d-inline-flex align-items-center mt-4">
            <div>
              <p className="mb-0 text-muted small">Basé sur 2130 avis</p>
              <div className="d-flex align-items-center">
                <img src={Trustpilot} alt="Trustpilot" width="100" className="me-2" />
                <img src={star} alt="stars" width="90" />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <a href="#1" className="text-white fw-semibold text-decoration-none border-bottom border-white pb-1">
              Plonger dans l’aventure →
            </a>
          </div>
        </div>
      </header>

      {/* 🔍 Search Section */}
      <section className="search-section shadow-lg bg-white rounded mx-auto position-relative">
        <ul className="nav nav-tabs mb-3 border-0">
          <li className="nav-item">
            <button className="nav-link active fw-semibold">
              <img src={lt} alt="lt" /> Recherche par Itinéraire
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link active1 fw-semibold">
              <img src={bt} alt="bt" /> Recherche par Bateau
            </button>
          </li>
        </ul>

        <form className="row g-3 align-items-end">
          <div className="col-md-2">
            <label className="form-label fw-semibold">Destination</label>
            <select className="form-select border-0 border-bottom rounded-0 shadow-none">
              <option>Bourgogne et environs</option>
              <option>Canal du Midi</option>
              <option>Alsace</option>
            </select>
          </div>

          <div className="col-md-2">
            <label className="form-label fw-semibold">Date de départ</label>
            <input type="date" className="form-control border-0 border-bottom rounded-0 shadow-none" />
          </div>

          <div className="col-md-2">
            <label className="form-label fw-semibold">Durée du séjour</label>
            <select className="form-select border-0 border-bottom rounded-0 shadow-none">
              <option>Une semaine</option>
              <option>3 jours</option>
              <option>10 jours</option>
            </select>
          </div>

          <div className="col-md-2">
            <label className="form-label fw-semibold">Équipage</label>
            <select className="form-select border-0 border-bottom rounded-0 shadow-none">
              <option>2 adultes</option>
              <option>4 adultes</option>
              <option>Famille</option>
            </select>
          </div>

          <div className="col-md-3 d-flex align-items-end justify-content-end">
            <button type="submit" className="btn btn-success px-4 py-2 fw-semibold shadow-sm">
              Lancer ma recherche →
            </button>
          </div>
        </form>
      </section>

      {/* 🚤 Boat Section */}
      <section className="boat-section">
        <div className="container py-1 my-3">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 position-relative">
              <h2 className="fw-bold text-dark lh-sm">
                Location de bateau sans permis,{" "}
                <span className="text-success">avec Riverly.</span>
              </h2>
              <p className="mt-3 text-secondary fs-5">
                Découvrez la richesse culturelle des territoires au côté de ceux qui
                comptent. Riverly, c’est bien plus qu’une croisière, c’est une
                expérience.
              </p>
            </div>

             <div className="col-md-6">
      <div className="accordion shadow-sm rounded-4 border-0" id="riverlyAccordion">
        {/* Accordion 1 */}
        <div className="accordion-item border-0 mb-2 rounded-3 overflow-hidden">
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button fw-bold ${
                activeAccordion === "collapseOne" ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => setActiveAccordion("collapseOne")}
            >
              <div className="icon-box me-3">
                <i className="bi bi-water"></i>
              </div>
              Vivez l’expérience authentique du tourisme fluvial
            </button>
          </h2>
          <div
            id="collapseOne"
            ref={sectionRefs.collapseOne}
            className={`accordion-collapse collapse ${
              activeAccordion === "collapseOne" ? "show" : ""
            }`}
          >
            <div className="accordion-body">
              Voyager avec Riverly, c’est partager une expérience touristique authentique.
              Les maîtres mots sont la proximité, la découverte et l’autonomie.
            </div>
          </div>
        </div>

        {/* Accordion 2 */}
        <div className="accordion-item border-0 mb-2 rounded-3 overflow-hidden">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button fw-bold ${
                activeAccordion === "collapseTwo" ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => setActiveAccordion("collapseTwo")}
            >
              <div className="icon-box me-3">
                <i className="bi bi-sailboat"></i>
              </div>
              Des vacances originales et personnalisées avec Riverly
            </button>
          </h2>
          <div
            id="collapseTwo"
            ref={sectionRefs.collapseTwo}
            className={`accordion-collapse collapse ${
              activeAccordion === "collapseTwo" ? "show" : ""
            }`}
          >
            <div className="accordion-body">
              Riverly vous permet de personnaliser votre croisière selon vos envies :
              itinéraires, durée, escales et rythme de navigation.
            </div>
          </div>
        </div>

        {/* Accordion 3 */}
        <div className="accordion-item border-0 rounded-3 overflow-hidden">
          <h2 className="accordion-header" id="headingThree">
            <button
              className={`accordion-button fw-bold ${
                activeAccordion === "collapseThree" ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => setActiveAccordion("collapseThree")}
            >
              <div className="icon-box me-3">
                <i className="bi bi-heart"></i>
              </div>
              Des croisières fluviales inoubliables vous attendent
            </button>
          </h2>
          <div
            id="collapseThree"
            ref={sectionRefs.collapseThree}
            className={`accordion-collapse collapse ${
              activeAccordion === "collapseThree" ? "show" : ""
            }`}
          >
            <div className="accordion-body">
              Profitez d’un confort optimal à bord et laissez-vous porter par la beauté
              des canaux et rivières d’Europe.
            </div>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
      </section>


<section className="offers-section container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <h2 className="fw-bold text-dark mb-3 mb-md-0">
          Les <span className="text-danger">offres</span> du moment
        </h2>
        <button className="btn btn-outline-danger rounded-pill fw-semibold px-4">
          Toutes les offres spéciales →
        </button>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={40}
        slidesPerView={1.1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 2.5 },
        }}
        className="offers-swiper"
      >
        {offers.map((offer, index) => (
          <SwiperSlide key={index}>
            <div className="offer-card shadow-sm bg-white rounded-4 overflow-hidden d-flex flex-column flex-md-row align-items-stretch">
              <div className="offer-img-container">
                <img src={offer.img} alt={offer.title} className="offer-img" />
              </div>

              <div className="offer-content d-flex flex-column justify-content-between p-4">
                <div>
                  <h5 className={`fw-bold ${offer.color}`}>{offer.title}</h5>
                  <p className="text-secondary mt-2">{offer.desc}</p>
                </div>
                <button className={`${offer.btn} rounded-pill px-4 fw-semibold mt-3`}>
                  J’en profite →
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  <section className="destinations-section container py-5">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="fw-bold text-dark mb-2">
          Nos destinations <span className="text-success">de location de bateau</span>
        </h2>
        <a href="/" className="text-success fw-semibold link-hover">
          Toutes nos destinations →
        </a>
      </div>

      <div className="row align-items-start">
        {/* Left: destinations grid */}
        <div className="col-lg-7">
          <h6 className="fw-bold text-dark d-flex justify-content-between align-items-center mb-3">
            Croisière fluviale en France
            <span className="text-success small">→</span>
          </h6>

          {/* ✅ Destination cards */}
          <div className="row g-3">
            {visibleDestinations.map((item, index) => (
              <div className="col-6" key={index}>
                <div className="destination-card shadow-sm border-0 position-relative overflow-hidden rounded-4">
                  <img src={item.img} alt={item.name} className="destination-img" />
                  <div className="destination-overlay d-flex flex-column justify-content-end p-3">
                    <h6 className="fw-semibold text-white mb-0">{item.name} </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Show More / Less Button */}
          <div className="text-center mt-4">
            <button
              className="btn btn-link text-secondary fw-semibold text-decoration-none"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Afficher moins ↑" : "Afficher plus ↓"}
            </button>
          </div>
        </div>

        {/* Right: Map */}
        <div className="col-lg-5 mt-4 mt-lg-0 text-center">
          <img
            src={m1}
            alt="Carte des destinations"
            className="img-fluid rounded-4 shadow-sm destination-map"
          />
        </div>
      </div>
    </section>






 <section className="cruises-section py-5">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-white">Nos croisières fluviales</h2>
        </div>

        {/* Categories */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
          {categories.map((country, index) => (
            <button
              key={index}
              className={`btn btn-light rounded-pill px-3 py-1 ${
                index === 0 ? "active" : ""
              }`}
            >
              {country}
            </button>
          ))}
          <a
            href="/"
            className="text-white fw-semibold ms-3 text-decoration"
          >
            Toutes nos croisières fluviales →
          </a>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1.1}
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="cruise-swiper"
        >
          {cruises.map((cruise, index) => (
            <SwiperSlide key={index}>
              <div className="card cruise-card h-100 border-0 shadow-sm overflow-hidden rounded-4">
                <img src={cruise.img} className="card-img-top" alt={cruise.title} />
                <div className="card-body bg-white">
                  <small className="text-muted d-block mb-1">
                    🇫🇷 {cruise.country}
                  </small>
                  <h5 className="card-title fw-bold text-dark">{cruise.title}</h5>
                  <p className="text-secondary small mb-3">{cruise.desc}</p>
                  <a
                    href="/"
                    className="text-success fw-semibold text-decoration-none"
                  >
                    Découvrir la région →
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>



  <section className="about-riverly-section py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Left side text content */}
          <div className="col-lg-7">
            <h2 className="fw-bold mb-4 text-dark">
              Riverly, <span className="text-success">ce qui nous lie</span>
            </h2>

            {/* Dark blue card */}
            <div className="p-4 rounded-3 mb-4 #0C293D text-white shadow-sm about-card-dark">
              <p className="mb-0">
                Voyager avec Riverly, c’est partager une expérience touristique
                authentique. Les maîtres mots sont la proximité, la découverte
                et l’autonomie. En louant votre bateau, vous devenez le capitaine
                de votre croisière fluviale ! Choisissez la convivialité du voyage
                en famille, entre amis ou en couple et découvrez des paysages
                authentiques ! Vous découvrirez également les différents terroirs
                par la nature, le patrimoine, les vignobles ou encore par la
                population locale.
              </p>
            </div>

            {/* Light beige card */}
            <div className="p-4 rounded-3 bg-#FFFBF6 shadow-sm about-card-light">
              <p className="mb-0 text-secondary">
                Partir en vacances avec Riverly c’est une façon originale
                d’observer une région au fil de l’eau, votre vie à bord sera
                chaleureuse et ludique. En louant des vélos, vous pourrez partir
                à la découverte de merveilles patrimoniales et architecturales.
                Nous vous aidons à établir le parcours en bateau de location qui
                vous ressemble, trouvez la thématique adaptée à vos envies parmi
                la gastronomie et l’œnologie, les escales urbaines et culturelles,
                le patrimoine et l’histoire, grandeur nature et baignade.
              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="rounded-3">
              <img
                src={riverlyImg}
                alt="Famille Riverly"
              />
            </div>
          </div>
        </div>
      </div>
    </section>


 <section className="ideas-section py-5">
      <div className="container">
        {/* Header */}
        <h2 className="text-center fw-bold mb-5">
          Idées de séjour en <span className="text-success">France</span>
        </h2>

        {/* Idea cards */}
        <div className="row g-4">
          {ideas.map((idea, i) => (
            <div className="col-md-6" key={i}>
              <div
                className={`idea-card d-flex flex-column flex-md-row shadow-sm rounded-4 overflow-hidden ${
                  i % 2 !== 0 ? "reverse-layout" : ""
                }`}
              >
                <div
                  className="idea-img"
                  style={{ backgroundImage: `url(${idea.img})` }}
                ></div>

                <div className="idea-content bg-white p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center mb-2">
                      <div className="icon-circle me-2">{idea.icon}</div>
                      <h5 className="fw-bold text-success mb-0">
                        {idea.title}
                      </h5>
                    </div>
                    <p className="text-secondary small mb-3">{idea.desc}</p>
                  </div>
                  <a
                    href="/"
                    className="fw-semibold text-success text-decoration-none discover-link"
                  >
                    Découvrir →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="text-center mt-4">
          <a
            href="/"
            className="btn btn-outline-secondary rounded-pill px-4 fw-semibold all-link"
          >
            Toutes nos thématiques →
          </a>
        </div>
      </div>
    </section>

  <section className="favorite-section py-5">
      <div className="container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
          <h2 className="fw-bold text-dark mb-3 mb-md-0">
            <span className="text-success">Coups de cœur</span> du moment
          </h2>
          <button className="btn btn-riverly fw-semibold rounded-pill">
            Demander un devis gratuit →
          </button>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1.1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="favorite-swiper"
        >
          {cruises1.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="cruise-card border-0 rounded-4 shadow-sm h-100 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="card-img-top rounded-top-4"
                />
                <div className="card-body p-4">
                  <small className="text-muted d-block mb-2">
                    🇫🇷 {item.country} / {item.region}
                  </small>
                  <h5 className="fw-bold text-dark mb-3">{item.title}</h5>

                  <ul className="list-unstyled text-secondary small mb-3">
                    <li className="mb-1">
                      <i className="bi bi-geo-alt me-2 text-success"></i>
                      Départ : {item.depart}
                    </li>
                    <li className="mb-1">
                      <i className="bi bi-flag me-2 text-success"></i>
                      Arrivée : {item.arrivee}
                    </li>
                    <li>
                      <i className="bi bi-calendar me-2 text-success"></i>
                      {item.duree}
                    </li>
                  </ul>

                  <hr />
                  <p className="fw-semibold text-success small mb-3">
                    {item.price}
                  </p>

                  <button className="btn btn-riverly w-100 fw-semibold py-2">
                    Découvrir l’itinéraire →
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

<section className="testimonials-section py-5">
      <div className="container text-center">
        {/* Header */}
        <h2 className="fw-bold text-dark mb-3">Ils ont voyagé avec nous</h2>

        <div className="trustpilot-box mx-auto mb-5 d-inline-flex align-items-center justify-content-center rounded-pill shadow-sm px-3 py-2 bg-white">
          <h4 className="mb-0 text-success fw-bold me-2">4,4</h4>
          <span className="small text-dark">
            Excellent sur <span className="text-success fw-semibold">★ Trustpilot</span>
          </span>
        </div>

        {/* Swiper Reviews */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1.1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 4 },
          }}
          className="testimonials-swiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="review-card shadow-sm rounded-4 bg-white text-start p-4 h-100">
                <h6 className="fw-bold text-dark mb-2">{review.title}</h6>
                <p className="small text-secondary mb-3">{review.text}</p>
                <p className="text-success small fw-semibold mb-4">
                  <i className="bi bi-geo-alt me-2"></i> {review.location}
                </p>

                <div className="review-footer d-flex align-items-center justify-content-between bg-light rounded-3 px-3 py-2">
                  <div className="d-flex align-items-center">
                    <img
                      src={review.img}
                      alt={review.name}
                      className="rounded-circle me-2"
                      width="32"
                      height="32"
                    />
                    <span className="fw-semibold text-success small">
                      {review.name}
                    </span>
                  </div>
                  <span className="fw-semibold text-success small">
                    {review.rating} <i className="bi bi-star-fill"></i>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

    <section className="boats-section py-5">
      <div className="container">
        {/* Header */}
        <h2 className="fw-bold text-white text-center mb-4">
          Découvrez nos bateaux sans permis
        </h2>

        {/* Category Filters */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {categories1.map((cat, i) => (
            <button
              key={i}
              className={`btn category-btn ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
          <a
            href="/"
            className="text-white fw-semibold text-decoration-none ms-3"
          >
            Tous nos bateaux →
          </a>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1.1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="boats-swiper"
        >
          {boats.map((boat, index) => (
            <SwiperSlide key={index}>
              <div className="boat-card rounded-4 overflow-hidden shadow-sm bg-white h-100">
                <div className="position-relative">
                  <img
                    src={boat.img}
                    alt={boat.title}
                    className="w-100 rounded-top-4 boat-img"
                  />
                  <span className="badge-label">{boat.label}</span>
                </div>

                <div className="p-4">
                  <h5 className="fw-bold text-dark mb-3">{boat.title}</h5>

                  <div className="d-flex align-items-center flex-wrap text-secondary small mb-3">
                    <span className="me-3">
                      <i className="bi bi-door-open me-1 text-success"></i>
                      {boat.cabins} cabines
                    </span>
                    <span className="me-3">
                      <i className="bi bi-droplet me-1 text-success"></i>
                      {boat.baths} salles d’eau
                      
                    </span>
                    {boat.ac && (
                      <span>
                        <i className="bi bi-snow me-1 text-success"></i>
                        Climatisation
                      </span>
                    )}
                  </div>

                  <p className="fw-semibold text-success small mb-3">
                    {boat.price}
                  </p>

                  <button className="btn btn-riverly w-100 fw-semibold py-2">
                    Découvrir le bateau →
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
     <section className="blog-section py-5">
      <div className="container text-center">
        {/* Header */}
        <h2 className="fw-bold text-dark mb-1">
          Le <span className="text-success">Blog Riverly</span>
        </h2>
        <a
          href="/"
          className="text-success fw-semibold text-decoration-none mb-4 d-inline-block"
        >
          Tous nos articles →
        </a>

        {/* Blog Cards */}
        <div className="row g-4 mt-3">
          {blogs.map((blog, i) => (
            <div key={i} className="col-md-4">
              <div className="blog-card shadow-sm border-0 rounded-4 h-100">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="blog-img rounded-top-4"
                />
                <div className="p-3 text-start">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center">
                      <img
                        src={authorImg}
                        alt={blog.author}
                        className="rounded-circle me-2"
                        width="28"
                        height="28"
                      />
                      <small className="text-success fw-semibold">
                        par {blog.author}
                      </small>
                    </div>
                    <small className="text-secondary">{blog.date}</small>
                  </div>

                  <h6 className="fw-bold text-dark mb-3">{blog.title}</h6>
                  <a
                    href="/"
                    className="text-success fw-semibold text-decoration-none small"
                  >
                    Lire l’article →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="faq-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Les questions fréquentes</h2>

        <div className="custom-accordion" role="tablist" aria-multiselectable="false">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div className="custom-accordion-item mb-3" key={item.id}>
                <button
                  className={`custom-accordion-button ${isOpen ? "open" : ""}`}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-panel`}
                  onClick={() => toggle(item.id)}
                >
                  <span>{item.q}</span>
                  <span className="chev" aria-hidden>{isOpen ? "−" : "^"}</span>
                </button>

                <div
                  id={`${item.id}-panel`}
                  className={`custom-accordion-panel ${isOpen ? "show" : ""}`}
                  role="region"
                  aria-labelledby={item.id}
                >
                  <div className="custom-accordion-body">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-4">
          <a href="/" className="text-success fw-semibold text-decoration-none">
            Découvrir la FAQ →
          </a>
        </div>
      </div>
    </section>




    </div>
  );
};


export default HomePage;
