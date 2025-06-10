import React from 'react';

export default function BookCard({ book, size = 'normal' }) {
  const { title, author, coverImage } = book;
  
  return (
    <div className={`book-card ${size}`}>
      <div className="book-cover">
        <img src={coverImage || "/images/placeholder-book.jpg"} alt={title} />
      </div>
      <div className="book-info">
        <h4 className="book-title">{title}</h4>
        <p className="book-author">{author}</p>
      </div>
      
      <style jsx>{`
        .book-card {
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
        }
        
        .book-card:hover {
          transform: translateY(-5px);
        }
        
        .book-card.normal {
          width: 180px;
          margin: 1rem;
        }
        
        .book-card.small {
          width: 120px;
          margin: 0.5rem;
        }
        
        .book-card.large {
          width: 220px;
          margin: 1.5rem;
        }
        
        .book-cover {
          height: 260px;
          background-color: var(--secondary-color);
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--box-shadow);
        }
        
        .book-card.small .book-cover {
          height: 180px;
        }
        
        .book-card.large .book-cover {
          height: 320px;
        }
        
        .book-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .book-info {
          padding: 0.75rem 0;
        }
        
        .book-title {
          font-weight: 600;
          margin-bottom: 0.25rem;
          font-size: 1rem;
        }
        
        .book-card.small .book-title {
          font-size: 0.9rem;
        }
        
        .book-card.large .book-title {
          font-size: 1.2rem;
        }
        
        .book-author {
          color: var(--light-text);
          font-size: 0.9rem;
        }
        
        .book-card.small .book-author {
          font-size: 0.8rem;
        }
      `}</style>
    </div>
  );
}
