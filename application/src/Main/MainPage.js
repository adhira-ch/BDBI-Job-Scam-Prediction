import React from 'react';
import Component from './Component'; // Make sure this is the correct path to your component
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

function LoginPage() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className='h-screen w-full justify-center flex flex-col'>
        <div className="h-1/2 flex flex-col px-4 py-4 justify-center">
          {/* Main content */}
          <div className="flex-grow flex px-0 py-0 bg-four rounded-3xl w-3/4 mx-auto shadow-lg">
            {/* Left: Login Component */}
            <div className="flex-none w-full flex flex-col p-0">
              <div className="flex-grow">
                {/* Blank space above */}
              </div>
              <div className='w-full mx-auto flex justify-center items-center flex-col'>
                <div className='flex justify-center flex-col items-center w-full overflow-y-auto' style={{ maxHeight: 'calc(100vh - 4rem)' }}>
                  <Component className='w-full'/>
                </div>
              </div>
              <div className="flex-grow">
                {/* Blank space below */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default LoginPage;