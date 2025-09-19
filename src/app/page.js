"use client"; // Only if you're using Next.js App Router and want JS interactivity

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* NAV */}
      <header className="nav-wrapper">
        <nav className="nav glass">
          <div className="nav-left">
            <Link href="/" className="brand">
              {/* Next.js Image optimizes automatically */}
              <Image
                src="/images/AR.jpg"
                alt="Amrita Robotics logo"
                width={40}
                height={40}
                className="logo"
              />
              <span className="brand-title">Amrita Robotics</span>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="nav-toggle"
            aria-label="Open menu"
          >
            <span className="hamburger"></span>
          </button>

          <ul className={`nav-links ${isOpen ? "open" : ""}`} id="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      {/* HERO (video background) */}
      <main>
        <section className="hero">
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/photo1.jpg"
          >
            <source src="/videos/Robot_Metal_Zoom_Out.mp4" type="video/mp4" />
          </video>

          <div className="hero-overlay">
            <div className="hero-card glass">
              <h1 className="hero-title">Amrita Robotics</h1>
              <p className="hero-sub">
                Innovating & competing at <strong>ABU Robocon 2026</strong>
              </p>
              <div className="hero-cta">
                <Link className="btn primary" href="/team">
                  Meet the Team
                </Link>
                <Link className="btn ghost" href="/about">
                  Our Story
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Work photos */}
        <section className="work section">
          <div className="container">
            <h2 className="section-title">Our Work</h2>
            <p className="section-lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. We build,
              test & iterate.
            </p>

            <div className="photo-grid">
              <Image
                src="/images/photo1.jpg"
                alt="robot photo 1"
                width={400}
                height={300}
                loading="lazy"
              />
              <Image
                src="/images/photo2.jpg"
                alt="robot photo 2"
                width={400}
                height={300}
                loading="lazy"
              />
              <Image
                src="/images/photo3.jpg"
                alt="robot photo 3"
                width={400}
                height={300}
                loading="lazy"
              />
              <Image
                src="/images/photo4.jpg"
                alt="robot photo 4"
                width={400}
                height={300}
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer glass">
        <div className="container">
          <p>© 2026 Amrita Robotics — Built for ABU Robocon 2026</p>
        </div>
      </footer>
    </div>
  );
}
