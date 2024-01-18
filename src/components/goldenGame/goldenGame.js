import { motion } from "framer-motion";
import tennisBall from "/Users/keziah/Developer/jessies_profile/src/assets/tennisBall.png";
import './goldenGameStyles.css';
import { useState } from "react";

function GoldenGame() {

    const [tennisPosition, setTennisPosition] = useState([0, "100%"])
    const [animatValue, setAnimateValue] = useState([0, "50vh"])
    const [rotateValue, setRotateValue] = useState(360)

    return (
        <>
            <div className='tennisWrap'>
                <motion.img className="ball"
                    initial={{ y: '10%' }}
                    // animate={{ y: animatValue[1], rotate: rotateValue }}
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