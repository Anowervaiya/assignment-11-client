import React from 'react'

function FAQ() {
  return (
    <div className="my-24 p-4">
      <div className="w-3/4 mx-auto">
        <h1 className="text-center text-4xl font-semibold ">
          Frequently Asked Question
        </h1>
        <p className="text-gray-600 mt-4 mb-16 text-center">
          Here have some Frequently asked question with answer
        </p>
      </div>
      <div className="collapse collapse-plus bg-base-200 border border-gray-400 mt-4">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is a group study website?
        </div>
        <div className="collapse-content">
          <p>
            A group study website is an online platform designed to facilitate
            collaborative learning among students. It allows users to create
            study groups, share resources, discuss topics, and work together on
            assignments or projects remotely.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 border border-gray-400 mt-4">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How does a group study website work?
        </div>
        <div className="collapse-content">
          <p>
            Users typically sign up for an account, create or join study groups
            based on their interests or courses, and then interact with other
            group members through features like discussion boards, file sharing,
            video conferencing, and collaborative document editing.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 border border-gray-400 mt-4">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What are the benefits of using a group study website?
        </div>
        <div className="collapse-content">
          <p>
            Group study websites promote collaboration, encourage active
            learning, provide peer support, enhance understanding of difficult
            concepts through discussions, allow for resource sharing, and help
            users stay organized with study materials.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 border border-gray-400 mt-4">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Are group study websites free to use?
        </div>
        <div className="collapse-content">
          <p>
            Many group study websites offer free basic features, while some may
            require a subscription for advanced functionalities or to remove
            ads. Users should check the pricing model of each platform to
            understand their options.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 border border-gray-400 mt-4">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How can group study websites help with remote learning?
        </div>
        <div className="collapse-content">
          <p>
            Group study websites are particularly useful for remote learning as
            they enable students to engage with classmates and course materials
            from anywhere with an internet connection. They provide a virtual
            space for group meetings, discussions, and collaboration, fostering
            a sense of community among learners.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 border border-gray-400 mt-4">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Can I use group study websites for exam preparation?
        </div>
        <div className="collapse-content">
          <p>
            Yes, group study websites can be valuable tools for exam
            preparation. Users can form study groups to review course material,
            quiz each other, share study guides, and discuss challenging topics.
            Collaborative learning can help reinforce concepts and boost
            confidence before exams.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 border border-gray-400 mt-4">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          {' '}
          Can group study websites improve academic performance?
        </div>
        <div className="collapse-content">
          <p>
            Research suggests that participating in group study activities can
            enhance academic performance by promoting active learning, providing
            peer support, encouraging critical thinking, and fostering deeper
            understanding of course material. Group study websites facilitate
            these benefits by offering a platform for collaborative learning
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