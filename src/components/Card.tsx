// components/Card.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  imageUrl: string;
  linkUrl: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, linkUrl }) => {
  return (
    <div className="block p-4 text-center transition duration-300 ease-in-out transform hover:scale-105">
      <Link href={linkUrl} passHref>
  
          <Image src={imageUrl} alt={title} width={200} height={200} objectFit="contain" />
          {/* <h2 className="mt-2 text-lg">{title}</h2> */}
      
      </Link>
    </div>
  );
};

export default Card;
