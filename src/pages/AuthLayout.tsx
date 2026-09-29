import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Facebook } from "lucide-react";
import { CourseCard, courses, avatarUrls } from "../components/CourseCard";

type Props = {
  leftHeading: string;
  leftText: string;
  eyebrow: string;
  title: string;
  footer: ReactNode;
  children: ReactNode;
};

export default function AuthLayout({
  leftHeading,
  leftText,
  eyebrow,
  title,
  footer,
  children,
}: Props) {
  return (
    <div className="auth-page">
      <div className="auth-grid" />

      <header className="topbar">
        <div className="container">
          <Link to="/" className="brand" aria-label="ByteSpace home">
            <span className="brand-mark" />
            <span>ByteSpace</span>
          </Link>
        </div>
      </header>

      <main className="auth-main">
        <section className="auth-left">
          <div>
            <h2>{leftHeading}</h2>
            <p>{leftText}</p>
          </div>

          <div className="auth-stage" aria-hidden="true">
            <div className="stage-back">
              <CourseCard course={courses[1]} />
            </div>
            <div className="stage-front">
              <CourseCard course={courses[2]} />
            </div>

            <img
              className="auth-deco auth-torus"
              src="/images/Cone (1).png"
              alt=""
            />
            <img
              className="auth-deco auth-cone"
              src="/images/Cone (2).png"
              alt=""
            />
            <img
              className="auth-deco auth-coil"
              src="/images/Image.png"
              alt=""
            />

            <article className="auth-happy">
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
        </section>

        <section className="auth-card">
          <p className="auth-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>

          {children}

          <div className="auth-divider">
            <span>or</span>
          </div>

          <div className="auth-socials">
            <button
              type="button"
              className="social-btn"
              aria-label="Continue with Facebook"
            >
              <Facebook size={22} />
            </button>
            <button
              type="button"
              className="social-btn"
              aria-label="Continue with Google"
            >
              <b>G</b>
            </button>
          </div>

          <p className="auth-foot">{footer}</p>
        </section>
      </main>
    </div>
  );
}
