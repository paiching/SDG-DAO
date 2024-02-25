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
<<<<<<< HEAD
        <div className='flex'>
          <div className={styles.minted}>
            <span>
              <span className={styles.bolderGreen}>122</span> 件提案進行中 <span className={styles.bolder}>|
              </span> 已完成 <span className={styles.bolderBlue}>15</span> 件目標 <span className={styles.bolder}>|
              </span> 發行 <span className={styles.bolderOrange}>3,137</span> / 10,000,000  <span className={styles.bolder}>行動幣</span>
            </span>
          </div>
        </div>
        <div className={styles.mtop10px}><p>完成任務並解鎖NFT</p>
          <div className={styles.mtop20px}>
            <button className={styles.button}>鑄幣贊助</button>
            <button className={styles.button}>我要提案</button>
          </div>  
        {/* <Link href="/explore">
            <div className={`${styles.link} cursor-pointer`}>了解更多</div>
          </Link> */}
        </div>
        {/* <p>目前兌換 1 ETH : 30 SDG</p> */}
=======
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
                  
         
      
>>>>>>> df54ef3001cdddc4299176920638ff24b4b3a0c6
      </div>
    </section>
  );
};

export default FeatureSection;
