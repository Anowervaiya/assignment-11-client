import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

export default function Banner() {
  return (
    <>
      {/*  */}
      <div
        className=" hero  md:min-h-[80vh] "
        style={{
          background: `url('https://i.ibb.co/x2KssYF/education-background-with-books-ceiling-lamp-53876-115359.jpg')`,
          backgroundRepeat: 'no-repeat',

          // backgroundPosition: 'center',
          backgroundSize: 'cover', // Optional: Adjust background size as needed
          // Optional: Adjust background position as needed
        }}
      >
        <div className="hero-content h-[80vh] flex-col lg:flex-row-reverse">
          <Fade direction="right">
            <img
              src="https://i.ibb.co/tQ8KfQD/photo-1581291518857-4e27b48ff24e.jpg"
              className="w-[250px] md:w-[300px] rounded-lg flex-1"
            />
          </Fade>
          <Fade direction="left">
            <div className="flex-1">
              <h1 className="text-3xl lg:text-5xl  font-bold">
                {' '}
                <Typewriter
                  words={[
                    'Write Your own assingment',
                    'Write an assignment what you want ',
                    'Write an assignment what you love ',
                    'Write Your passionate assignment ',
                  ]}
                  cursor
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  loop={20}
                />
              </h1>
              <p className="py-6 ">
                Group study makes it easy for you to continue your study
                conveniently <br /> and manage study for exam!
              </p>
              {/* buttons  */}
              <a
                href="https://anowervaiya.github.io/cpa-lockers/"
                class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-white rounded-full shadow-md group"
              >
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
                <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease ">
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
