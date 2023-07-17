import React from "react";
import styles from "./style.css";
const Desktop2 = () => {
  return (
    <div className={styles.desktop2}>
      <img
        className={styles.svgSpinnerswindToyIcon}
        alt=""
        src="/svgspinnerswindtoy.svg"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.fullStackDeveloper}>FULL STACK DEVELOPER</div>
      </div>
      <div className={styles.akarIconslocationParent}>
        <img
          className={styles.akarIconslocation}
          alt=""
          src="/akariconslocation.svg"
        />
        <img
          className={styles.epsuitcaseLineIcon}
          alt=""
          src="/epsuitcaseline.svg"
        />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <div className={styles.groupItem} />
        <div className={styles.from2To}>From 2 to 6 year(s) of experience</div>
        <div className={styles.from2To1}>From 2 to 6 year(s) of experience</div>
        <div className={styles.groupInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.notDisclosedBy}>Not Disclosed by Recruiter</div>
        <div className={styles.canada}>Canada</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild1} />
        <div className={styles.applyOnCompany}>Apply on Company Website</div>
      </div>
    </div>
  );
};

export default Desktop2;
