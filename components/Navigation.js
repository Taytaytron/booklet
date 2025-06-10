import React from 'react';
import Link from 'next/link';

export default function Navigation({ activePage }) {
  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-logo">
          <Link href="/">
            <a className="logo">Booklet</a>
          </Link>
        </div>
        
        <div className="nav-links">
          <Link href="/">
            <a className={activePage === 'home' ? 'active' : ''}>Home</a>
          </Link>
          <Link href="/explore">
            <a className={activePage === 'explore' ? 'active' : ''}>Explore</a>
          </Link>
          <Link href="/profile/1">
            <a className={activePage === 'profile' ? 'active' : ''}>Profile</a>
          </Link>
          <Link href="/sharing">
            <a className={activePage === 'sharing' ? 'active' : ''}>Book Sharing</a>
          </Link>
        </div>
        
        <div className="nav-actions">
          <button className="btn-search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button className="btn-notifications">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </button>
          <div className="user-avatar">
            <img src="/images/placeholder-avatar.jpg" alt="User" />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .navigation {
          background-color: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .nav-logo {
          flex: 0 0 auto;
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color);
          text-decoration: none;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        
        .nav-links a {
          text-decoration: none;
          color: var(--light-text);
          font-weight: 500;
          transition: color 0.3s ease;
          padding: 0.5rem 0;
        }
        
        .nav-links a:hover {
          color: var(--primary-color);
        }
        
        .nav-links a.active {
          color: var(--primary-color);
          border-bottom: 2px solid var(--primary-color);
        }
        
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .btn-search, .btn-notifications {
          background: none;
          border: none;
          color: var(--light-text);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
        }
        
        .btn-search:hover, .btn-notifications:hover {
          background-color: var(--secondary-color);
          color: var(--primary-color);
        }
        
        .user-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          overflow: hidden;
          cursor: pointer;
        }
        
        .user-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
