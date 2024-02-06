import { motion } from "framer-motion";
import tennisBall from "/Users/keziah/Developer/jessies_profile/src/assets/tennisBall.png";
import './goldenGameStyles.css';
import { useState, useEffect } from "react";

const GoldenGame = () => {
    // const [isBouncing, setIsBouncing] = useState(true);

    const bounceVariants = [
        [-650, 0, -600, 0, -450, 0, -400, 0, -200, 0],
        [-600, 0, -750, 0, -600, 0, -550, 0, -150, 0],
        [-700, 0, -450, 0, -350, 0, -100, 0, -80, 0],
        [-500, 0, -450, 0, -300, 0, -250, 0, -150, 0],
        [-400, 0, -350, 0, -250, 0, -150, 0, -100, 0],
        [-600, 0, -550, 0, -400, 0, -350, 0, -200, 0]
    ]
    const transitionValues = {
        duration: 20,
        repeat: Infinity,
        ease: "easeOut"
      };

  useEffect(() => {

  }, [])

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-evenly'}}>
      {bounceVariants.map((bv, idx) => (
        <motion.img
          key={idx}
          src={tennisBall}
          animate={{y: bv}}
          transition={{y : transitionValues}}
          style={{
            width: 50,
            height: 50,
          }}
        />
      ))}
    </div>
  );

};


export default GoldenGame;