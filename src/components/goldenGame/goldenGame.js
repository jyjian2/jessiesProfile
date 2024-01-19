import { motion } from "framer-motion";
import tennisBall from "/Users/keziah/Developer/jessies_profile/src/assets/tennisBall.png";
import './goldenGameStyles.css';
import { useState, useEffect } from "react";

const GoldenGame = () => {
    const [isBouncing, setBouncing] = useState(true);
    const balls = [1, 2, 3, 4, 5, 6, 7, 8];

    const ballVariants = {
        initial: { y: 0 },
        bounce: { y: [-100, 0, -90, 0, -80, 0, -70, 0, -30, 0], 
        transition: { duration: 10, repeat: Infinity } },
    };

    useEffect(() => {
        // const interval = setInterval(() => {
        //     setBouncing(false);
        //     setTimeout(() => setBouncing(true), 10);
        // }, 10000); // Adjust the interval based on your preference

        // return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around' }}>
            <motion.img
                    src={tennisBall}
                    animate={isBouncing ? 'bounce' : undefined}
                    variants={ballVariants}
                    style={{
                        width: 50,
                        height: 50,
                        
                    }}
                />
                <motion.img
                    src={tennisBall}
                    animate={isBouncing ? 'bounce' : undefined}
                    variants={ballVariants}
                    style={{
                        width: 50,
                        height: 50,
                        
                    }}
                />
                <motion.img
                    src={tennisBall}
                    animate={isBouncing ? 'bounce' : undefined}
                    variants={ballVariants}
                    style={{
                        width: 50,
                        height: 50,
                        
                    }}
                />
                <motion.img
                    src={tennisBall}
                    animate={isBouncing ? 'bounce' : undefined}
                    variants={ballVariants}
                    style={{
                        width: 50,
                        height: 50,
                        
                    }}
                />
                <motion.img
                    src={tennisBall}
                    animate={isBouncing ? 'bounce' : undefined}
                    variants={ballVariants}
                    style={{
                        width: 50,
                        height: 50,
                        
                    }}
                />
                <motion.img
                    src={tennisBall}
                    animate={isBouncing ? 'bounce' : undefined}
                    variants={ballVariants}
                    style={{
                        width: 50,
                        height: 50,
                        
                    }}
                />
        </div>
        
    );

};


export default GoldenGame;