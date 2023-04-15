import React from 'react';
import styles from "../styles/Global";
import assets from "../assets";
import {Button} from "./index";

const SectionWrapper = ({title, description, showBtn, mockupImg, banner, reverse}) => {
    return (
        <div
            className={`min-h-screen ${styles.section} ${styles.bgWhite} ${banner} ${reverse ? styles.bgWhite : styles.bgPrimary}`}>
            <div
                className={`flex items-center ${reverse ? styles.boxReverseClass : styles.boxClass} w-11/12 sm:w-full md:minmd:w-3/4`}>
                <div
                    className={`${styles.descDiv} ${reverse ? "fadeRightMini" : "fadeLeftMini"} ${reverse ? styles.textRight : styles.textLeft}`}>
                    <h1 className={`
                    ${reverse ? styles.blackText : styles.whiteText}
                    ${styles.h1Text}`}>{title}</h1>
                    <p className={`
                    ${reverse ? styles.blackText : styles.whiteText}
                    ${styles.descriptionText}`}>{description}</p>
                    {showBtn && (
                        <Button assetUrl={assets.expo} link="exp://exp.host/@apiman/nftshopapp?release-channel=default"/>
                    )}
                </div>
                <div className={` flex-1 ${styles.flexCenter} p-8 sm:px-9 ${reverse ? "fadeLeftMini" : "fadeRightMini"}`}>
                    <img src={mockupImg} alt="mocUp" className={`${styles.sectionImg} `}/>
                </div>
            </div>
        </div>
    );
}

export default SectionWrapper;