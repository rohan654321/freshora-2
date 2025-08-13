// src/components/SchedulePickupModal.tsx

'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation'; // Correct import for App Router
import React from 'react';

// --- STYLES ---
// CSS has been converted to a JS object to avoid resolution errors.
const styles = {
  modalOverlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px', // smaller padding for mobile
    boxSizing: 'border-box' as const,
    overflowY: 'auto' as const,
  },
  modalContent: {
    background: '#fff',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '95%',
    width: '100%',
    boxShadow: '0 5px 25px rgba(0,0,0,0.15)',
    position: 'relative' as const,
    boxSizing: 'border-box' as const,
  },
  closeButton: {
    position: 'absolute' as const,
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    lineHeight: 1,
    cursor: 'pointer',
    color: '#888',
    fontWeight: 300,
  },
  modalTitle: {
    fontSize: '1.75rem',
    fontWeight: 600,
    marginBottom: '16px',
    color: '#1e293b',
    textAlign: 'left' as const,
    boxSizing: 'border-box' as const,
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
    position: 'relative' as const,
  },
  formRow: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap' as const,
  },
  formGroup: {
    flex: 1,
    minWidth: '120px',
    position: 'relative' as const,
  },
  formControl: {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '6px',
    border: '1px solid #d1d5db',
    fontSize: '0.9rem',
    color: '#374151',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box' as const,
  },
  textarea: {
    minHeight: '100px',
    resize: 'vertical' as const,
    width: '100%',
    padding: '10px 12px',
    borderRadius: '6px',
    border: '1px solid #d1d5db',
    fontSize: '0.9rem',
    color: '#374151',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box' as const,
  },
  dateIcon: {
    position: 'absolute' as const,
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#6b7280',
    pointerEvents: 'none' as const,
    fontSize: '1rem',
  },
  submitButton: {
    background: '#22c55e',
    color: '#fff',
    padding: '12px 20px',
    borderRadius: '6px',
    border: 'none',
    fontWeight: 600,
    fontSize: '0.95rem',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    marginTop: '8px',
    alignSelf: 'flex-start' as const,
  },
  loadingOverlay: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(255, 255, 255, 0.9)',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    fontSize: '1rem',
    fontWeight: 500,
    padding: '10px',
  },
  statusMessage: {
    textAlign: 'center' as const,
    fontSize: '1rem',
    fontWeight: 500,
    padding: '20px 0',
  },
  successText: { color: '#16a34a' },
  errorText: { color: '#dc2626' },
};

// --- END STYLES ---


// Props for the component
interface SchedulePickupModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SchedulePickupModal({ open, onClose }: SchedulePickupModalProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: 'Laundry Service', // Default value
    pickupDate: '',
    deliveryDate: '',
    comment: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // NOTE: Update the API endpoint if it's different
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // On success, redirect to the thank you page after a short delay
        setStatus('success');
        setResponseMessage('Your pickup has been scheduled successfully!');
        setTimeout(() => {
            router.push('/thankYou');
        }, 2000); // 2-second delay before redirecting
      } else {
        // Handle server errors or invalid responses
        const result = await response.json();
        setStatus('error');
        setResponseMessage(result.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      // Handle network errors
      console.error('Submission error:', error);
      setStatus('error');
      setResponseMessage('A network error occurred. Please check your connection.');
    }
  };

  // Don't render the modal if it's not open
  if (!open) return null;

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <button onClick={onClose} style={styles.closeButton}>&times;</button>
        <h2 style={styles.modalTitle}>Schedule a Pickup</h2>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          {status === 'loading' && <div style={styles.loadingOverlay}>Sending...</div>}
          
          {status === 'success' || status === 'error' ? (
            <div style={styles.statusMessage}>
                <p style={status === 'success' ? styles.successText : styles.errorText}>
                    {responseMessage}
                </p>
                {status === 'success' && <p>Redirecting you now...</p>}
            </div>
          ) : (
            <>
              {/* Form Fields */}
              <div style={styles.formGroup}>
                <input name="name" type="text" placeholder="Your Name *" required value={formData.name} onChange={handleChange} style={styles.formControl} />
              </div>
              
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <input name="email" type="email" placeholder="Your e-mail address *" required value={formData.email} onChange={handleChange} style={styles.formControl} />
                </div>
                <div style={styles.formGroup}>
                  <input name="phone" type="tel" placeholder="Your phone number" value={formData.phone} onChange={handleChange} style={styles.formControl} />
                </div>
              </div>

              <div style={styles.formGroup}>
                <input name="address" type="text" placeholder="Address *" required value={formData.address} onChange={handleChange} style={styles.formControl} />
              </div>

              <div style={styles.formGroup}>
                <select name="service" required value={formData.service} onChange={handleChange} style={styles.formControl}>
                  <option value="Laundry Service">Laundry Service</option>
                  <option value="Dry Cleaning Service">Dry Cleaning Service</option>
                  <option value="Express Laundry Service">Express Laundry Service</option>
                  <option value="Commercial Laundry Service">Commercial Laundry Service</option>
                  <option value="Carpet Cleaning Service">Carpet Cleaning Service</option>
                  <option value="Curtain Cleaning Service">Curtain Cleaning Service</option>
                  <option value="Dress Alternation Service">Dress Alternation Service</option>
                  <option value="Bag & Shoe Spa">Bag & Shoe Spa</option>
                  <option value="Wedding Dress Cleaning & Restoration">Wedding Dress Cleaning & Restoration</option>
                  <option value="Soft Toy Cleaning Service">Soft Toy Cleaning Service</option>
                </select>
              </div>

              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <input name="pickupDate" type="text" placeholder="Pick-Up Date" required value={formData.pickupDate} onChange={handleChange} onFocus={(e) => e.target.type='date'} onBlur={(e) => e.target.type='text'} style={styles.formControl} />
                  <span style={styles.dateIcon}>&#128197;</span>
                </div>
                <div style={styles.formGroup}>
                  <input name="deliveryDate" type="text" placeholder="Delivery Date" required value={formData.deliveryDate} onChange={handleChange} onFocus={(e) => e.target.type='date'} onBlur={(e) => e.target.type='text'} style={styles.formControl} />
                   <span style={styles.dateIcon}>&#128197;</span>
                </div>
              </div>

              <div style={styles.formGroup}>
                <textarea name="comment" placeholder="Your comment" value={formData.comment} onChange={handleChange} style={{...styles.formControl, ...styles.textarea}} />
              </div>
              
              <button type="submit" style={styles.submitButton} disabled={status === 'loading'}>
                Order Now
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
