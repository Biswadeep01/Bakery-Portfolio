"use client"; 
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image src="/assets/LOGO.jpg" alt="Layer Bites" width={60} height={60} style={{borderRadius: 50}}/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" style={{filter: 'invert(1)'}}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/#about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/#special">Offers</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/bakery">Shops</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/#contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}