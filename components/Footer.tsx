import {
    FaInstagram,
    FaWhatsapp,
    FaGithub,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
  } from 'react-icons/fa';
  
  const Footer = () => {
    return (
      <footer id='footer' className='bg-purple-500 text-white py-10'>
        <div
          id='footer-container'
          className='container mx-auto px-4 flex flex-col items-center'>
          <h3 id='footer-title' className='text-lg font-bold mb-4 text-center'>
            Contact me
          </h3>
  
          {/* Contact Email */}
          <div id='footer-email' className='flex items-center space-x-2 mb-2'>
            <FaEnvelope size={18} />
            <p className='text-sm'>aisyahnirmalasari2008@gmail.com</p>
          </div>
  
          {/* Contact Phone */}
          <div id='footer-phone' className='flex items-center space-x-2 mb-2'>
            <FaPhone size={18} />
            <p className='text-sm'>123-456-789</p>
          </div>
  
          {/* Contact Address */}
          <div id='footer-address' className='flex items-center space-x-2 mb-2'>
            <FaMapMarkerAlt size={18} />
            <p className='text-sm'>Indonesia, Jakarta, Tj Priok</p>
          </div>
  
          {/* Social Media Icons */}
          <div id='footer-social' className='flex space-x-4 mt-4'>
          <a href="https://www.instagram.com/aisnrmlsr?igsh=ZjgwMThoZnNxOTQ5" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition duration-300 transform hover:scale-105">
              <FaInstagram size={20} />
            </a>
            <a
              href='https://www.whatsapp.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-white transition'>
              <FaWhatsapp size={24} />
            </a>
            <a
      href='https://github.com/malanir'
      target='_blank'
      rel='noopener noreferrer'
      className='text-gray-400 hover:text-white transition'>
      <FaGithub size={24} />
  </a>
  
          </div>
  
          <div id='footer-copyright' className='mt-8 text-xs text-gray-400'>
            <p>&copy; {new Date().getFullYear()} Copyright Aisyah Nirmala</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  