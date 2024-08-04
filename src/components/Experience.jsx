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
        <motion.div
          variants={fadeIn('right', 'spring', 0.5, 0.75)}
          className={'flex items-center justify-center cursor-pointer border-none mt-4'}
        >
        <button
          className="live-demo flex justify-between 
              sm:text-[18px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-3 pr-3 
              whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px] 
              w-[125px] h-[46px] rounded-[10px] bg-jetLight 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/1STwBqw3wNseT_S_PQoYvHV6xh_YS55lW/view?usp=sharing', //paste the link to your resume here
              '_blank'
            )
          }
          onMouseOver={() => {
            document
              .querySelector('.download-btn')
              .setAttribute('src', downloadHover);
          }}
          onMouseOut={() => {
            document
              .querySelector('.download-btn')
              .setAttribute('src', download);
          }}>
          MY RESUME
          <img
            src={download}
            alt="download"
            className="download-btn sm:w-[26px] sm:h-[26px] 
                w-[23px] h-[23px] object-contain"
          />
        </button>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
