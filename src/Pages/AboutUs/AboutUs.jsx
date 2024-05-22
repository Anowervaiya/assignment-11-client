import React from 'react';
import { FaAtlas, FaBook } from 'react-icons/fa';
import { FaBookMedical } from 'react-icons/fa';
import { FaBookAtlas } from 'react-icons/fa6';
import { IoIosBook } from 'react-icons/io';

function AboutUs() {
  return (
    <section className=" min-h-screen py-16 px-6  ">
      <div className="container p-4 mx-auto space-y-1 text-center">
        <h2 className="pb-3 text-3xl font-bold  md:text-4xl">About Us</h2>
        <p className="w-2/3 mx-auto text-gray-500 pb-16   text-xl">
          Welcome to our collaborative group study platform, where students
          unite to conquer academic challenges together. Our website facilitates
          seamless interaction, offering virtual study sessions, real-time
          document sharing, and expert guidance. Join us to elevate your
          learning experience and transform study sessions into success stories.
          Let's thrive together
        </p>
      </div>
      <div className="container grid justify-center gap-4 mx-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <div className="flex flex-col px-8 py-6 bg-orange-100 rounded-[50px]">
          <FaBookMedical className="text-7xl mb-4" />
          <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-800">
            Collaborative Learning Hub
          </h2>
          <p className="flex-1 mb-4 text-base leading-relaxed text-gray-600">
            Welcome to our collaborative learning hub, where knowledge meets
            teamwork! Our platform provides a dynamic space for students to come
            together, share ideas, and conquer academic challenges as a
            community. Whether you're tackling a tough assignment, preparing for
            exams, or exploring new subjects, our group study website offers the
            perfect environment to thrive and excel together.
          </p>
          <a
            className="inline-flex items-center space-x-2 text-sm text-default-600"
            href="/components"
          >
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-col px-8 py-6 lg:border-none xl:border-solid bg-lime-100 rounded-[50px]">
          <FaBook className="text-7xl mb-4"></FaBook>
          <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-800">
            Empowering Academic Connections:
          </h2>
          <p className="flex-1 mb-4 text-base leading-relaxed text-gray-600">
            Join us on a journey of academic discovery and camaraderie! Our
            group study website is designed to connect students from around the
            globe, fostering meaningful interactions and empowering
            collaborative learning experiences. From virtual study sessions and
            interactive forums to resource sharing and peer feedback, we provide
            the tools and support you need to succeed academically and build
            lasting friendships along the way.
          </p>
          <a
            className="inline-flex items-center space-x-2 text-sm text-default-600"
            href="/sections"
          >
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-col px-8 py-6 bg-indigo-100 rounded-[50px]">
          <IoIosBook className="text-7xl mb-4"></IoIosBook>
          <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-800">
            Elevate Your Study Sessions:
          </h2>
          <p className="flex-1 mb-4 text-base leading-relaxed text-gray-600">
            Say goodbye to solitary study sessions and hello to productive
            collaboration! Our group study website elevates the traditional
            learning experience by bringing students together in a virtual study
            environment. With features like live video conferencing, real-time
            document sharing, and customizable study groups, we make it easy for
            you to connect with classmates, exchange ideas, and boost your
            academic performance.
          </p>
          <a
            className="inline-flex items-center space-x-2 text-sm text-default-600"
            href="/templates"
          >
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-col px-8 py-6 bg-emerald-100 rounded-[50px]">
          <FaAtlas className="text-7xl mb-4"></FaAtlas>
          <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-800">
            Transforming Study Sessions into Success Stories:
          </h2>
          <p className="flex-1 mb-4 text-base leading-relaxed text-gray-600">
            Unlock your full potential with our innovative group study platform!
            Designed to streamline collaboration and maximize learning outcomes,
            our website empowers students to turn study sessions into success
            stories. Whether you're seeking peer support, brainstorming ideas,
            or seeking expert guidance, our comprehensive suite of tools and
            resources is here to help you achieve your academic goals and thrive
            in your educational journey.
          </p>
          <a
            className="inline-flex items-center space-x-2 text-sm text-default-600"
            href="/docs"
          >
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
