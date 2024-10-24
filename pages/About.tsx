// pages/about.tsx

const AboutPage = () => {
    return (
      <div className='min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200'>
        <main className='container mx-auto p-6'>
          <h1
            id='about'
            className='text-4xl font-bold text-black text-center mt-20'>
            About Me
          </h1>
          <p className='mt-6 text-lg text-gray-700 text-center max-w-2xl mx-auto'>
            Saya merupakan anak pertama dari dua bersaudara,saya memiliki adik
            laki laki. Saya sangat menyukai makanan pedas dan minuman yang manis,
            yang selalu membuat mood saya kembali ketika sedang kesal maupun
            sedih.
          </p>
          <p className='mt-4 text-lg text-gray-700 text-center max-w-2xl mx-auto'>
            Saya menyukai bela diri seperti Taekwondo, yang membuat saya dapat
            menjaga diri sendiri. Namun kebiasaan itu sudah tidak saya lakukan
            karena saya sudah tidak aktif lagi di dojang taekwondo. Dulu ketika
            saya masih SMP hampir setiap malam saya berlatih beladiri
            tersebut,walaupun membuat kaki saya sakit tetapi setidaknya kita bisa
            menjaga diri kita sendiri. Saya juga sangat menyukai membaca buku
            novel apalagi jika genre novel tersebut romance.
          </p>
          {/* Interests Section */}
          <div>
            <h2 className='text-4xl font-bold text-black text-center mt-10'>
              Things I Like To Do
            </h2>
            <div className='flex flex-wrap justify-center gap-10 mt-6'>
              <div className='flex flex-col items-center text-center'>
                <span role='img' aria-label='basketball' className='text-4xl'>
                  🥋
                </span>
                <p className='text-lg'>Taekwondo</p>
              </div>
              <div className='flex flex-col items-center text-center'>
                <span role='img' aria-label='travelling' className='text-4xl'>
                  🥘
                </span>
                <p className='text-lg'>Cooking</p>
              </div>
              <div className='flex flex-col items-center text-center'>
                <span role='img' aria-label='music' className='text-4xl'>
                  🎶
                </span>
                <p className='text-lg'>Listen To Music</p>
              </div>
              <div className='flex flex-col items-center text-center'>
                <span role='img' aria-label='movies' className='text-4xl'>
                  🎬
                </span>
                <p className='text-lg'>Watch Movies</p>
              </div>
              <div className='flex flex-col items-center text-center'>
                <span role='img' aria-label='reading' className='text-4xl'>
                  📖
                </span>
                <p className='text-lg'>Read The Novel</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  };
  
  export default AboutPage;
  