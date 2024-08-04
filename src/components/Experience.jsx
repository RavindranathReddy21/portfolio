import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { download, downloadHover, resume } from '../assets';
import LeetCodeCard from './LeetCodeCard';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          What I've done so far
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Data Structures and Algorithms.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col h-fit">
        <motion.div
          variants={fadeIn('right', 'spring', 0.5, 0.75)}
          className={` 'flex items-center justify-center cursor-pointer`}
        >
          <LeetCodeCard />
        </motion.div>
        
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
