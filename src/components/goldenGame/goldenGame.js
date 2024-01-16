import { motion } from "framer-motion";
import tennisBall from "/Users/keziah/Developer/jessies_profile/src/assets/tennisBall.png";
import './goldenGameStyles.css';
import { useState } from "react";

function GoldenGame() {

    const [tennisPosition, setTennisPosition] = useState([0, 0])

    return (
        <>
            <div className='tennisWrap'>
                <motion.img
                    initial={{ y: tennisPosition }}
                    animate={{ y: "60vh", rotate: 360}}
                    transition={{
                        type: "smooth",
                        duration: 4,
                        repeat: Infinity,
                    }}
                    src={tennisBall} alt="Tennis Ball"
                />
            </div>


        </>
    )

}



export default GoldenGame;