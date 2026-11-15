import React, { useEffect, useRef } from "react";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaTools,
  FaCar,
  FaOilCan,
  FaBatteryFull,
  FaCogs,
  FaShower,
  FaCheckCircle,
  FaCalendarAlt,
  FaArrowRight,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaChevronDown,
} from "react-icons/fa";

import { GiTyre, GiAutoRepair } from "react-icons/gi";

import Logo from "../Assets/Logo.png";
import Banner from "../Assets/Banner.png";
import Video from "../Assets/video.mp4";

/* =========================================================
   BUSINESS INFORMATION
========================================================= */

const BUSINESS = {
  name: "Uttam Automobile",
  phone: "+91 9733763874",
  phoneRaw: "9733763874",
  address: "22, Jodhpur Garden",
  city: "Kolkata",
  pincode: "700045",
  country: "India",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=22.5026389,88.3626944",
  whatsapp: "https://wa.me/919733763874",
  hours: "Tuesday - Sunday, 5:00 AM - 11:00 PM",
};

/* =========================================================
   SEO CONFIGURATION
========================================================= */

const SEO_CONFIG = {
  home: {
    title: "Uttam Automobile | Car Repair & Service in Kolkata",
    description:
      "Uttam Automobile is a professional car repair and Maruti repairing job centre in Jodhpur Garden, Kolkata. Get expert car servicing, engine repair, gearbox work, brake repair, battery replacement, oil change, tyre service and car washing.",
  },

  services: {
    title: "Car Repair & Services in Kolkata | Uttam Automobile",
    description:
      "Explore professional car repair and maintenance services at Uttam Automobile in Kolkata, including engine work, gearbox repair, servicing, brake work, battery replacement, engine oil change, tyre service and car wash.",
  },

  about: {
    title: "About Uttam Automobile | Maruti Repairing Centre Kolkata",
    description:
      "Learn about Uttam Automobile, a Maruti repairing job centre at 22, Jodhpur Garden, Kolkata, providing professional car repair, servicing, maintenance and vehicle care.",
  },

  "why-us": {
    title: "Why Choose Uttam Automobile | Best Car Care Kolkata",
    description:
      "Choose Uttam Automobile for reliable car repair, regular servicing, genuine parts, quality workmanship, car washing and customer-focused automobile care in Kolkata.",
  },

  gallery: {
    title: "Uttam Automobile Workshop Gallery | Kolkata",
    description:
      "View the Uttam Automobile workshop gallery and see our professional automobile repair and car servicing environment in Kolkata.",
  },

  contact: {
    title: "Contact Uttam Automobile | Book Car Service in Kolkata",
    description:
      "Contact Uttam Automobile at 22, Jodhpur Garden, Kolkata to book professional car repair, servicing, maintenance, washing or other automobile services.",
  },
};

const SEO_KEYWORDS =
  "Uttam Automobile, car repair Kolkata, car service Kolkata, Maruti repair Kolkata, Maruti repairing job centre Kolkata, automobile service Kolkata, car servicing Kolkata, engine repair Kolkata, gearbox repair Kolkata, brake repair Kolkata, battery replacement Kolkata, engine oil change Kolkata, tyre service Kolkata, car wash Kolkata, Jodhpur Garden car service";

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    title: "Engine Work",
    bengali: "ইঞ্জিনের কাজ",
    icon: <GiAutoRepair />,
  },
  {
    title: "Gearbox Work",
    bengali: "গিয়ার বক্সের কাজ",
    icon: <FaCogs />,
  },
  {
    title: "Servicing",
    bengali: "সার্ভিসিং",
    icon: <FaTools />,
  },
  {
    title: "Brake Work",
    bengali: "ব্রেকের কাজ",
    icon: <FaCar />,
  },
  {
    title: "Battery Check & Replacement",
    bengali: "ব্যাটারি চেক ও পরিবর্তন",
    icon: <FaBatteryFull />,
  },
  {
    title: "Engine Oil Change",
    bengali: "ইঞ্জিন অয়েল পরিবর্তন",
    icon: <FaOilCan />,
  },
  {
    title: "Tyre & Other Works",
    bengali: "টায়ার ও অন্যান্য কাজ",
    icon: <GiTyre />,
  },
  {
    title: "Car Wash",
    bengali: "গাড়ি ধোয়া",
    icon: <FaShower />,
  },
];

