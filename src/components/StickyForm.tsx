// DonationForm.tsx
import React, { useState } from 'react';
import styles from './StickyForm.module.css';

const DonationForm: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the form submission
    alert(`Donating amount: ${selectedAmount}`);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label className={styles.label}>購買SDG Token</label>
        <label className={styles.label}>目前價格 1 Eth : 200 SDG</label>
        <div>
          {/* These buttons can be clicked to select a donation amount */}
          {['600', '800', '1000'].map((amount) => (
            <button
              type="button"
              key={amount}
              className={`${styles.button} ${selectedAmount === amount ? styles.selectedAmount : ''}`}
              onClick={() => setSelectedAmount(amount)}
            >
              {amount} SDG
            </button>
          ))}
        </div>
      </div>
      <input
        className={styles.input}
        type="text"
        placeholder="姓名"
        name="name"
      />
      <input
        className={styles.input}
        type="email"
        placeholder="電子郵件"
        name="email"
      />
      <button className={styles.button} type="submit">
        成為ESG DAO會員
      </button>
    </form>
  );
};

export default DonationForm;
