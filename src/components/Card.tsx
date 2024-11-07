import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const TeamCards = () => {
  const teamMembers = [
    {
      name: "Syed Qaiser Nawab Sherazi",
      role: "Mern Stack Developer",
      avatar: "/qaiser.jpg",
      testimonial: "I don't have words to thank this man, I'm really grateful to have this channel and website in my daily routine. If you're a mere beginner, then you can trust this guy and can put your time into his content.",
      expertise: ["React", "Node.js","Express.js", "MongoDB"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "Example@example.com"
      }
    },
    {
      name: "Ali Ahmed Mughal",
      role: "Data Analysis",
      avatar: "/Ali.jpg",
      testimonial: "For everyone who wants to level up their #Coding and #Dev skills - seriously, this channel is for you! Both basic and advanced stacks are covered on this channel.",
      expertise: ["Identifying data", "Collecting data", "Cleaning data"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "Example@example.com"
      }
    },
    {
      name: "Ahmed Arbaz",
      role: "UI/UX",
      avatar: "/arbaz.jpg",
      testimonial: "For everyone who wants to level up their #Coding and #Dev skills - seriously, this channel is for you! Both basic and advanced stacks are covered on this channel.",
      expertise: ["User-Centered Design", "Loading Speed and Performance", "Error Prevention and Recovery", "Testing and Iteration"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "Example@example.com"
      }
    },
    {
      name: "Junaid Ali Khan",
      role: "Web Developer",
      avatar: "/junaid.jpg",
      testimonial: "For everyone who wants to level up their #Coding and #Dev skills - seriously, this channel is for you! Both basic and advanced stacks are covered on this channel.",
      expertise: [" Responsive Design","Version Control (Git)","Performance Optimization", "SEO Basics"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "Example@example.com"
      }
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-800 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pink-700 dark:text-white mb-4">
            Meet Our Amazing Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Dedicated professionals working together to create amazing solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="transform transition duration-500 hover:scale-105">
              <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <Image
                    width={150}
                    height={150}
                      src={member.avatar}
                      alt={member.name}
                      className="w-16 h-16 rounded-full border-4 border-purple-500"
                    />
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {member.name}
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-8 h-8 text-purple-500 mb-4"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p className="text-gray-600 dark:text-gray-300 italic">
                      "{member.testimonial}"
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                    <Link href={member.social.github} className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400">
                      <Github size={20} />
                    </Link>
                    <Link href={member.social.linkedin} className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400">
                      <Linkedin size={20} />
                    </Link>
                    <Link href={member.social.twitter} className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400">
                      <Twitter size={20} />
                    </Link>
                    <Link href={`mailto:${member.social.email}`} className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400">
                      <Mail size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCards;