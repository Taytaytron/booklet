import React from 'react';
import Navigation from '../components/Navigation';
import BookCard from '../components/BookCard';
import Link from 'next/link';
import { books, getShareableBooks } from '../data/mockData';

export default function Sharing() {
  const shareableBooks = getShareableBooks();
  
  return (
    <div className="sharing-page">
      <Navigation activePage="sharing" />
      
      <div className="hero-section">
        <div className="container">
          <h1>Book Sharing</h1>
          <p className="subtitle">Exchange books with fellow readers in your community</p>
        </div>
      </div>
      
      <div className="container">
        <section className="available-books">
          <h2>Available Books</h2>
          <div className="book-grid">
            {shareableBooks.map(book => (
              <div className="sharing-book-card" key={book.id}>
                <Link href={`/book/${book.id}`}>
                  <a>
                    <BookCard book={book} />
                  </a>
                </Link>
                <div className="sharing-details">
                  <p className="format">{book.sharingFormat}</p>
                  <p className="condition">{book.sharingCondition}</p>
                  <button className="btn btn-primary">Request</button>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="share-your-books">
          <h2>Share Your Books</h2>
          <div className="share-form-container">
            <div className="share-info">
              <h3>How it works</h3>
              <ul>
                <li>List books you're willing to share with the community</li>
                <li>Specify the format (paperback, hardcover, e-book) and condition</li>
                <li>Connect with readers who request your books</li>
                <li>Arrange pickup or delivery within your local area</li>
              </ul>
              <p>Sharing books builds community and gives your beloved stories new life!</p>
            </div>
            
            <div className="share-form">
              <h3>Add a book to share</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="bookTitle">Book Title</label>
                  <input type="text" id="bookTitle" placeholder="Enter book title" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="bookAuthor">Author</label>
                  <input type="text" id="bookAuthor" placeholder="Enter author name" />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="bookFormat">Format</label>
                    <select id="bookFormat">
                      <option value="">Select format</option>
                      <option value="paperback">Paperback</option>
                      <option value="hardcover">Hardcover</option>
                      <option value="ebook">E-book</option>
                      <option value="audiobook">Audiobook</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="bookCondition">Condition</label>
                    <select id="bookCondition">
                      <option value="">Select condition</option>
                      <option value="like-new">Like New</option>
                      <option value="good">Good</option>
                      <option value="well-loved">Well-loved</option>
                      <option value="digital">Digital Copy</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="bookDescription">Description (Optional)</label>
                  <textarea id="bookDescription" placeholder="Add any notes about your book"></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor="bookCover">Upload Cover Image (Optional)</label>
                  <input type="file" id="bookCover" />
                </div>
                
                <button type="submit" className="btn btn-primary">Add Book</button>
              </form>
            </div>
          </div>
        </section>
        
        <section className="sharing-guidelines">
          <h2>Community Guidelines</h2>
          <div className="guidelines-grid">
            <div className="guideline-card">
              <div className="guideline-icon">📚</div>
              <h4>Respect Books</h4>
              <p>Return borrowed books in the same condition you received them.</p>
            </div>
            <div className="guideline-card">
              <div className="guideline-icon">🤝</div>
              <h4>Be Reliable</h4>
              <p>Honor your commitments for pickup and return times.</p>
            </div>
            <div className="guideline-card">
              <div className="guideline-icon">💬</div>
              <h4>Communicate</h4>
              <p>Keep in touch with lenders/borrowers about any changes.</p>
            </div>
            <div className="guideline-card">
              <div className="guideline-icon">⭐</div>
              <h4>Leave Feedback</h4>
              <p>Share your experience to help build a trusted community.</p>
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
        
        .book-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 2rem;
        }
        
        .sharing-book-card {
          display: flex;
          flex-direction: column;
        }
        
        .sharing-details {
          margin-top: 1rem;
          text-align: center;
        }
        
        .format, .condition {
          margin: 0.25rem 0;
          font-size: 0.9rem;
          color: var(--light-text);
        }
        
        .btn {
          padding: 0.5rem 1rem;
          border-radius: var(--border-radius);
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          margin-top: 0.5rem;
        }
        
        .btn-primary {
          background-color: var(--primary-color);
          color: white;
        }
        
        .btn-primary:hover {
          background-color: #5a3d7a;
        }
        
        .share-form-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          background-color: var(--secondary-color);
          border-radius: var(--border-radius);
          padding: 2rem;
        }
        
        .share-info ul {
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .share-info li {
          margin-bottom: 0.5rem;
        }
        
        .share-form {
          background-color: white;
          border-radius: var(--border-radius);
          padding: 2rem;
          box-shadow: var(--box-shadow);
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
        
        input, select, textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: var(--border-radius);
          font-family: inherit;
          font-size: 1rem;
        }
        
        textarea {
          min-height: 100px;
          resize: vertical;
        }
        
        .guidelines-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1.5rem;
        }
        
        .guideline-card {
          background-color: white;
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          padding: 1.5rem;
          text-align: center;
        }
        
        .guideline-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        
        .guideline-card h4 {
          color: var(--primary-color);
          margin-bottom: 0.75rem;
        }
        
        @media (min-width: 768px) {
          .share-form-container {
            flex-direction: row;
          }
          
          .share-info, .share-form {
            flex: 1;
          }
        }
      `}</style>
    </div>
  );
}
