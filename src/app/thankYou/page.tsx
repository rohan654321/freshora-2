'use client'
import Link from 'next/link';
import { CheckCircle } from 'lucide-react'; // Import the icon

export default function ThankYouPage() {
  return (
    // Main container to center the content on the page
    <main style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 80px)', // Adjust height to account for a potential header
      backgroundColor: '#f1f5f9', // A neutral, modern background color
      padding: '2rem',
    }}>
      {/* The card element, mirroring the hero form's container */}
      <div style={{
        background: 'white',
        borderRadius: '16px', // Matching the form's border-radius
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)', // A similar subtle shadow
        padding: '3rem 2.5rem',
        textAlign: 'center',
        maxWidth: '500px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #e2e8f0',
      }}>
        {/* The success icon from Lucide */}
        <CheckCircle
          size={72} // A prominent size for the icon
          color="#16a34a" // Using the primary green from your hero button
          style={{ marginBottom: '1.5rem' }}
        />

        {/* The main heading */}
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#1e293b', // Dark slate color, matching hero text context
          marginBottom: '1rem',
        }}>
          Thank You!
        </h1>

        {/* The descriptive sub-text */}
        <p style={{
          fontSize: '1.1rem',
          color: '#475569', // A softer gray for the paragraph
          marginBottom: '2.5rem',
          lineHeight: '1.6',
        }}>
          Your enquiry has been submitted successfully. Our team will review it and get back to you within 24 hours.
        </p>

        {/* The "Go Home" button, styled like the form's submit button */}
        <Link
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            backgroundColor: '#2563eb', // Blue from the form's submit button
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            transition: 'opacity 0.2s ease-in-out',
            boxShadow: '0 2px 8px rgba(37, 99, 235, 0.2)',
          }}
          onMouseOver={e => e.currentTarget.style.opacity = '0.9'}
          onMouseOut={e => e.currentTarget.style.opacity = '1'}
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}