import { useState } from "react";
import {
  Camera,
  Check,
  Code2,
  Database,
  Menu,
  Megaphone,
  PencilRuler,
  Search,
  ShoppingBag,
  Users,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { CourseCard, courses, avatarUrls } from "./components/CourseCard";

const topics = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const paths = [
  { name: "Design", icon: PencilRuler, color: "lime" },
  { name: "Development", icon: Code2, color: "lime" },
  { name: "IT & Software", icon: Database, color: "lime" },
  { name: "Business", icon: BriefcaseIcon, color: "lime" },
  { name: "Marketing", icon: Megaphone, color: "lime" },
  { name: "Photography", icon: Camera, color: "lime" },
];

function BriefcaseIcon({ size = 18 }: { size?: number }) {
  return <Users size={size} />;
}

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: "/images/sarah.png",
    text: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: "/images/james.png",
    text: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: "/images/alex.png",
    text: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <main id="top">
        <section className="hero" id="home">
          <div className="hero-grid" />
          <svg
            className="hero-deco lime-scribble"
            viewBox="0 0 120 220"
            aria-hidden="true"
          >
            <path
              d="M88 12c-28 18-52 8-62 36 12 18 46 8 52 38-10 26-48 12-58 42 14 22 50 10 54 40-8 22-40 16-48 36"
              fill="none"
              stroke="#c8ff00"
              strokeWidth="22"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className="hero-deco white-scribble"
            viewBox="0 0 80 140"
            aria-hidden="true"
          >
            <path
              d="M22 12c22 14 38 8 42 32-14 16-36 8-40 30 16 16 38 8 40 32-12 16-34 10-38 28"
              fill="none"
              stroke="#fff"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </svg>
          <div className="hero-deco white-ring" aria-hidden="true" />
          <div className="hero-deco lime-cylinder" aria-hidden="true" />
          <div className="hero-deco white-triangle" aria-hidden="true" />
          <div className="hero-deco white-pills" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <header className="topbar">
            <div className="container nav-inner">
              <a className="brand" href="#home" aria-label="ByteSpace home">
                <span className="brand-mark" />
                <span>ByteSpace</span>
              </a>
              <nav className={menuOpen ? "main-nav open" : "main-nav"}>
                <a href="#home">Home</a>
                <a href="#courses">Courses</a>
                <a href="#creators">Creators</a>
              </nav>
              <div className="nav-actions">
                <Link className="text-button" to="/signin">
                  Sign In
                </Link>
                <Link className="text-button" to="/register">
                  Join Us
                </Link>
                <button className="icon-button bag-button" aria-label="Cart">
                  <ShoppingBag size={18} />
                </button>
                <button
                  className="icon-button menu-button"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Toggle menu"
                >
                  {menuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
              </div>
            </div>
          </header>

          <div className="container hero-content">
            <h1>
              Get Access to Hundreds
              <br />
              Courses Available
            </h1>
            <p className="hero-copy">
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </p>
            <form
              className="search-bar"
              onSubmit={(event) => event.preventDefault()}
            >
              <label className="search-field">
                <Search size={18} />
                <input type="search" placeholder="Course, topic, creator" />
              </label>
              <button type="submit">Search</button>
            </form>

            <div className="hero-stage">
              <div className="person-glow" />
              <div className="hero-person">
                <img
                  src="/images/hero.png"
                  alt="Student with headphones holding a laptop"
                />
              </div>
              <article className="stat-card stat-one">
                <strong>UI/UX Design</strong>
                <span>200 Courses &nbsp;•&nbsp; 1000+ Students</span>
              </article>
              <article className="stat-card stat-two">
                <strong>Learning Progress</strong>
                <b>55%</b>
                <div className="progress-track">
                  <div className="progress-fill" />
                </div>
              </article>
              <article className="stat-card stat-three">
                <strong>Happy Students</strong>
                <small>4.5 (240) ★</small>
                <div className="student-row">
                  <i
                    style={{
                      backgroundImage:
                        "url(https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=80)",
                    }}
                  />
                  <i
                    style={{
                      backgroundImage:
                        "url(https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80)",
                    }}
                  />
                  <i
                    style={{
                      backgroundImage:
                        "url(https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80)",
                    }}
                  />
                  <i
                    style={{
                      backgroundImage:
                        "url(https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=80)",
                    }}
                  />
                  <i
                    style={{
                      backgroundImage:
                        "url(https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80)",
                    }}
                  />
                  <em>2K+</em>
                </div>
              </article>
            </div>
          </div>

          <div className="logo-strip">
            <span>◉ logoipsum</span>
            <span>✺ logoipsum</span>
            <span>◉ logoipsum</span>
            <span>◉ logoipsum</span>
            <span>◉ logoipsum</span>
          </div>
        </section>

        <section className="section courses-section" id="courses">
          <div className="container narrow">
            <div className="section-heading">
              <h2>
                Discover Your Passion,
                <br />
                Build Your Skills
              </h2>
              <p>
                At Bytespace Courses, we bring you closer to life-changing
                knowledge. Explore a variety of courses across different fields,
                from technology to the arts, and make a difference in your
                career and life.
              </p>
            </div>

            <div className="topic-list">
              {topics.map((topic, index) => (
                <button className={index === 0 ? "active" : ""} key={topic}>
                  {topic}
                </button>
              ))}
              <a className="topic-more" href="#courses">
                + More
              </a>
            </div>

            <div className="course-grid">
              {courses.map((course) => (
                <CourseCard course={course} key={course.title} />
              ))}
            </div>
          </div>
        </section>

        <section className="section paths-section">
          <div className="container narrow">
            <div className="section-heading">
              <h2>Explore Diverse Learning Paths at Bytespace</h2>
              <p className="text">
                At Bytespace, we believe in empowering individuals through
                knowledge. Our diverse range of courses spans various fields,
                ensuring there's something for everyone. Unleash your potential
                and explore our carefully curated categories.
              </p>
            </div>
            <div className="path-grid">
              {paths.map((path) => {
                const Icon = path.icon;
                return (
                  <button className="path-card" key={path.name}>
                    <span className={`path-icon ${path.color}`}>
                      <Icon size={24} />
                    </span>
                    {path.name}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="growth-section" id="creators">
          <div className="container growth-grid">
            <div className="growth-copy">
              <h2>
                Your Path to Professional
                <br />
                Growth Starts Here!
              </h2>
              <p>
                Explore our curated selection of courses tailored to your
                aspirations, and accelerate your career journey. Whether you're
                an aspiring specialist or looking to expand your skills,
                ByteSpace has the tools to help you get there.
              </p>
              <div className="growth-stats">
                <span>
                  <b>12K</b>Students
                </span>
                <span>
                  <b>70+</b>Courses
                </span>
                <span>
                  <b>16</b>Creators
                </span>
              </div>
            </div>
            {/* <div className="growth-visual">
              <div className="floating-course">
                <small>Learn Figma from Basics</small>
                <div className="mini-rating">
                  ★★★★★ <b>4.8</b>
                </div>
              </div>
              <img
                src="https://images.pexels.com/photos/16459056/pexels-photo-16459056.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Student learning with a laptop"
              />
            </div> */}

            <div className="growth-visual">
              {/* layer 1: backmost, reusing the first course card */}
              <div className="growth-card">
                <CourseCard course={courses[0]} />
              </div>

              {/* layer 2: your person cutout */}
              <img
                className="growth-person"
                src="/images/hero.png"
                alt="Student with headphones holding a laptop"
              />

              {/* layer 3: hype accessories */}
              <svg
                className="growth-scribble"
                viewBox="0 0 120 220"
                aria-hidden="true"
              >
                <path
                  d="M88 12c-28 18-52 8-62 36 12 18 46 8 52 38-10 26-48 12-58 42 14 22 50 10 54 40-8 22-40 16-48 36"
                  fill="none"
                  stroke="#c8ff00"
                  strokeWidth="22"
                  strokeLinecap="round"
                />
              </svg>

              <article className="growth-progress">
                <strong>Learning Progress</strong>
                <b>55%</b>
                <div className="progress-track">
                  <div className="progress-fill" />
                </div>
              </article>
            </div>
            <div className="creator-visual">
              {/* layer 1: person cutout */}
              <img
                className="creator-person"
                src="/images/herof.png"
                alt="Course creator holding a tablet"
              />

              {/* layer 2: revenue cards (left) */}
              <article className="revenue-card revenue-total">
                <strong>Total Revenue</strong>
                <small>July 1-28</small>
                <b>$120.29</b>
                <div className="revenue-bar">
                  <div className="revenue-bar-fill" />
                </div>
              </article>

              <article className="revenue-card revenue-ytd">
                <strong>Year to Date</strong>
                <small>2021</small>
                <b>$1,200.38</b>
                <span className="revenue-pill">+12%</span>
              </article>

              {/* layer 2: scribble */}
              <svg
                className="creator-scribble"
                viewBox="0 0 120 220"
                aria-hidden="true"
              >
                <path
                  d="M88 12c-28 18-52 8-62 36 12 18 46 8 52 38-10 26-48 12-58 42 14 22 50 10 54 40-8 22-40 16-48 36"
                  fill="none"
                  stroke="#c8ff00"
                  strokeWidth="22"
                  strokeLinecap="round"
                />
              </svg>

              {/* layer 3: frontmost */}
              <article className="happy-card">
                <strong>Happy Students</strong>
                <small>4.5 (240) ★</small>
                <div className="student-row">
                  {avatarUrls.map((url) => (
                    <i key={url} style={{ backgroundImage: `url(${url})` }} />
                  ))}
                  <em>2K+</em>
                </div>
              </article>
            </div>
            <div className="creator-copy">
              <h2>
                Create & Manage
                <br />
                Courses Easily.
              </h2>
              <p>
                ByteSpace supports individuals or entities in the creation,
                publication, and administration of educational courses.
              </p>
              <ul>
                <li>
                  <Check size={13} /> Share Your Expertise
                </li>
                <li>
                  <Check size={13} /> Monetize Your Passion
                </li>
                <li>
                  <Check size={13} /> Flexibility and Autonomy
                </li>
                <li>
                  <Check size={13} /> Build a Community
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-pattern" />

          <img
            className="cta-img coil-tl"
            src="/images/Image (2).png"
            alt=""
            aria-hidden="true"
          />
          <img
            className="cta-img coil-white"
            src="/images/Image.png"
            alt=""
            aria-hidden="true"
          />
          <img
            className="cta-img pyramid"
            src="/images/Cone_01 2.png"
            alt=""
            aria-hidden="true"
          />
          <img
            className="cta-img cylinder"
            src="/images/Cone.png"
            alt=""
            aria-hidden="true"
          />
          <img
            className="cta-img cone"
            src="/images/Cone (2).png"
            alt=""
            aria-hidden="true"
          />
          <img
            className="cta-img torus"
            src="/images/Cone (1).png"
            alt=""
            aria-hidden="true"
          />
          <img
            className="cta-img coil-br"
            src="/images/Image (1).png"
            alt=""
            aria-hidden="true"
          />

          <div className="container cta-content">
            <h2>
              Unlock Your Potential as a<br />
              Creator with ByteSpace
            </h2>
            <p>
              Experience the collaboration of numerous creators and an expanding
              selection of courses. Register now and become a part of a
              community comprising over 10,000 local and international creators.
              Utilize our Course Editor, and showcase your expertise by
              publishing your finest course on the ByteSpace Course Library.
            </p>
            <button className="lime-button">Join as Creator</button>
          </div>
        </section>

        <section className="community-section">
          <div className="container">
            <div className="community-heading">
              <h2>
                Discover What Our
                <br />
                Community Is Saying
              </h2>
              <p>
                At ByteSpace, our vibrant community of learners and creators is
                at the heart of what we do. Hear directly from those who have
                experienced the transformative journey of learning and creating
                on our platform. Explore testimonials that reflect the diverse
                perspectives of enthusiastic learners and accomplished creators.
              </p>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <article className="testimonial" key={item.name}>
                  <img className="avatar" src={item.image} alt={item.name} />
                  <strong>{item.name}</strong>
                  <small>{item.role}</small>
                  <p>“{item.text}”</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-primary">
            <div className="footer-newsletter">
              <a
                className="brand footer-brand"
                href="#top"
                aria-label="ByteSpace home"
              >
                <span className="brand-mark" />
                <span className="brand-mark-text">ByteSpace</span>
              </a>

              <p className="footer-copy">
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>

              <div className="footer-subscribe">
                <input type="email" placeholder="Enter your email" />
                <button type="button">Search</button>
              </div>

              <p className="footer-consent">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <a href="#top">Featured Courses</a>
                <a href="#top">Featured Categories</a>
                <a href="#top">Business</a>
                <a href="#top">IT</a>
                <a href="#top">Design</a>
              </div>
              <div className="footer-column">
                <a href="#top">Development</a>
                <a href="#top">Marketing</a>
                <a href="#top">Photography</a>
                <a href="#top">Finance</a>
                <a href="#top">Sport</a>
              </div>
              <div className="footer-column">
                <a href="#top">Become a Creator</a>
                <a href="#top">Affiliate Program</a>
                <a href="#top">Contact</a>
                <a href="#top">Help</a>
                <a href="#top">About</a>
              </div>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="footer-meta">
            <span>© 2023 ByteSpace. All rights reserved.</span>
            <div className="footer-meta-links">
              <a href="#top">Privacy Policy</a>
              <a href="#top">Terms of Service</a>
              <a href="#top">Cookies Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
