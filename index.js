import React from 'react';
import Navigation from '../components/Navigation';
import BookCard from '../components/BookCard';
import Link from 'next/link';
import { books, users } from '../data/mockData';

export default function Home() {
  return (
    <div className="home-page">
      <Navigation activePage="home" />
      
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Connect Through Books, Not Looks</h1>
            <p className="subtitle">Find meaningful connections based on what you read, not how you appear</p>
            <div className="hero-buttons">
              <Link href="/explore">
                <a className="btn btn-primary">Explore Connections</a>
              </Link>
              <Link href="/profile/1">
                <a className="btn btn-secondary">View Profile</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <section className="featured-section">
        <div className="container">
          <h2>Featured Books</h2>
          <div className="book-grid">
            {books.slice(0, 4).map(book => (
              <Link href={`/book/${book.id}`} key={book.id}>
                <a>
                  <BookCard book={book} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <section className="how-it-works">
        <div className="container">
          <h2>How Booklet Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-icon">1</div>
              <h3>Create Your Profile</h3>
              <p>Add books that have shaped your thinking and personality</p>
            </div>
            <div className="step">
              <div className="step-icon">2</div>
              <h3>Discover Connections</h3>
              <p>Find people with similar literary tastes and interests</p>
            </div>
            <div className="step">
              <div className="step-icon">3</div>
              <h3>Share & Connect</h3>
              <p>Exchange books and ideas with your new connections</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="readers-section">
        <div className="container">
          <h2>Featured Readers</h2>
          <div className="readers-grid">
            {users.slice(0, 4).map(user => (
              <Link href={`/profile/${user.id}`} key={user.id}>
                <a className="reader-card">
                  <div className="reader-avatar">
                    <img src={user.avatar} alt={user.name} />
                  </div>
                  <h4>{user.name}</h4>
                  <p className="reading-vibes">{user.readingVibe.slice(0, 2).join(" • ")}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>Booklet</h3>
              <p>Connect Through Books, Not Looks</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Explore</h4>
                <Link href="/explore"><a>Find Readers</a></Link>
                <Link href="/sharing"><a>Book Sharing</a></Link>
              </div>
              <div className="footer-column">
                <h4>About</h4>
                <a href="#">Our Story</a>
                <a href="#">How It Works</a>
              </div>
              <div className="footer-column">
                <h4>Support</h4>
                <a href="#">Contact Us</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Booklet. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <style jsx>{`
        .hero-section {
          background-color: var(--primary-color);
          color: white;
          padding: 4rem 0;
          text-align: center;
        }
        
        .hero-content h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .subtitle {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        
        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
        
        .btn {
          padding: 0.75rem 1.5rem;
          border-radius: var(--border-radius);
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .btn-primary {
          background-color: white;
          color: var(--primary-color);
        }
        
        .btn-primary:hover {
          background-color: var(--secondary-color);
        }
        
        .btn-secondary {
          background-color: transparent;
          border: 2px solid white;
        }
        
        .btn-secondary:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        section {
          padding: 4rem 0;
        }
        
        section h2 {
          text-align: center;
          margin-bottom: 2rem;
          font-size: 2rem;
          color: var(--primary-color);
        }
        
        .book-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 2rem;
        }
        
        .how-it-works {
          background-color: var(--secondary-color);
        }
        
        .steps-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          text-align: center;
        }
        
        .step {
          padding: 1.5rem;
          background-color: white;
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
        }
        
        .step-icon {
          width: 50px;
          height: 50px;
          background-color: var(--primary-color);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0 auto 1rem;
        }
        
        .readers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 2rem;
        }
        
        .reader-card {
          text-align: center;
          padding: 1.5rem;
          background-color: white;
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          transition: transform 0.3s ease;
        }
        
        .reader-card:hover {
          transform: translateY(-5px);
        }
        
        .reader-avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 1rem;
        }
        
        .reader-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .reading-vibes {
          color: var(--light-text);
          font-size: 0.9rem;
        }
        
        .footer {
          background-color: var(--primary-color);
          color: white;
          padding: 3rem 0 1rem;
        }
        
        .footer-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 2rem;
        }
        
        .footer-logo {
          flex: 0 0 100%;
          margin-bottom: 2rem;
        }
        
        .footer-logo h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        
        .footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          width: 100%;
        }
        
        .footer-column {
          flex: 1;
          min-width: 150px;
        }
        
        .footer-column h4 {
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }
        
        .footer-column a {
          display: block;
          margin-bottom: 0.5rem;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
        
        .footer-column a:hover {
          opacity: 1;
        }
        
        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.9rem;
          opacity: 0.7;
        }
        
        @media (min-width: 768px) {
          .footer-logo {
            flex: 0 0 30%;
          }
          
          .footer-links {
            width: 65%;
          }
        }
      `}</style>
    </div>
  );
}
