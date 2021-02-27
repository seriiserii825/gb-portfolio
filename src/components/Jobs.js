import React, {useState} from "react";
import Title from "./Title";
import {graphql, useStaticQuery} from "gatsby";
import styles from "./Jobs.module.scss";

const data = graphql`
    {
        jobs: allStrapiJobs {
            edges {
                node {
                    id
                    number
                    strapiId
                    position
                    company
                    date
                    description {
                        id
                        name
                    }
                }
            }
        }
    }
`;
const Jobs = () => {
  const {jobs: {edges}} = useStaticQuery(data);
  const [value, setValue] = useState(0);
  return (
    <div className={styles.jobsWrap}>
      <Title title="Experience"/>
      <div className="jobs-center">
        <div className="btn-container">
          {edges.map(item => {
            console.log(item.node.number);
            return (
              <button
                key={item.node.id}
                className={`job-btn ${item.node.number === value && 'active-btn'}`}
                onClick={() => {
                  setValue(item.node.number)
                }}
              >
                {item.node.company}
              </button>
            )
          })}
            </div>
            <div className="job-info">
          {edges.map(item => {
            const {node: {id, number, strapiId, position, company, date, description}} = item;
            if (number === value) {
            return (
            <div key={id}>
            <h3>{company}</h3>
            <h4>{position}</h4>
            <div>
          {description.map(item => {
            return item.name
          })}
            </div>
            </div>
            )
          } else {
            return null;
          }
          })}
            </div>
            </div>
            </div>
            );
          };export default Jobs;
