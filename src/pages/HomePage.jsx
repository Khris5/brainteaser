import { motion } from "framer-motion";
import { BrainCircuit, Trophy, Gamepad2 } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        className="bg-white py-20 md:py-32"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-6xl font-bold text-brand-dark mb-4"
          >
            Challenge Your Mind,{" "}
            <span className="text-brand-red">Win Big!</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Join Brain Teaser, the ultimate quiz contest. Test your knowledge on
            history, current affairs, and more. Boost your IQ and stand a chance
            to win incredible prizes.
          </motion.p>
          <motion.div variants={fadeIn}>
            <a
              href="#how-to-play"
              className="bg-brand-red text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
            >
              Learn How to Play
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div
              variants={fadeIn}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <BrainCircuit className="mx-auto h-16 w-16 text-brand-red mb-4" />
              <h3 className="text-2xl font-bold mb-2">Increase Knowledge</h3>
              <p className="text-gray-600">
                Explore questions on general knowledge, history, and current
                affairs to become a trivia master.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <Gamepad2 className="mx-auto h-16 w-16 text-brand-red mb-4" />
              <h3 className="text-2xl font-bold mb-2">Boost Your IQ</h3>
              <p className="text-gray-600">
                Tackle mathematical challenges designed to sharpen your mind and
                enhance problem-solving skills.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <Trophy className="mx-auto h-16 w-16 text-brand-red mb-4" />
              <h3 className="text-2xl font-bold mb-2">Win Great Prizes</h3>
              <p className="text-gray-600">
                Compete for a chance to win an all-expense-paid trip to Dubai or
                its cash equivalent!
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How to Play Section */}
      <motion.section
        id="how-to-play"
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How to Play in 3 Simple Steps
          </h2>
          <div className="relative">
            {/* The connecting line */}
            <div className="hidden md:block absolute top-5 left-0 w-full h-1 bg-gray-200"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center relative">
              <div className="flex flex-col items-center">
                <div className="bg-brand-red text-white h-12 w-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4 z-10">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Join a Game</h3>
                <p className="text-gray-600">
                  Subscribe via SMS by sending either BTD Daily, BTW Weekly or BTM
                  Monthly to 33347
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-brand-red text-white h-12 w-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4 z-10">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Answer Questions</h3>
                <p className="text-gray-600">
                  Play quizzes and answer questions correctly. Play more to
                  increase your chances of winning!
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-brand-red text-white h-12 w-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4 z-10">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Win & Celebrate</h3>
                <p className="text-gray-600">
                  Winners are selected in monthly draws and contacted by our
                  agents to claim their amazing prizes.
                </p>
              </div>
            </div>
          </div>
          <motion.div
            className="mt-16 bg-brand-off-white border-l-4 border-brand-red p-6 rounded-r-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-2">Subscription Details</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">Daily:</span> N50
              </li>
              <li>
                <span className="font-semibold">Weekly:</span> N200 (7 days)
              </li>
              <li>
                <span className="font-semibold">Monthly:</span> N1000 (30 days)
              </li>
              <li>
                <span className="font-semibold">On-Demand:</span> N50 per
                additional game
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