/* =========================================================
   FEATURES
========================================================= */

const features = [
  "All Types of Engine Work",
  "Regular & General Servicing",
  "Genuine Parts & Quality Work",
  "Car Washing & Detailing",
];

/* =========================================================
   SEO HELPER FUNCTIONS
========================================================= */

const setMetaTag = (attribute, key, content) => {
  if (!content) return;

  let meta = document.head.querySelector(
    `meta[${attribute}="${key}"]`
  );

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
};

const setCanonical = () => {
  const currentUrl = window.location.href.split("#")[0];

  let canonical = document.head.querySelector(
    'link[rel="canonical"]'
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", currentUrl);
};

const updateSEO = (section = "home") => {
  const seo = SEO_CONFIG[section] || SEO_CONFIG.home;

  /* Browser title */
  document.title = seo.title;

  /* Basic SEO */
  setMetaTag("name", "description", seo.description);
  setMetaTag("name", "keywords", SEO_KEYWORDS);
  setMetaTag(
    "name",
    "robots",
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
  );
  setMetaTag("name", "author", BUSINESS.name);
  setMetaTag("name", "theme-color", "#071525");

  /* Open Graph */
  setMetaTag("property", "og:type", "website");
  setMetaTag("property", "og:title", seo.title);
  setMetaTag("property", "og:description", seo.description);
  setMetaTag("property", "og:site_name", BUSINESS.name);
  setMetaTag(
    "property",
    "og:image",
    new URL(Banner, window.location.origin).href
  );
  setMetaTag(
    "property",
    "og:url",
    window.location.href.split("#")[0]
  );

  /* Twitter */
  setMetaTag("name", "twitter:card", "summary_large_image");
  setMetaTag("name", "twitter:title", seo.title);
  setMetaTag("name", "twitter:description", seo.description);
  setMetaTag(
    "name",
    "twitter:image",
    new URL(Banner, window.location.origin).href
  );

  /* Canonical */
  setCanonical();
};

/* =========================================================
   STRUCTURED DATA
========================================================= */

const createBusinessSchema = () => {
  const existing = document.getElementById(
    "uttam-automobile-schema"
  );

  if (existing) {
    existing.remove();
  }

  const script = document.createElement("script");

  script.id = "uttam-automobile-schema";
  script.type = "application/ld+json";

  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: BUSINESS.name,
    description: SEO_CONFIG.home.description,
    telephone: BUSINESS.phone,
    url: window.location.href.split("#")[0],
    image: new URL(Banner, window.location.origin).href,

    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address,
      addressLocality: BUSINESS.city,
      postalCode: BUSINESS.pincode,
      addressCountry: "IN",
    },

    areaServed: {
      "@type": "City",
      name: "Kolkata",
    },

    serviceType: [
      "Car Repair",
      "Car Servicing",
      "Maruti Repair",
      "Engine Repair",
      "Gearbox Repair",
      "Brake Repair",
      "Battery Replacement",
      "Engine Oil Change",
      "Tyre Service",
      "Car Wash",
    ],

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "05:00",
        closes: "23:00",
      },
    ],
  });

  document.head.appendChild(script);
};

/* =========================================================
   HOME COMPONENT
========================================================= */

