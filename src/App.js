import './App.css';
import "./index.css";
import { BsFillMoonStarsFill, BsGithub, } from 'react-icons/bs';
import { AiFillLinkedin, AiFillTwitterCircle, } from 'react-icons/ai';
import logo from "./images/Untitled.jpg"
import devImg from "./images/dev-ed-wave.png"
import mobile from "./images/iphone.png"
import upsales from "./images/profits.png"
import cart from "./images/shopping-cart.png"
import high from "./images/high-performance.png"
import resume from "./images/Koyejo 's Resume-hackerresume.pdf"



function App() {
  return (
    <div className="bg-teal-400 px-5 md:px-20">
      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <img src={logo} alt="Looks" height="30px" width="30px" />
          <ul className='flex items-center'>
            <li className='shizzy font-bold ml-4 cursor-pointer'>Home</li>
            <li className='shizzy font-bold ml-4 cursor-pointer '>Contact</li>
            <li className='shizzy font-bold ml-4 cursor-pointer '>About Me</li>
            <li><BsFillMoonStarsFill className='cursor-pointer text-xl ml-2' /></li>
            <a href="./images/Koyejo 's Resume-hackerresume.pdf" download={resume}> <button title='Download Resume' className=' bg-gradient-to-r  from-cyan-600 to-teal-400 text-white py-1 px-2 ml-5 rounded-lg'>Download Resume</button></a>
          </ul>
        </nav>
        <div className='text-center p-3'>
          <div className='relative mx-auto bg-gradient-to-b from-teal-400 rounded-full w-80 h-80 mt-20 hover:scale-125 transition-all duration-500'>
            <img src={devImg} alt="Img" />
          </div>
          <h2 className='text-5xl py-4 text-teal-500 font-ericka'>KOYEJO OYERINDE</h2>
          <h3 className='text-2xl py-2 text-teal-950'>Developer and Designer.</h3>
          <p className='text-lg leading-8 text-green-500 font-burtons'> Hello, I'm Koyejo Oyerinde, a passionate and dedicated web developer seeking new opportunities to contribute to exciting projects. With a strong foundation in Web development and a keen eye for design, I invite you to explore my portfolio and discover the value I can bring to your projects.
            By collaborating with me, you'll gain a strategic partner who is not only passionate about crafting remarkable websites but also dedicated to understanding your unique business needs. I thrive on building long-lasting relationships, where open communication and shared goals drive our success together.
          </p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-5 text-gray-400'>
          <AiFillTwitterCircle className='hover:text-blue-400' />
          <AiFillLinkedin className='hover:text-blue-600' />
          <a href="https://github.com/20boy"><BsGithub className='hover:text-black' title='GitHub Page' /></a>


        </div>

      </section>
      <section>
        <div className='mt-20 mb-10'>
          <h3 className='text-3xl py-2 text-center font-ericka'>
            Services On Offer
          </h3>
          <p className='text-md leading-8 text-teal-950'>
            As an aspiring web developer, I am thrilled to offer you a range of services that combine <span className='text-sky-400'>innovation</span>, <span className='text-sky-400'>creativity</span>, and a deep understanding of <span className='text-sky-400'>business</span> dynamics.
          </p>
        </div>
      </section>
      <div>
        <div className='text-center shadow-inner  hover:shadow-2xl hover:shadow-teal-800 rounded-xl my-9 p-10'>
          <img src={mobile} alt="Mobile" width={80} height={80} className='mx-auto' />
          <h3 className='text-2xl my-4 pt-3 font-medium'>Mobile-First Website Design</h3>
          <p>In today's fast-paced digital landscape, <span className='text-sky-400'>mobile</span> is king. I specialize in creating captivating and mobile-friendly websites that are tailor-made for smartphone users. Stand out from the crowd and ensure your website looks stunning on any device.</p>
        </div>
        <div className='text-center shadow-inner  hover:shadow-2xl hover:shadow-teal-800 rounded-xl my-9 p-10'>
          <img src={high} alt="Mobile" width={80} height={80} className='mx-auto' />
          <h3 className='text-2xl my-4 pt-3 font-medium'>Speed Optimization</h3>
          <p>Slow websites are a thing of the past. I am dedicated to optimizing your website's speed to ensure your Nigerian visitors enjoy a <span className='text-sky-400'>seamless</span>  browsing experience. By leveraging optimization techniques and locally optimized hosting solutions, we'll have your website loading faster than the <span className='text-sky-400'>Lagos traffic rush hour</span>.</p>
        </div>
        <div className='text-center shadow-inner  hover:shadow-2xl hover:shadow-teal-800 rounded-xl my-9 p-10'>
          <img src={cart} alt="Mobile" width={80} height={80} className='mx-auto' />
          <h3 className='text-2xl my-4 pt-3 font-medium'>E-commerce Solutions</h3>
          <p>Capture the booming Nigerian e-commerce market with a powerful online store. I specialize in building secure and user-friendly e-commerce platforms that cater to the unique needs of Nigerian businesses. From seamless payment integration with popular Nigerian payment gateways to localized shipping options, I'll help you tap into the growing online shopping trend in Nigeria.</p>
        </div>
        <div className='text-center  rounded-xl my-9 p-10 shadow-inner  hover:shadow-2xl hover:shadow-teal-800'>
          <img src={upsales} alt="Mobile" width={80} height={80} className='mx-auto' />
          <h3 className='text-2xl my-4 pt-3 font-medium'>Local SEO</h3>
          <p> Get your business discovered by Nigerians searching online. With my local SEO expertise, I'll optimize your website to rank higher in Nigerian search results. From targeting relevant Nigerian keywords to building quality backlinks from local directories, I'll ensure your website gets the attention it deserves from Nigerian customers.</p>
        </div>
      </div>
    </div >
  );

}

export default App;
