// components/FeatureSection.tsx
import React, { useState, useEffect } from 'react';
import styles from './FeatureSection.module.scss';
import Link from 'next/link';

const images = [
  '/feature-bg.png', // Replace with your image paths
  '/feature-bg.png',
  // ...add as many images as you like
];

const FeatureSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.featureSection} style={{ backgroundImage: `url(${images[activeIndex]})` }}>
      <div className={styles.content}>
        <h1 className={styles.contentTitle }>SDG 行動幣募資</h1>
        <p>97 / 5555  - SDG 發行</p>
        <button className={styles.button}>鑄幣贊助</button>
        <button className={styles.button}>馬上提案</button>
        <p>完成任務並蒐集NFT成為行動達人</p>
        <p>目前兌換 1 ETH : 30 SDG</p>
        <p>           
          <Link href="/explore">
            <div className={`${styles.link} px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer`}>了解更多</div>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default FeatureSection;
