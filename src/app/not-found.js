import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-light">
      <h1 style={{ fontSize: '8rem', color: '#740311', fontFamily: 'var(--font-heading)' }}>404</h1>
      <h2 className="mb-4">Oops! This page has been eaten.</h2>
      <p className="lead text-muted mb-5">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      
      <Link href="/" className="btn btn-custom btn-lg">
        <i className="fas fa-home me-2"></i> Back to Bakery
      </Link>

      {/* Decorative Donut/Cookie styling (optional) */}
      <div style={{
        marginTop: '2rem',
        fontSize: '5rem',
        color: '#edcd6c',
        animation: 'spin 10s linear infinite'
      }}>
        <i className="fas fa-cookie-bite"></i>
      </div>
      
      <style>{`
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}