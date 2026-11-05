"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./page.module.css";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
];

const services = [
  {
    number: "01",
    icon: "strategy",
    title: "Brand strategy",
    description:
      "Find your point of view, define your audience, and build a clear foundation for what comes next.",
  },
  {
    number: "02",
    icon: "identity",
    title: "Visual identity",
    description:
      "Create a distinctive visual language that makes your story recognizable at every touchpoint.",
  },
  {
    number: "03",
    icon: "digital",
    title: "Digital experiences",
    description:
      "Turn thoughtful ideas into intuitive websites and digital products people love to use.",
  },
  {
    number: "04",
    icon: "web",
    title: "Web design",
    description:
      "Design clear, engaging websites that bring your brand to life and guide people to action.",
  },
  {
    number: "05",
    icon: "content",
    title: "Content & storytelling",
    description:
      "Shape your message with useful content and a consistent voice across every channel.",
  },
  {
    number: "06",
    icon: "direction",
    title: "Creative direction",
    description:
      "Keep every detail aligned with a strong creative vision from concept through launch.",
  },
];

const projectCategories = ["All", "Branding", "Digital", "Campaigns"];

const projects = [
  {
    name: "Good Earth",
    type: "Brand identity",
    category: "Branding",
    artwork: "earthArtwork",
    artworkName: "good earth",
    artworkDetail: "GROW WITH PURPOSE",
  },
  {
    name: "Common Ground",
    type: "Digital experience",
    category: "Digital",
    artwork: "groundArtwork",
    artworkName: "common\n ground",
    artworkDetail: "A place to come together",
  },
  {
    name: "Daybreak",
    type: "Campaign",
    category: "Campaigns",
    artwork: "daybreakArtwork",
    artworkName: "Make\n room.",
    artworkDetail: "DAYBREAK · SPRING 2025",
  },
  {
    name: "Field Notes",
    type: "Brand strategy",
    category: "Branding",
    artwork: "notesArtwork",
    artworkName: "FIELD\nNOTES",
    artworkDetail: "A slower kind of living",
  },
  {
    name: "Open House",
    type: "Website",
    category: "Digital",
    artwork: "houseArtwork",
    artworkName: "open\nhouse",
    artworkDetail: "A neighborhood, reimagined",
  },
  {
    name: "Little Rituals",
    type: "Campaign",
    category: "Campaigns",
    artwork: "ritualArtwork",
    artworkName: "little\nrituals",
    artworkDetail: "MAKE TIME FOR YOU",
  },
];

const featuredProjects = [projects[0], projects[1], projects[2], projects[4]];

const testimonials = [
  {
    quote:
      "Add a short client quote here about the project experience and what made the collaboration valuable.",
    name: "Client name",
    project: "Brand strategy · Organization",
  },
  {
    quote:
      "Replace this copy with an approved testimonial describing the work and its impact.",
    name: "Client name",
    project: "Visual identity · Organization",
  },
  {
    quote:
      "Use this space for a client’s own words about working with your studio.",
    name: "Client name",
    project: "Digital experience · Organization",
  },
];

const blogPosts = [
  {
    category: "Brand strategy",
    date: "November 4, 2026",
    dateTime: "2026-11-04",
    title: "A clearer brand starts with better questions",
    description:
      "A few useful prompts to help your team find the story only you can tell.",
    artwork: "journalArtwork",
    artworkText: "Ask\nbetter",
  },
  {
    category: "Design",
    date: "October 21, 2026",
    dateTime: "2026-10-21",
    title: "Making room for the ideas that matter",
    description:
      "Why creating space in your process can lead to more thoughtful work.",
    artwork: "processArtwork",
    artworkText: "Make\nspace",
  },
  {
    category: "Digital",
    date: "October 8, 2026",
    dateTime: "2026-10-08",
    title: "Small details, more human experiences",
    description:
      "The little design decisions that make digital products feel welcoming.",
    artwork: "digitalArtwork",
    artworkText: "Human\nfirst",
  },
  {
    category: "Studio life",
    date: "September 26, 2026",
    dateTime: "2026-09-26",
    title: "What collaboration looks like in practice",
    description:
      "A peek at how we bring different perspectives together around one goal.",
    artwork: "collaborationArtwork",
    artworkText: "Better\ntogether",
  },
];

