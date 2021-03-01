import React from "react";
import styles from "./Title.module.scss";

const Title = ({ title }) => {
  return (
    <div className={styles.sectionTitle}>
      <h2>{title || "Default title"}</h2>
      <div className="underline"></div>
    </div>
  );
};
export default Title;
