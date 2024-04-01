import { motion } from "framer-motion";
import tennisBall from "/Users/keziah/Developer/jessies_profile/src/assets/tennisBall.png";
import './goldenGameStyles.css';
import { useState, useEffect } from "react";
import jasperPhoto from "/Users/keziah/Developer/jessies_profile/src/assets/JasperPhoto.jpg";

const GoldenGame = () => {
    const [isBouncing, setIsBouncing] = useState(true)
    const [repeatValue, setRepeatValue] = useState(Infinity)
    const [isDisplay, setIsDisplay] = useState('none')

    const bounceVariants = [
        ['-15vh', '0vh', '-12vh', '0vh', '-10vh', '0vh', '-8vh', '0vh', '-6vh', '0vh'],
        ['-25vh', '0vh', '-20vh', '0vh', '-18vh', '0vh', '-10vh', '0vh', '-5vh', '0vh'],
        ['-21vh', '0vh', '-17vh', '0vh', '-15vh', '0vh', '-12vh', '0vh', '-8vh', '0vh'],
        ['-18vh', '0vh', '-18vh', '0vh', '-15vh', '0vh', '-10vh', '0vh', '-6vh', '0vh'],
        ['-23vh', '0vh', '-22=1vh', '0vh', '-18vh', '0vh', '-15vh', '0vh', '-10vh', '0vh'],
        ['-20vh', '0vh', '-20vh', '0vh', '-18vh', '0vh', '-15vh', '0vh', '-10vh', '0vh'],
    ]
    const transitionValues = {
        duration: 40,
        repeat: repeatValue,
        ease: "easeOut"
    };

    const handleClickBall = () => {
        console.log('ball has been clicked')
        setIsBouncing(false)
        setIsDisplay('')
    }

    useEffect(() => {
        
    }, [isBouncing])





    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-evenly' }}>
        <img src={jasperPhoto} style={{width:'30%',height: 'auto', alignItems: 'center'}}/> 
        {/* display : isDisplay */}
            {bounceVariants.map((bv, idx) => (
                <motion.img
                    // onClick={handleClickBall}
                    key={idx}
                    src={tennisBall}
                    animate={{ y: isBouncing ? bv : 0 }}
                    transition={{ y: transitionValues }}
                    style={{
                        width: 40,
                        height: 40,
                    }}
                />
            ))}
        </div>
    );

};


export default GoldenGame;