function ServiceIcon({ name }) {
  const commonProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.6,
  };

  return (
    <svg
      {...commonProps}
      viewBox="0 0 32 32"
      width="28"
      height="28"
      aria-hidden="true"
      focusable="false"
    >
      {name === "strategy" && (
        <>
          <circle cx="16" cy="16" r="10.5" />
          <circle cx="16" cy="16" r="5.5" />
          <path d="m16 16 9-9M20 7h5v5" />
        </>
      )}
      {name === "identity" && (
        <>
          <path d="M16 4 27 10v12l-11 6L5 22V10l11-6Z" />
          <path d="m5.5 10 10.5 6 10.5-6M16 16v12M11 7l11 6" />
        </>
      )}
      {name === "digital" && (
        <>
          <rect x="4.5" y="5.5" width="23" height="17" rx="2" />
          <path d="M11 27h10M16 22.5V27M10 11h12M10 15h7" />
        </>
      )}
      {name === "web" && (
        <>
          <rect x="4" y="5.5" width="24" height="21" rx="2" />
          <path d="M4.5 11h23M9 8.5h.01M12.5 8.5h.01M10 16h5M10 20h12M19 15l3 2-3 2" />
        </>
      )}
      {name === "content" && (
        <>
          <path d="M8 5h11l5 5v17H8a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
          <path d="M19 5v6h5M11 16h10M11 20h8" />
        </>
      )}
      {name === "direction" && (
        <>
          <path d="M16 4 19 13l9 3-9 3-3 9-3-9-9-3 9-3 3-9Z" />
          <path d="m23 5 .8 2.2L26 8l-2.2.8L23 11l-.8-2.2L20 8l2.2-.8L23 5Z" />
        </>
      )}
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  useEffect(() => {
    const sections = document.querySelectorAll("main section");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.scrollVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    sections.forEach((section) => {
      section.classList.add(styles.scrollReveal);
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleContactSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = formData.get("subject");
    const message = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      "",
      formData.get("message"),
    ].join("\n");

    window.location.href = `mailto:hello@formandfield.studio?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(message)}`;
  }

  function handleNewsletterSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("newsletter-email");

    window.location.href = `mailto:hello@formandfield.studio?subject=${encodeURIComponent(
      "Newsletter subscription request",
    )}&body=${encodeURIComponent(`Please add ${email} to the studio newsletter.`)}`;
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <nav className={styles.navbar} aria-label="Main navigation">
          <a className={styles.brand} href="#top" onClick={closeMenu}>
            <span className={styles.brandMark} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>form & field</span>
          </a>

          <button
            className={styles.menuToggle}
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={styles.menuIcon} aria-hidden="true">
              <span />
              <span />
            </span>
            <span className={styles.menuLabel}>{menuOpen ? "Close" : "Menu"}</span>
          </button>

          <div
            className={`${styles.navContent} ${menuOpen ? styles.navContentOpen : ""}`}
            id="primary-navigation"
          >
            <div className={styles.navLinks}>
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              ))}
            </div>
            <a className={styles.contactButton} href="#contact" onClick={closeMenu}>
              Let&apos;s talk <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Independent creative studio · Brooklyn, NY</p>
          <h1>
            Thoughtful design
            <br />
            for a <span>changing hello world.</span>
          </h1>
          <p className={styles.heroDescription}>
            We build brands and digital experiences for people making a positive
            difference.
          </p>
          <a className={styles.heroLink} href="#work">
            Explore our work <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className={styles.featureSection} aria-labelledby="feature-title">
        <div className={styles.featureImage} role="img" aria-label="Creative team collaborating on a project">
          <span className={styles.featureBadge}>
            <span>Made</span>
            <span>together</span>
          </span>
        </div>
        <div className={styles.featureContent}>
          <p className={styles.featureEyebrow}>The good-work package</p>
          <h2 id="feature-title">Creative that moves your brand forward.</h2>
          <p className={styles.featurePrice}>
            Strategy, identity <span>&amp;</span> digital
          </p>
          <div className={styles.featureDivider} />
          <ul className={styles.featureBenefits}>
            <li>Thoughtful brand strategy</li>
            <li>Distinctive visual identity</li>
            <li>Digital experiences made for people</li>
            <li>A close, collaborative creative team</li>
            <li>Made to fit your goals and your next step</li>
          </ul>
          <a className={styles.featureButton} href="#services">
            Explore our services <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className={styles.aboutSection} id="about">
        <div className={styles.aboutImage}>
          <Image
            src="/about-art.svg"
            alt="Abstract illustration of a sun over a green landscape"
            fill
            sizes="(max-width: 760px) 100vw, 45vw"
          />
        </div>
        <div className={styles.aboutCopy}>
          <p className={styles.sectionLabel}>A little about us</p>
          <h2>We make meaningful ideas matter.</h2>
          <p>
            Form &amp; Field is an independent creative studio partnering with
            people who want to make a positive difference. We bring strategy,
            design, and a thoughtful process together to help good ideas grow.
          </p>
          <a className={styles.aboutLink} href="#contact">
            Get to know us <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.companyLead}>
          <p className={styles.companyEyebrow}>Our company</p>
          <h2>We integrate strategy, creativity &amp; experience to solve problems.</h2>
          <a className={styles.companyButton} href="#contact">
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className={styles.companyDetails}>
          <p className={styles.companyDescription}>
            We bring thoughtful strategy, creative design, and digital craft
            together to help ambitious teams make meaningful ideas real. Every
            project starts with listening and grows through close collaboration.
          </p>
          <div className={styles.capabilityList} aria-label="Our capabilities">
            <div className={styles.capability}>
              <div className={styles.capabilityLabel}>
                <span>Strategy &amp; insight</span>
                <span>01</span>
              </div>
              <span className={styles.capabilityTrack} aria-hidden="true">
                <span className={styles.strategyFill} />
              </span>
            </div>
            <div className={styles.capability}>
              <div className={styles.capabilityLabel}>
                <span>Creative &amp; digital</span>
                <span>02</span>
              </div>
              <span className={styles.capabilityTrack} aria-hidden="true">
                <span className={styles.creativeFill} />
              </span>
            </div>
          </div>
          <div className={styles.companyStats} aria-label="Our process">
            <div>
              <strong>01</strong>
              <span>Listen</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Imagine</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Make</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection} id="services">
        <div className={styles.servicesHeading}>
          <div>
            <p className={styles.sectionLabel}>What we do</p>
            <h2>Good work starts with good thinking.</h2>
          </div>
          <p>
            From the first big question to the final detail, we bring clarity
            and craft to every step.
          </p>
        </div>
        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <article className={styles.serviceCard} key={service.number}>
              <div className={styles.serviceCardTop}>
                <span className={styles.serviceIcon}>
                  <ServiceIcon name={service.icon} />
                </span>
                <span className={styles.serviceNumber}>{service.number}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className={styles.serviceArrow} aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.portfolioSection} id="work">
        <div className={styles.portfolioHeading}>
          <div>
            <p className={styles.sectionLabel}>Selected work</p>
            <h2>Ideas made tangible.</h2>
          </div>
          <p>
            A selection of identities, digital experiences, and campaigns
            created with good people.
          </p>
        </div>
        <div className={styles.portfolioTabs} role="group" aria-label="Filter projects">
          {projectCategories.map((category) => (
            <button
              className={`${styles.portfolioTab} ${
                activeCategory === category ? styles.portfolioTabActive : ""
              }`}
              type="button"
              key={category}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className={styles.projectGrid} aria-live="polite">
          {visibleProjects.map((project) => (
            <article className={styles.projectCard} key={project.name}>
              <div className={`${styles.projectArtwork} ${styles[project.artwork]}`}>
                <span className={styles.projectArtworkName}>
                  {project.artworkName.split("\n").map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </span>
                <span className={styles.projectArtworkDetail}>
                  {project.artworkDetail}
                </span>
              </div>
              <div className={styles.projectMeta}>
                <h3>{project.name}</h3>
                <span>{project.type}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.teamSection} id="team">
        <div className={styles.teamBannerContent}>
          <p className={styles.teamEyebrow}>The people behind the progress</p>
          <h2>Great things happen when good people work together.</h2>
          <p className={styles.teamDescription}>
            Our strength lies in bringing diverse minds together around a
            shared purpose to create meaningful work.
          </p>
          <a className={styles.teamButton} href="#contact">
            Contact us
          </a>
        </div>
      </section>

      <section className={styles.testimonialsSection} aria-labelledby="testimonials-title">
        <div className={styles.testimonialsHeading}>
          <p className={styles.sectionLabel}>Kind words</p>
          <h2 id="testimonials-title">Good work is a collaboration.</h2>
          <p className={styles.testimonialsNote}>
            Sample testimonial copy — replace with client-approved quotes.
          </p>
        </div>
        <Swiper
          className={styles.testimonialSwiper}
          modules={[A11y, Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            760: { slidesPerView: 2, spaceBetween: 24 },
          }}
          a11y={{ enabled: true }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.project}>
              <figure className={styles.testimonialCard}>
                <span className={styles.quoteMark} aria-hidden="true">
                  “
                </span>
                <blockquote>{testimonial.quote}</blockquote>
                <figcaption>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.project}</span>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className={styles.blogSection} id="blog" aria-labelledby="blog-title">
        <div className={styles.blogHeading}>
          <div>
            <p className={styles.sectionLabel}>Notes from the studio</p>
            <h2 id="blog-title">Ideas worth sharing.</h2>
          </div>
          <p>
            Thoughts on strategy, design, and the details that make good work
            matter.
          </p>
        </div>
        <Swiper
          className={styles.blogSwiper}
          modules={[A11y, Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={18}
          slidesPerView={1.08}
          breakpoints={{
            560: { slidesPerView: 2, spaceBetween: 18 },
            960: { slidesPerView: 3, spaceBetween: 20 },
          }}
          a11y={{ enabled: true }}
        >
          {blogPosts.map((post) => (
            <SwiperSlide key={post.title}>
              <article className={styles.blogCard}>
                <div
                  className={`${styles.blogArtwork} ${styles[post.artwork]}`}
                  aria-hidden="true"
                >
                  <span className={styles.blogArtworkText}>
                    {post.artworkText.split("\n").map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </span>
                  <span className={styles.blogArtworkMark}>f&amp;f</span>
                </div>
                <div className={styles.blogMeta}>
                  <span className={styles.blogCategory}>{post.category}</span>
                  <time dateTime={post.dateTime}>{post.date}</time>
                </div>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section
        className={styles.showcaseSection}
        aria-labelledby="showcase-title"
      >
        <div className={styles.showcaseHeading}>
          <p className={styles.showcaseEyebrow}>Stories in the making</p>
          <h2 id="showcase-title">Discover a world of creative work.</h2>
        </div>
        <div className={styles.showcaseGrid}>
          {featuredProjects.map((project) => (
            <article
              className={styles.showcaseCard}
              key={project.name}
            >
              <div
                className={`${styles.showcaseArt} ${styles[project.artwork]}`}
                aria-hidden="true"
              />
              <div className={styles.showcaseCaption}>
                <span>{project.type}</span>
                <h3>{project.name}</h3>
              </div>
              <a
                className={styles.showcaseLink}
                href="#contact"
                aria-label={`Discuss a project like ${project.name}`}
              >
                ↗
              </a>
            </article>
          ))}
        </div>
        <a className={styles.showcaseButton} href="#work">
          See all our work <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className={styles.contactSection} id="contact">
        <div className={styles.contactHeading}>
          <p className={styles.contactEyebrow}>Contact us</p>
          <h2>
            Behind every meaningful project is a team that listens, thinks, and
            builds with care.
          </h2>
        </div>
        <div className={styles.contactContent}>
          <form className={styles.contactForm} onSubmit={handleContactSubmit}>
            <label className={styles.visuallyHidden} htmlFor="contact-name">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Name"
              autoComplete="name"
              required
            />
            <label className={styles.visuallyHidden} htmlFor="contact-email">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="E-Mail"
              autoComplete="email"
              required
            />
            <label className={styles.visuallyHidden} htmlFor="contact-subject">
              Subject
            </label>
            <input
              className={styles.contactWideField}
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="Subject"
              required
            />
            <label className={styles.visuallyHidden} htmlFor="contact-message">
              Message
            </label>
            <textarea
              className={styles.contactWideField}
              id="contact-message"
              name="message"
              placeholder="Message"
              rows={5}
              required
            />
            <button className={styles.sendButton} type="submit">
              Send message <span aria-hidden="true">↗</span>
            </button>
            <p className={styles.formNote}>
              Your email app will open with your message ready to send.
            </p>
          </form>

          <address className={styles.contactDetails}>
            <div>
              <h3>Email</h3>
              <a href="mailto:hello@formandfield.studio">
                hello@formandfield.studio
              </a>
            </div>
            <div>
              <h3>Studio</h3>
              <p>Brooklyn, New York</p>
            </div>
          </address>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerMain}>
          <div className={styles.footerAbout}>
            <a className={styles.footerBrand} href="#top">
              <span className={styles.footerBrandMark} aria-hidden="true">
                f&amp;f
              </span>
              form &amp; field
            </a>
            <p>
              An independent creative studio making meaningful ideas matter
              through strategy, design, and digital craft.
            </p>
            <a className={styles.footerReadMore} href="#about">
              More about us <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className={styles.footerColumn}>
            <h2>Company</h2>
            <a href="#about">About</a>
            <a href="#team">Our team</a>
            <a href="#work">Our work</a>
            <a href="#contact">Contact</a>
          </div>

          <div className={styles.footerColumn}>
            <h2>Services</h2>
            <a href="#services">Brand strategy</a>
            <a href="#services">Visual identity</a>
            <a href="#services">Digital experiences</a>
            <a href="#services">Creative direction</a>
          </div>

          <div className={styles.footerNewsletter}>
            <h2>Studio notes</h2>
            <p>Occasional ideas and updates from our studio.</p>
            <form onSubmit={handleNewsletterSubmit}>
              <label className={styles.visuallyHidden} htmlFor="newsletter-email">
                Your email
              </label>
              <input
                id="newsletter-email"
                name="newsletter-email"
                type="email"
                placeholder="Your email"
                autoComplete="email"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
            <span className={styles.newsletterNote}>
              Opens your email app to request updates.
            </span>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Form &amp; Field Studio</p>
          <a href="mailto:hello@formandfield.studio">
            hello@formandfield.studio
          </a>
          <p>Brooklyn, New York</p>
          <div className={styles.footerSocials} aria-label="Quick links">
            <a href="#work" aria-label="View our work">
              W
            </a>
            <a href="#blog" aria-label="Read our blog">
              B
            </a>
            <a href="mailto:hello@formandfield.studio" aria-label="Email the studio">
              @
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