function Home() {
  const videoRef = useRef(null);
  const aboutRef = useRef(null);

  /* =======================================================
     DYNAMIC SEO BASED ON ACTIVE SECTION
  ======================================================= */

  useEffect(() => {
    updateSEO("home");
    createBusinessSchema();

    const sectionIds = [
      "home",
      "services",
      "about",
      "why-us",
      "gallery",
      "contact",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          updateSEO(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.15, 0.3, 0.5, 0.7],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =======================================================
     ABOUT VIDEO AUTO PLAY / PAUSE
  ======================================================= */

  useEffect(() => {
    const video = videoRef.current;
    const aboutSection = aboutRef.current;

    if (!video || !aboutSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Browser may block autoplay.
          });
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(aboutSection);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  /* =======================================================
     SMOOTH SCROLL
  ======================================================= */

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    const navbarHeight = 100;

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY;

    const targetPosition =
      sectionTop - navbarHeight;

    window.scrollTo({
      top: Math.max(targetPosition, 0),
      behavior: "smooth",
    });

    /*
      Update title immediately when navigation button is clicked.
      The IntersectionObserver will continue updating it while scrolling.
    */
    updateSEO(id);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="fixed left-0 top-0 z-50 w-full bg-[#071525]/95 shadow-lg backdrop-blur-md">

        <div className="mx-auto max-w-[1400px] px-3 sm:px-4">

          {/* TOP NAV */}

          <div className="flex min-h-[68px] items-center justify-between gap-3 lg:min-h-[82px]">

            {/* LOGO */}

            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="flex-shrink-0"
              aria-label="Go to Uttam Automobile home"
            >
              <img
                src={Logo}
                alt="Uttam Automobile car repair and service Kolkata"
                className="h-auto w-[145px] object-contain sm:w-[175px] lg:w-[210px]"
              />
            </button>

            {/* DESKTOP CONTACT INFORMATION */}

            <div className="hidden items-center gap-4 xl:flex">

              {/* LOCATION */}

              <a
                href={BUSINESS.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Uttam Automobile location on Google Maps"
                className="group flex items-center gap-2 rounded-lg border border-red-500/40 bg-red-600 px-4 py-2.5 text-white shadow-md transition duration-300 hover:bg-red-700 hover:shadow-xl"
              >
                <FaMapMarkerAlt className="text-lg transition group-hover:scale-110" />

                <span className="whitespace-nowrap text-sm font-bold">
                  Location on Map
                </span>
              </a>

              {/* ADDRESS */}

              <div className="flex items-center gap-3 text-white">
                <FaMapMarkerAlt className="text-2xl text-red-500" />

                <div>
                  <p className="text-sm font-semibold">
                    {BUSINESS.address},
                  </p>

                  <p className="text-xs text-slate-300">
                    {BUSINESS.city} - {BUSINESS.pincode}
                  </p>
                </div>
              </div>

              {/* PHONE */}

              <div className="flex items-center gap-3 text-white">
                <FaPhoneAlt className="text-xl text-red-500" />

                <div>
                  <p className="text-xs text-slate-300">
                    Call Us
                  </p>

                  <a
                    href={`tel:${BUSINESS.phoneRaw}`}
                    className="font-bold transition hover:text-yellow-400"
                  >
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>

              {/* HOURS */}

              <div className="flex items-center gap-3 text-white">
                <FaClock className="text-xl text-red-500" />

                <div>
                  <p className="text-xs text-slate-300">
                    Opening Hours
                  </p>

                  <p className="font-semibold">
                    Tue - Sun
                  </p>

                  <p className="text-xs text-slate-300">
                    5:00 AM - 11:00 PM
                  </p>
                </div>
              </div>

              {/* BOOK SERVICE */}

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 font-bold text-white shadow-lg transition hover:bg-red-700"
              >
                <FaCalendarAlt />
                Book Service
              </button>

            </div>

            {/* MOBILE CONTACT */}

            <div className="flex items-center gap-2 xl:hidden">

              <a
                href={BUSINESS.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Uttam Automobile location on map"
                title="Location on Map"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-white shadow-md transition hover:bg-red-700 sm:h-11 sm:w-auto sm:gap-2 sm:px-4"
              >
                <FaMapMarkerAlt />

                <span className="hidden sm:inline">
                  Location
                </span>
              </a>

              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                aria-label="Call Uttam Automobile"
                className="flex h-10 items-center gap-2 rounded-lg bg-red-600 px-3 text-sm font-bold text-white transition hover:bg-red-700 sm:h-11 sm:px-4 sm:text-base"
              >
                <FaPhoneAlt />

                <span className="hidden sm:inline">
                  Call Now
                </span>
              </a>

            </div>
          </div>

          {/* DESKTOP NAVIGATION */}

          <nav
            aria-label="Main navigation"
            className="hidden items-center justify-center gap-1 border-t border-white/10 py-1 md:flex"
          >
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="rounded-md bg-red-600 px-7 py-2 font-semibold text-white transition hover:bg-red-700"
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="rounded-md px-6 py-2.5 font-medium text-white transition hover:bg-white/10 hover:text-yellow-400"
            >
              About Us
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("services")}
              className="flex items-center gap-2 rounded-md px-6 py-2.5 font-medium text-white transition hover:bg-white/10 hover:text-yellow-400"
            >
              Our Services
              <FaChevronDown className="text-xs" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("why-us")}
              className="rounded-md px-6 py-2.5 font-medium text-white transition hover:bg-white/10 hover:text-yellow-400"
            >
              Why Choose Us
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("gallery")}
              className="rounded-md px-6 py-2.5 font-medium text-white transition hover:bg-white/10 hover:text-yellow-400"
            >
              Gallery
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="rounded-md px-6 py-2.5 font-medium text-white transition hover:bg-white/10 hover:text-yellow-400"
            >
              Contact Us
            </button>
          </nav>

          {/* MOBILE NAVIGATION */}

          <nav
            aria-label="Mobile navigation"
            className="flex gap-1 overflow-x-auto border-t border-white/10 py-2 md:hidden"
          >
            {[
              ["Home", "home"],
              ["About", "about"],
              ["Services", "services"],
              ["Why Us", "why-us"],
              ["Gallery", "gallery"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <button
                type="button"
                key={id}
                onClick={() => scrollToSection(id)}
                className="whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
              >
                {label}
              </button>
            ))}
          </nav>

        </div>
      </header>

      {/* =====================================================
          HERO / HOME
      ===================================================== */}

      <section
        id="home"
        aria-labelledby="home-title"
        className="relative flex min-h-[620px] scroll-mt-[130px] items-center overflow-hidden pt-[125px] sm:min-h-[680px]"
      >

        <img
          src={Banner}
          alt="Professional car repair and automobile service at Uttam Automobile Kolkata"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#061321]/95 via-[#061321]/75 to-[#061321]/20" />

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-red-900/10" />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 lg:px-10">

          <div className="max-w-[650px]">

            <p className="mb-3 text-xl font-bold italic text-white sm:text-2xl md:text-3xl">
              Professional
            </p>

            <h1
              id="home-title"
              className="ads-title whitespace-nowrap text-4xl font-black italic leading-[1] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {"Car Repair & Service".split("").map(
                (letter, index) => (
                  <span
                    key={index}
                    className="ads-letter"
                    style={{
                      animationDelay: `${index * 0.06}s`,
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                )
              )}
            </h1>

            <h2 className="mt-3 text-2xl font-bold italic text-white sm:text-3xl md:text-5xl">
              for Your Vehicle
            </h2>

            <div className="my-6 h-1 w-24 bg-red-600 sm:w-32" />

            <h3 className="text-xl font-extrabold text-white sm:text-2xl md:text-3xl">
              The Maruti Repairing Job Centre
            </h3>

            <p className="mt-4 max-w-[560px] text-base leading-7 text-slate-200 sm:text-lg">
              Complete car care – from engine repair to car
              washing, all under one roof.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="flex items-center gap-3 rounded-lg bg-red-600 px-5 py-3 text-base font-bold text-white shadow-xl transition hover:scale-105 hover:bg-red-700 sm:px-7 sm:py-4 sm:text-lg"
              >
                <FaTools />
                Book a Service
              </button>

              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center gap-3 rounded-lg border-2 border-white bg-black/20 px-5 py-3 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-slate-900 sm:px-7 sm:py-4 sm:text-lg"
              >
                <FaPhoneAlt />
                Call Now
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="services"
        aria-labelledby="services-title"
        className="scroll-mt-[130px] bg-slate-50 px-4 py-16 sm:py-20"
      >

        <div className="mx-auto max-w-[1400px]">

          <div className="mb-10 text-center sm:mb-12">

            <div className="mb-3 flex items-center justify-center gap-3">

              <span className="h-1 w-8 bg-red-600 sm:w-10" />

              <span className="font-bold text-red-600">
                Our Services
              </span>

              <span className="h-1 w-8 bg-red-600 sm:w-10" />

            </div>

            <h2
              id="services-title"
              className="text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl"
            >
              Complete Car Care Services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
              Professional repair, maintenance and car care
              services for your vehicle.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-8">

            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-red-300 hover:shadow-xl sm:p-5"
              >

                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-3xl text-red-600 transition group-hover:bg-red-600 group-hover:text-white sm:mb-5 sm:h-20 sm:w-20 sm:text-4xl">
                  {service.icon}
                </div>

                <h3 className="min-h-[48px] text-sm font-extrabold text-slate-900 sm:text-base">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs font-semibold text-slate-600 sm:text-sm">
                  {service.bengali}
                </p>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT US
      ===================================================== */}

      <section
        id="about"
        ref={aboutRef}
        aria-labelledby="about-title"
        className="scroll-mt-[130px] bg-white px-4 py-16 sm:py-20"
      >

        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-2 lg:gap-12">

          {/* VIDEO */}

          <div className="relative">

            <div className="overflow-hidden rounded-2xl bg-black shadow-2xl sm:rounded-3xl">

              <video
                ref={videoRef}
                src={Video}
                playsInline
                preload="metadata"
                loop
                
                
                className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[450px]"
              />

            </div>

            <div className="absolute -bottom-5 -right-3 hidden rounded-2xl bg-red-600 p-5 text-white shadow-xl sm:block sm:-right-5 sm:p-6">

              <p className="text-3xl font-black sm:text-4xl">
                100%
              </p>

              <p className="font-semibold">
                Quality Service
              </p>

            </div>
          </div>

          {/* ABOUT TEXT */}

          <div>

            <div className="mb-3 flex items-center gap-3">

              <span className="h-1 w-10 bg-red-600" />

              <span className="font-bold text-red-600">
                About Us
              </span>

            </div>

            <h2
              id="about-title"
              className="text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl"
            >
              Welcome to{" "}
              <span className="text-red-600">
                Uttam Automobile
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Uttam Automobile is a Maruti repairing job centre
              located at 22, Jodhpur Garden, Kolkata. We provide
              professional car repair, servicing and complete
              maintenance solutions.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Our services include engine work, gearbox work,
              servicing, brake work, battery checking and
              replacement, engine oil change, tyre work and car
              washing.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="flex-shrink-0 text-2xl text-red-600" />

                <span className="font-bold">
                  Experienced
                  <br />
                  Technicians
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="flex-shrink-0 text-2xl text-red-600" />

                <span className="font-bold">
                  Quality
                  <br />
                  Service
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="flex-shrink-0 text-2xl text-red-600" />

                <span className="font-bold">
                  Customer
                  <br />
                  Satisfaction
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section
        id="why-us"
        aria-labelledby="why-us-title"
        className="relative scroll-mt-[130px] overflow-hidden bg-[#071525] px-4 py-16 sm:py-20"
      >

        <div className="mx-auto max-w-[1400px]">

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">

            <div>

              <div className="mb-4 flex items-center gap-3">

                <span className="h-1 w-10 bg-red-600" />

                <span className="font-bold text-red-500">
                  Why Choose Us
                </span>

              </div>

              <h2
                id="why-us-title"
                className="text-3xl font-black text-white sm:text-4xl md:text-5xl"
              >
                Your Car Deserves{" "}
                <span className="text-yellow-400">
                  The Best Care
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                We provide dependable automobile repair and
                maintenance services with a focus on quality,
                transparency and customer satisfaction.
              </p>

              <div className="mt-8 space-y-4">

                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-4"
                  >

                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-red-600">
                      <FaCheckCircle className="text-white" />
                    </div>

                    <span className="text-base font-semibold text-white sm:text-lg">
                      {feature}
                    </span>

                  </div>
                ))}

              </div>
            </div>

            <div className="relative">

              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl sm:rounded-3xl">

                <img
                  src={Banner}
                  alt="Professional car repair service at Uttam Automobile Kolkata"
                  loading="lazy"
                  className="h-[300px] w-full object-cover sm:h-[400px]"
                />

              </div>

              <div className="absolute -bottom-5 -left-3 rounded-2xl bg-yellow-400 px-5 py-4 shadow-xl sm:-left-5 sm:px-6 sm:py-5">

                <p className="text-xl font-black text-slate-900 sm:text-2xl">
                  Professional
                </p>

                <p className="font-bold text-slate-800">
                  Car Care
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section
        id="gallery"
        aria-labelledby="gallery-title"
        className="scroll-mt-[120px] bg-slate-50 px-4 py-16 sm:py-20"
      >

        <div className="mx-auto max-w-[1400px]">

          <div className="mb-10 text-center sm:mb-12">

            <div className="mb-3 flex items-center justify-center gap-3">

              <span className="h-1 w-8 bg-red-600 sm:w-10" />

              <span className="font-bold text-red-600">
                Gallery
              </span>

              <span className="h-1 w-8 bg-red-600 sm:w-10" />

            </div>

            <h2
              id="gallery-title"
              className="text-3xl font-black sm:text-4xl"
            >
              Our Workshop
            </h2>

          </div>

          <div className="grid gap-5 md:grid-cols-3">

            <div className="group overflow-hidden rounded-2xl">
              <img
                src={Banner}
                alt="Uttam Automobile workshop Kolkata"
                loading="lazy"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-80"
              />
            </div>

            <div className="group overflow-hidden rounded-2xl">
              <img
                src={Banner}
                alt="Car repair service at Uttam Automobile"
                loading="lazy"
                className="h-72 w-full object-cover object-right transition duration-500 group-hover:scale-110 sm:h-80"
              />
            </div>

            <div className="group overflow-hidden rounded-2xl">
              <img
                src={Banner}
                alt="Professional automobile service Kolkata"
                loading="lazy"
                className="h-72 w-full object-cover object-left transition duration-500 group-hover:scale-110 sm:h-80"
              />
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT / BOOK SERVICE
      ===================================================== */}

      <section
        id="contact"
        aria-labelledby="contact-title"
        className="min-h-[360px] scroll-mt-[130px] overflow-hidden bg-gradient-to-r from-[#061321] to-[#0b2139] px-4 py-16 sm:py-20"
      >

        <div className="mx-auto flex min-h-[280px] max-w-[1400px] items-center">

          <div className="grid w-full items-center gap-10 md:grid-cols-[1fr_auto]">

            <div>

              <div className="flex items-center gap-4">

                <FaCalendarAlt className="text-4xl text-yellow-400 sm:text-5xl" />

                <div>

                  <p className="text-lg font-bold text-white sm:text-xl">
                    Book Your
                  </p>

                  <h2
                    id="contact-title"
                    className="text-3xl font-black text-yellow-400 sm:text-4xl"
                  >
                    Service Today
                  </h2>

                </div>
              </div>

              <p className="mt-5 max-w-xl text-base text-slate-300 sm:text-lg">
                Keep your car in the best condition with
                Uttam Automobile.
              </p>

              <div className="mt-6 flex items-start gap-3 text-slate-300">

                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-xl text-red-500" />

                <address className="not-italic">
                  {BUSINESS.address},
                  <br />
                  {BUSINESS.city} - {BUSINESS.pincode}
                </address>

              </div>

              <a
                href={BUSINESS.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-red-500/40 bg-red-600 px-5 py-3 font-bold text-white shadow-lg transition hover:bg-red-700"
              >
                <FaMapMarkerAlt />
                Location on Map
              </a>

            </div>

            <div className="flex flex-wrap gap-4">

              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center gap-3 rounded-xl bg-red-600 px-6 py-4 text-base font-bold text-white shadow-xl transition hover:bg-red-700 sm:px-7 sm:text-lg"
              >
                <FaPhoneAlt />
                Call Now
                <FaArrowRight />
              </a>

              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Uttam Automobile on WhatsApp"
                className="flex items-center gap-3 rounded-xl bg-green-600 px-6 py-4 text-base font-bold text-white shadow-xl transition hover:bg-green-700 sm:px-7 sm:text-lg"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#040c16] px-4 py-12 text-white sm:py-14">

        <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-3">

          {/* ABOUT */}

          <div>

            <img
              src={Logo}
              alt="Uttam Automobile logo"
              loading="lazy"
              className="mb-5 w-[200px] sm:w-[230px]"
            />

            <p className="max-w-md leading-7 text-slate-400">
              The Maruti Repairing Job Centre providing
              professional car repair, servicing, maintenance
              and washing services in Kolkata.
            </p>

            <div className="mt-6 flex gap-3">

              <a
                href="#"
                aria-label="Uttam Automobile Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-red-600"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Uttam Automobile Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-red-600"
              >
                <FaInstagram />
              </a>

              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Uttam Automobile WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-green-600"
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

          {/* SERVICES */}

          <div>

            <h3 className="mb-5 text-xl font-bold">
              Our Services
            </h3>

            <ul className="space-y-3 text-slate-400">

              {services.slice(0, 6).map((service) => (
                <li
                  key={service.title}
                  className="flex items-center gap-2"
                >
                  <FaArrowRight className="text-xs text-red-500" />
                  {service.title}
                </li>
              ))}

            </ul>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="mb-5 text-xl font-bold">
              Contact Us
            </h3>

            <div className="space-y-5">

              {/* ADDRESS */}

              <div className="flex gap-4">

                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-xl text-red-500" />

                <div>

                  <address className="not-italic text-slate-400">
                    {BUSINESS.address},
                    <br />
                    {BUSINESS.city} - {BUSINESS.pincode}
                  </address>

                  <a
                    href={BUSINESS.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition hover:text-red-300"
                  >
                    <FaMapMarkerAlt />
                    Location on Map
                  </a>

                </div>
              </div>

              {/* PHONE */}

              <div className="flex gap-4">

                <FaPhoneAlt className="flex-shrink-0 text-xl text-red-500" />

                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="text-slate-400 transition hover:text-white"
                >
                  {BUSINESS.phone}
                </a>

              </div>

              {/* HOURS */}

              <div className="flex gap-4">

                <FaClock className="flex-shrink-0 text-xl text-red-500" />

                <p className="text-slate-400">
                  Tuesday - Sunday
                  <br />
                  5:00 AM - 11:00 PM
                </p>

              </div>

            </div>
          </div>

        </div>

        {/* COPYRIGHT */}

        <div className="mx-auto mt-10 max-w-[1400px] border-t border-white/10 pt-7 text-center text-sm text-slate-500 sm:mt-12">

          © {new Date().getFullYear()} Uttam Automobile.
          All Rights Reserved.

        </div>

      </footer>

    </div>
  );
}

export default Home;