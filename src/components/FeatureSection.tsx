// components/FeatureSection.tsx
import React from 'react';
import styles from './FeatureSection.module.css';

const FeatureSection: React.FC = () => {
  return (
    <section className={styles.featureSection}>
      {/* Overlay Content */}
      <div className={styles.overlayContent}>
        <h1>即刻開始SDG行動</h1>
        <p>發表議題並執行提案</p>
      </div>
    </section>
  );
};

export default FeatureSection;
