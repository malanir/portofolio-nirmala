// components/Home.tsx

import Image from 'next/image';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />

      <main className='container mx-auto flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-yellow-200 via-purple-200 to-green-200'>
        <div className='text-center'>
          <Image
            src='/mala.jpg' // Pastikan gambar ini ada di folder public
            alt='Foto Mala'
            width={256}
            height={256}
            className='rounded-full object-cover mx-auto mb-4'
          />
          <h1 className='text-4xl font-bold text-black mb-2'>
            I&apos;am nirmala
          </h1>
          <p className='font marker: text-ellipsis text-2xl text-gray-700 mb-4'>
            Halo, saya Aisyah Nirmala Sari,saya salah satu murid SMK Negeri 21
            Jakarta. Saya cukup aktif di salah satu ekskul disekolah,yaitu
            Pramuka karena saya mempunyai pengalaman ketika SD. Jika weekend
            saya menggunakan waktu saya hanya untuk beristirahat atau terkadang
            saya mencoba membuat makanan karena bagi saya itu merupakan salah
            satu cara untuk mengekspresikan mood.
          </p>
          <a
            href='/about'
            className='px-6 py-2 text-white bg-blue-800 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-blue-300'>
            Contact me
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
