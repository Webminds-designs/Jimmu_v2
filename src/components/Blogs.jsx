import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import featuredImg from "../assets/images/Blog1.png";
import blogImg1 from "../assets/images/Blog2.png";
import blogImg2 from "../assets/images/SmBlog.jpg";
import { div } from "framer-motion/client";


const Blogs = () => {
  const [activeBlog, setActiveBlog] = useState(1); // State to handle active blog
  const [showFullContent, setShowFullContent] = useState(false); // State to toggle full content
  const [showMessage, setShowMessage] = useState(false); // State to manage message visibility

  const blogs = [
    {
      id: 1,
      title: "How the Johnny Depp and Amber Heard Divorce Highlights",
      description:
        "The The highly publicized divorce between Johnny Depp and Amber Heard provides a striking example of the complexities that come with high net worth (HNW) divorces. With both parties amassing significant wealth from their respective acting careers, the legal proceedings involved more than just emotional struggles—it became a battle over substantial assets, including properties, luxury goods, and intellectual property rights. This case serves as a reminder of the unique challenges HNW individuals face when navigating the legal and financial intricacies of asset division. In the Depp-Heard divorce, one of the primary issues was the valuation and division of high-value items such as properties, vehicles, and luxury collectibles. When large estates and significant assets are on the line, as in this case, both parties must ensure full transparency to avoid hidden debts or undervalued assets. For HNW individuals, using warranty documents can help safeguard key financial interests. These agreements ensure that third-party liabilities are properly accounted for and that no hidden financial obligations affect the final settlement. Warranty documents can also act as protection against asset manipulation during the divorce process. They ensure that all debts are disclosed and that any loans or liabilities connected to valuable assets are transparent. Without these legal safeguards, HNW individuals like Depp or Heard risk losing significant wealth due to unexpected financial claims or asset devaluation during contentious proceedings. The Depp-Heard case also highlights the need for comprehensive legal and financial strategies to protect against undervaluation or fraudulent asset disclosures. By implementing tools such as warranties, individuals involved in high-stakes separations can better protect their wealth and secure a fair and transparent division of assets. The Johnny Depp and Amber Heard divorce serves as a cautionary tale, showcasing the importance of financial diligence and legal safeguards in preserving wealth during a complex, high-net-worth separation. publicized divorce between Johnny Depp and Amber Heard provides a striking example of the complexities that come with high net worth (HNW) divorces",
      image: featuredImg,
      date: "Dec 26, 2024",
    },
    {
      id: 2,
      title: "The Separation of Bill Gates and Melinda French Gates",
      description:
        "On May 2, 2021, On May 2, 2021, the world was taken by surprise when Bill Gates, Microsoft co-founder and billionaire philanthropist, and his wife Melinda French Gates announced their separation after 27 years of marriage. The ex-couple, who had been one of the most influential pairs in philanthropy, issued a statement confirming their commitment to continue running their foundation, the Gates Foundation, which boasts a $40 billion endowment. Despite their split, the Gates' stated they would remain partners in their charitable efforts. One of the most remarkable aspects of their divorce was the lack of a prenuptial agreement. However, the court documents revealed that they had a private separation agreement, which likely helped avoid a public courtroom battle over their multi-billion-dollar estate. Bill Gates, whose net worth at the time exceeded $130.5 billion, and Melinda shared ownership of multiple properties worth millions of dollars, which were presumably addressed in this private agreement. Despite the complexity of their wealth, the couple's focus on amicably continuing their philanthropic work garnered respect and interest from the public. As parents to three children, Bill and Melinda also sought to maintain stability for their family throughout the separation. The Gates divorce, while surprising, demonstrated how even high-profile separations can be managed with discretion, particularly when substantial wealth and public interests are involved. world was taken by surprise when Bill Gates, Microsoft co-founder, and billionaire philanthropist, and his wife Melinda French Gates announced their separation ...",
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

  // Add smooth scrolling behavior
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      <motion.section
        className="bg-[#FDF9F3] min-h-screen w-full flex items-center justify-center px-4 sm:px-8 py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="max-w-screen-xl w-full flex flex-col lg:flex-row gap-8 items-start justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Left Section */}
          <motion.div
            className="w-full lg:w-[75%] md:w-[70%] sm:w-full relative font-SF_Bold"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col md:flex-row mb-4">
              <h1 className="text-[28px] md:text-[32px] lg:text-[96px] text-3xl font-SF_Bold text-[#2D2D2D] mb-4">BLOGS</h1>
              <p className="text-sm md:text-[18px] text-[#2D2D2D] font-SF_Regular mb-4 md:ml-6">
                Explore insights and tips in our BLOGS, guiding you with care and expertise every step of the way.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {blogs
                .filter((blog) => blog.id === activeBlog)
                .map((blog) => (
                  <motion.div
                    key={blog.id}
                    className="relative h-fit"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.8 }}
                  >
                    <img
                      src={blog.image}
                      alt={`Blog ${blog.id}`}
                      className="w-full h-[320px] md:h-[600px] object-cover rounded-3xl shadow-lg"
                    />
                    <div className="absolute top-4 left-4 bg-white text-black text-sm font-SF_Medium px-4 py-1 rounded-3xl shadow">
                      {blog.date}
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 font-SF_Regular">
                      <div className="p-2 rounded-md flex flex-col items-end">
                        {!showFullContent ? (
                          <>
                            <div className="bg-white bg-opacity-55 p-2 rounded-3xl flex justify-center">
                              <h2 className="sm:text-[20px] md:text-[28px] w-fit font-SF_Bold text-[#000000] flex justify-center">
                                {blog.title}
                              </h2>
                            </div>
                            <button
                              onClick={handleReadMore}
                              className="mt-4 px-4 py-2 bg-[#ffffff] text-black font-SF_Medium rounded-2xl shadow-md hover:bg-[#FFAA29] transition text-[16px] w-auto"
                            >
                              Read More
                            </button>
                          </>
                        ) : (
                          <>
                            <div className="bg-white bg-opacity-80 p-4 rounded-2xl mt-4 overflow-y-auto max-h-[200px] shadow-lg text-sm h-[300px]">
                              {blog.description}
                            </div>
                            <button
                              onClick={() => setShowFullContent(false)}
                              className="mt-4 px-4 py-2 bg-[#ffffff] text-black font-SF_Medium rounded-2xl shadow-md hover:bg-[#FFAA29] transition text-[16px] w-auto"
                            >
                              Collapse
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>

          {/* Right Section: Square Cards */}
          <motion.div
            className="w-full   lg:w-[25%] md:w-[30%] sm:w-full flex flex-col gap-8 justify-start font-SF_Regular"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {blogs
              .filter((blog) => blog.id !== activeBlog)
              .map((blog) => (
                <motion.div
                  key={blog.id}
                  className="relative bg-[#FFDBA5]  p-4 rounded-2xl shadow-lg flex flex-col gap-2 justify-between cursor-pointer h-[200px] md:h-[300px] w-full mx-auto"
                  onClick={() => handleSeeMore(blog.id)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="sm:text-[20px] font-SF_Bold text-[#2D2D2D]">
                    {blog.title}
                  </h3>
                  <div className="flex justify-end"><button className="mt-2 px-4 py-2 bg-[#2D2D2D] text-[#FFFAF4] text-[14px] font-SF_Medium rounded-2xl shadow-md hover:bg-[#FFAA29] transition ">
                    See More
                  </button></div>
                  
                </motion.div>
              ))}

            {/* See More Blogs Card */}
            <motion.div
              className="  bg-[#FFDBA5] h-[340px] w-full p-4 rounded-3xl shadow-lg flex flex-col justify-end gap-2 font-SF_Regular mx-auto transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundImage: `url(${blogImg2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {showMessage ? (
                <div className="flex justify-center">
                  <p className="mt-2 px-5 py-2 bg-[#FFFAF4] text-[#2D2D2D] text-[16px] font-SF_Medium rounded-2xl shadow-md">No more Blogs</p>
                </div>
                
              ) : (
                <div className="flex justify-center"><button
                  onClick={() => setShowMessage(true)}
                  className="mt-4 px-4 py-2 bg-[#ffffff] text-black font-SF_Medium rounded-2xl shadow-md hover:bg-[#FFAA29] transition text-[16px] w-auto"
                >
                  See More Blogs
                </button></div>


              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Blogs;