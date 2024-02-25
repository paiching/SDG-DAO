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
        <div className={styles.minted}><p>97 / 10,000,000  - SDG 發行</p>
        </div><div className={styles.mtop10px}>
        <button className={styles.button}>鑄幣贊助</button>
        <button className={styles.button}>馬上提案</button>
        </div> 
        <div className={styles.mtop10px}><p>完成任務並蒐集NFT成為行動達人</p>
        <Link href="/explore">
            <div className={`${styles.link} cursor-pointer`}>了解更多</div>
          </Link>
        </div>
        {/* <p>目前兌換 1 ETH : 30 SDG</p> */}
                  
         
      
      </div>
    </section>
  );
};

export default FeatureSection;
