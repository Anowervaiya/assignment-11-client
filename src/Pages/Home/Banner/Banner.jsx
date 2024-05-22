import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

export default function Banner() {
  return (
    <>
      {/*  */}
      <div
        className=" md:min-h-[80vh]  "
        style={{
          background: `url('https://i.ibb.co/HgKCcZ6/mikolaj-DCzpr09c-TXY-unsplash.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition:'fixed'
        }}
      >
        <div className=" flex justify-center items-center flex-col h-[100vh]">
          <Fade direction="left" duration={2000} delay={300}>
            {' '}
            <h1 className="text-3xl text-white lg:text-5xl  font-bold">
              {' '}
              <Typewriter
                words={[
                  'Write Your own assingment',
                  'Write an assignment what you want ',
                  'Write an assignment what you love ',
                  'Write Your passionate assignment ',
                ]}
                cursor
                cursorColor='blue'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                loop={20}
              
              />
            </h1>
          </Fade>
          <Fade direction="left" delay={500} duration={2000}>
            <div className="text-center">
              <p className="py-6 w-[90vw] text-center text-white mx-auto ">
                Group study makes it easy for you to continue your study
                conveniently and manage study for exam!
              </p>
              {/* buttons  */}
              <a class="relative cursor-pointer inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-cyan-100 group-hover:translate-x-0 ease">
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease text-white ">
                  Learn More...
                </span>
                <span class="relative invisible  ">Learn More...</span>
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}
