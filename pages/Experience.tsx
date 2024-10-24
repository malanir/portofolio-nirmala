const Experience = () => {
    return (
      <section className="container mx-auto p-4 flex flex-col items-center" id="experience">
        <h1 className="text-5xl font-bold text-black mb-10">Experiences</h1>
        
        <div className="relative border-l-4 border-gray-300 max-w-4xl">
            {/* Timeline Item 1 */}
          <div className="mb-12 flex items-center">
            {/* <div className="w-40 text-yellow-500 font-semibold text-2xl text-right pr-4">2017-2018</div>  //opsional mau make tahun atau engga */}
            <div className="ml-10 bg-pink-100 p-6 rounded-lg shadow-lg w-full">
              <h2 className="text-2xl font-bold text-purple-700">Prestasi Akademik</h2>
                <p className="text-lg text-gray-700">Selama masa pendidikan, saya berhasil mencapai prestasi akademik yang luar biasa dengan meraih ranking 1  
                secara berturut-turut dari kelas 4 hingga kelas 6 SD, namun ketika saya SMP saya hanya mampu masuk ke dalam peringkat 10 besar,bagi saya masuk 10 besar saja sudah membuat saya senang,karena saya dapat bersaing dengan murid murid pintar lainnya di kelas. SMP saya termasuk dalam SMP favorite di wilayah saya, makanya banyak anak pintar yang bersaing.
                </p>
            </div>
            <div className="absolute w-4 h-4 bg-purple-800 rounded-full -left-2.5"></div>
          </div>
  

            {/* Timeline Item 2 */}
          <div className="mb-12 flex items-center">
            {/* <div className="w-40 text-yellow-500 font-semibold text-2xl text-right pr-4">2017-2018</div>  //opsional mau make tahun atau engga */}
            <div className="ml-10 bg-pink-100 p-6 rounded-lg shadow-lg w-full">
              <h2 className="text-2xl font-bold text-purple-700">Prestasi Organisasi</h2>
                <p className="text-lg text-gray-700">Tidak hanya itu, saya juga aktif dalam kegiatan organisasi. Salah satu pencapaian yang saya banggakan adalah 
                ketika saya meraih juara 2 tingkat Nasional Fighting dalam lomba Taekwondo di Gor Ciracas Cibubur. Pengalaman ini membuat saya percaya diri dengan hasil latihan saya setiap malam dan melindungi diri saya ketika ada orang jahat.
                </p>
            </div>
            <div className="absolute w-4 h-4 bg-purple-800 rounded-full -left-2.5"></div>
          </div>

            {/* Timeline Item 3 */}
          <div className="mb-12 flex items-center">
            {/* <div className="w-40 text-yellow-500 font-semibold text-2xl text-right pr-4">2017-2018</div>  //opsional mau make tahun atau engga */}
            <div className="ml-10 bg-pink-100 p-6 rounded-lg shadow-lg w-full">
              <h2 className="text-2xl font-bold text-purple-700">Prestasi Seni</h2>
                <p className="text-lg text-gray-700">Saya pernah ikut lomba kaligrafi antar sekolah dan mendapat juara 2. Pengalaman ini memberikan kesempatan untuk mengekspresikan diri 
                melalui seni dan meningkatkan rasa percaya diri.
                </p>
            </div>
            <div className="absolute w-4 h-4 bg-purple-800 rounded-full -left-2.5"></div>
          </div>

        </div>
      </section>
    );
  };
  
  export default Experience;