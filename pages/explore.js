import React from 'react';
import Navigation from '../components/Navigation';
import BookCard from '../components/BookCard';
import Link from 'next/link';
import { users, getUsersWithCommonBooks } from '../data/mockData';

export default function Explore() {
  // Using user ID 1 as the current user for demo purposes
  const currentUserId = 1;
  const connections = getUsersWithCommonBooks(currentUserId);
  
  return (
    <div className="explore-page">
      <Navigation activePage="explore" />
      
      <div className="hero-section">
        <div className="container">
          <h1>Explore Connections</h1>
          <p className="subtitle">Discover readers with similar literary tastes</p>
        </div>
      </div>
      
      <div className="container">
        <section className="connections-section">
          <h2>Readers with Books in Common</h2>
          <div className="connections-grid">
            {connections.map(({ user, commonBooks, commonCount }) => (
              <div className="connection-card" key={user.id}>
                <div className="connection-header">
                  <div className="user-avatar">
                    <img src={user.avatar} alt={user.name} />
                  </div>
                  <div className="user-info">
                    <h3>{user.name}</h3>
                    <p className="location">{user.location}</p>
                    <p className="common-count">{commonCount} books in common</p>
                  </div>
                </div>
                
                <div className="user-bio">
                  <p>{user.bio}</p>
                </div>
                
                <div className="reading-vibes">
                  {user.readingVibe.slice(0, 3).map((vibe, index) => (
                    <span key={index} className="vibe-tag">{vibe}</span>
                  ))}
                </div>
                
                <div className="common-books">
                  <h4>Books you both enjoy</h4>
                  <div className="mini-book-grid">
                    {commonBooks.map(book => (
                      <Link href={`/book/${book.id}`} key={book.id}>
                        <a className="mini-book">
                          <img src={book.coverImage} alt={book.title} />
                          <span className="mini-book-title">{book.title}</span>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="connection-actions">
                  <Link href={`/profile/${user.id}`}>
                    <a className="btn btn-secondary">View Profile</a>
                  </Link>
                  <button className="btn btn-primary">Connect</button>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="search-section">
          <h2>Find Specific Readers</h2>
          <div className="search-container">
            <div className="search-form">
              <div className="form-group">
                <label htmlFor="bookTitle">Search by Book</label>
                <input type="text" id="bookTitle" placeholder="Enter book title or author" />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="genre">Genre</label>
                  <select id="genre">
                    <option value="">Any Genre</option>
                    <option value="fiction">Fiction</option>
                    <option value="non-fiction">Non-Fiction</option>
                    <option value="science-fiction">Science Fiction</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="mystery">Mystery</option>
                    <option value="biography">Biography</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input type="text" id="location" placeholder="City or zip code" />
                </div>
              </div>
              
              <div className="form-group">
                <label>Reading Vibes</label>
                <div className="vibe-options">
                  <label className="vibe-checkbox">
                    <input type="checkbox" name="vibes" value="fiction-explorer" />
                    <span>Fiction Explorer</span>
                  </label>
                  <label className="vibe-checkbox">
                    <input type="checkbox" name="vibes" value="deep-thinker" />
                    <span>Deep Thinker</span>
                  </label>
                  <label className="vibe-checkbox">
                    <input type="checkbox" name="vibes" value="character-driven" />
                    <span>Character-Driven</span>
                  </label>
                  <label className="vibe-checkbox">
                    <input type="checkbox" name="vibes" value="classic-appreciator" />
                    <span>Classic Appreciator</span>
                  </label>
                </div>
              </div>
              
              <button type="submit" className="btn btn-primary">Search</button>
            </div>
          </div>
        </section>
        
        <section className="book-clubs-section">
          <h2>Book Clubs Near You</h2>
          <div className="book-clubs-grid">
            <div className="book-club-card">
              <div className="book-club-image">
                <img src="/images/book-club1.jpg" alt="Literary Explorers" />
              </div>
              <h3>Literary Explorers</h3>
              <p className="members">24 members</p>
              <p className="description">A diverse group exploring contemporary fiction and classics alike.</p>
              <button className="btn btn-primary">Join Club</button>
            </div>
            
            <div className="book-club-card">
              <div className="book-club-image">
                <img src="/images/book-club2.jpg" alt="Science Fiction & Fantasy Readers" />
              </div>
              <h3>Science Fiction & Fantasy Readers</h3>
              <p className="members">42 members</p>
              <p className="description">For those who love to explore new worlds and imaginative stories.</p>
              <button className="btn btn-primary">Join Club</button>
            </div>
            
            <div className="book-club-card">
              <div className="book-club-image">
                <img src="/images/book-club3.jpg" alt="Non-Fiction Knowledge Seekers" />
              </div>
              <h3>Non-Fiction Knowledge Seekers</h3>
              <p className="members">18 members</p>
              <p className="description">Discussing thought-provoking non-fiction across various subjects.</p>
              <button className="btn btn-primary">Join Club</button>
            </div>
          </div>
        </section>
      </div>
      
      <style jsx>{`
        .hero-section {
          background-color: var(--primary-color);
          color: white;
          padding: 3rem 0;
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .hero-section h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
        }
        
        section {
          margin-bottom: 4rem;
        }
        
        section h2 {
          color: var(--primary-color);
          margin-bottom: 1.5rem;
          text-align: center;
        }
        
        .connections-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        .connection-card {
          background-color: white;
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          padding: 1.5rem;
        }
        
        .connection-header {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .user-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
        }
        
        .user-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .user-info h3 {
          margin-bottom: 0.25rem;
          color: var(--primary-color);
        }
        
        .location, .common-count {
          font-size: 0.9rem;
          color: var(--light-text);
          margin: 0.25rem 0;
        }
        
        .common-count {
          font-weight: 600;
          color: var(--primary-color);
        }
        
        .user-bio {
          margin-bottom: 1rem;
        }
        
        .reading-vibes {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        
        .vibe-tag {
          background-color: var(--secondary-color);
          color: var(--primary-color);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.85rem;
        }
        
        .common-books {
          margin-bottom: 1.5rem;
        }
        
        .common-books h4 {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }
        
        .mini-book-grid {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }
        
        .mini-book {
          width: 80px;
          text-align: center;
        }
        
        .mini-book img {
          width: 100%;
          height: 120px;
          object-fit: cover;
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          margin-bottom: 0.5rem;
        }
        
        .mini-book-title {
          font-size: 0.8rem;
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .connection-actions {
          display: flex;
          gap: 1rem;
        }
        
        .btn {
          padding: 0.75rem 1.5rem;
          border-radius: var(--border-radius);
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          flex: 1;
          text-align: center;
        }
        
        .btn-primary {
          background-color: var(--primary-color);
          color: white;
        }
        
        .btn-primary:hover {
          background-color: #5a3d7a;
        }
        
        .btn-secondary {
          background-color: var(--secondary-color);
          color: var(--primary-color);
        }
        
        .btn-secondary:hover {
          background-color: #e6ddd6;
        }
        
        .search-container {
          background-color: var(--secondary-color);
          border-radius: var(--border-radius);
          padding: 2rem;
        }
        
        .search-form {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-row {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .form-row .form-group {
          flex: 1;
          margin-bottom: 0;
        }
        
        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }
        
        input, select {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: var(--border-radius);
          font-family: inherit;
          font-size: 1rem;
        }
        
        .vibe-options {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .vibe-checkbox {
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        
        .vibe-checkbox input {
          width: auto;
          margin-right: 0.5rem;
        }
        
        .book-clubs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .book-club-card {
          background-color: white;
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          overflow: hidden;
        }
        
        .book-club-image {
          height: 160px;
          overflow: hidden;
        }
        
        .book-club-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .book-club-card h3 {
          padding: 1rem 1rem 0.5rem;
          color: var(--primary-color);
        }
        
        .members {
          padding: 0 1rem;
          color: var(--light-text);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        
        .description {
          padding: 0 1rem 1rem;
          font-size: 0.95rem;
        }
        
        .book-club-card .btn {
          margin: 0 1rem 1rem;
          display: block;
        }
        
        @media (min-width: 768px) {
          .connections-grid {
            grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
          }
        }
      `}</style>
    </div>
  );
}
