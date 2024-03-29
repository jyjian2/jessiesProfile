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
        [-650, 0, -600, 0, -450, 0, -400, 0, -200, 0],
        [-600, 0, -750, 0, -600, 0, -550, 0, -150, 0],
        [-700, 0, -450, 0, -350, 0, -100, 0, -80, 0],
        [-500, 0, -450, 0, -300, 0, -250, 0, -150, 0],
        [-400, 0, -350, 0, -250, 0, -150, 0, -100, 0],
        [-600, 0, -550, 0, -400, 0, -350, 0, -200, 0]
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
        <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-evenly' }}>
        <img src={jasperPhoto} style={{width:'30%',height: '30%', display : isDisplay, alignItems: 'center'}}/>
            {bounceVariants.map((bv, idx) => (
                <motion.img
                    onClick={handleClickBall}
                    key={idx}
                    src={tennisBall}
                    animate={{ y: isBouncing ? bv : 0 }}
                    transition={{ y: transitionValues }}
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