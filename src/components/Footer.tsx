// components/Footer.tsx

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-gray-600 bg-white body-font dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-gray-200">
          <Image 
            src="/IMG_1292.jpg" 
            alt="CodeWithZohaib Logo" 
            width={48} 
            height={48} 
            className="rounded-full h-12" 
          />
          <div className="ml-3 text-xl">CodeWithZohaib</div>
        </div>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 mt-4 md:mt-2 mb-2 md:mb-0 text-center dark:text-gray-400">
          Copyright © 2024 CodeWithZohaib.com
        </p>
        <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start" style={{ alignItems: 'center' }}>
          <Link href="https://www.facebook.com/profile.php?id=100090930050044" aria-label="facebook" target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-300">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </Link>
          <Link href="https://www.twitter.com/codewithCodeWithZohaib" aria-label="twitter" target="_blank" rel="noreferrer" className="ml-3 text-gray-500 dark:text-gray-300">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </Link>
          <Link href="https://www.instagram.com/zuhaibalid/" aria-label="instagram" target="_blank" rel="noreferrer" className="ml-3 text-gray-500 dark:text-gray-300">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </Link>
          <Link href="https://github.com/DotZohaib/" aria-label="github" target="_blank" rel="noreferrer" className="ml-3 text-gray-500 dark:text-gray-300">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
