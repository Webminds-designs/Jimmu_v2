import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import featuredImg from "../assets/images/Blog2.jpg"; // Replace with your featured image path
import blogImg1 from "../assets/images/Blog1.jpeg"; // Replace with blog image paths
import blogImg2 from "../assets/images/Blog2.jpg"; // Replace with blog image paths

const Blogs = () => {
  const [activeBlog, setActiveBlog] = useState(1); // State to handle active blog
  const [showFullContent, setShowFullContent] = useState(false); // State to toggle full content

  const blogs = [
    {
      id: 1,
      title: "How the Johnny Depp and Amber Heard Divorce Highlights the Complexities of High Net Worth Divorces",
      description:
        "The highly publicized divorce between Johnny Depp and Amber Heard provides a striking example of the complexities...",
      image: featuredImg,
      date: "Dec 26, 2024",
    },
    {
      id: 2,
      title: "The Separation of Bill Gates and Melinda French Gates: Insights and Lessons",
      description:
        "On May 2, 2021, the world was taken by surprise when Bill Gates and Melinda French Gates announced their separation...",
      image: blogImg1,
      date: "May 2, 2021",
    },
  ];

  const handleSeeMore = (id) => {
    setActiveBlog(id);
    setShowFullContent(false);
  };

  const handleReadMore = () => {
    setShowFullContent(true);
  };

  return (
    <section className="bg-[#FDF9F3] py-12 px-8 min-h-screen">
      <motion.div
        className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left Section */}
        <motion.div
          className="w-full lg:w-[60%] relative"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AnimatePresence mode="wait">
            {blogs
              .filter((blog) => blog.id === activeBlog)
              .map((blog) => (
                <motion.div
                  key={blog.id}
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={blog.image}
                    alt={`Blog ${blog.id}`}
                    className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                  />
                  <motion.div
                    className="absolute top-4 left-4 bg-white text-black text-sm font-semibold px-4 py-1 rounded-md shadow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {blog.date}
                  </motion.div>
                  <motion.div
                    className="absolute bottom-8 left-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h2 className="text-xl md:text-2xl font-bold bg-white bg-opacity-80 px-2 py-1 rounded text-[#2D2D2D] relative">
                      <span className="absolute top-0 left-0 w-4 h-4 bg-[#FFAA29] rounded-br-full -translate-x-1/2 -translate-y-1/2"></span>
                      {blog.title}
                    </h2>
                    {!showFullContent ? (
                      <button
                        onClick={handleReadMore}
                        className="mt-4 px-4 py-2 bg-[#FFAA29] text-white font-semibold rounded-lg shadow-md hover:bg-[#FFD07E] transition"
                      >
                        Read More...
                      </button>
                    ) : (
                      <motion.div
                        className="bg-white bg-opacity-80 p-4 rounded-lg mt-4 overflow-y-auto max-h-[200px] shadow-lg text-sm"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {blog.description}
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="w-full lg:w-[40%] flex flex-col gap-8"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {blogs
            .filter((blog) => blog.id !== activeBlog)
            .map((blog) => (
              <motion.div
                key={blog.id}
                className="relative bg-[#FFE5CC] p-4 rounded-xl shadow-lg flex items-center gap-4 cursor-pointer"
                onClick={() => handleSeeMore(blog.id)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={blog.image}
                  alt={`Blog ${blog.id}`}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#2D2D2D] relative">
                    <span className="absolute top-0 left-0 w-3 h-3 bg-[#FFAA29] rounded-br-full -translate-x-1/2 -translate-y-1/2"></span>
                    {blog.title}
                  </h3>
                  <button className="mt-2 px-3 py-1 bg-[#FFFAF4] text-[#2D2D2D] text-sm font-semibold rounded-lg shadow-md hover:bg-[#FFAA29] transition">
                    See More...
                  </button>
                </div>
              </motion.div>
            ))}

          {/* See More Blogs Card */}
          <motion.div
            className="relative bg-[#FFE5CC] p-4 rounded-xl shadow-lg flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={blogImg2}
              alt="See More Blogs"
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <button className="mt-2 px-3 py-1 bg-[#FFFAF4] text-[#2D2D2D] text-sm font-semibold rounded-lg shadow-md hover:bg-[#FFAA29] transition">
                See More Blogs...
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Blogs;
