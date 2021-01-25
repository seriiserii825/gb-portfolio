import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        Company
        Description {
          id
          name
        }
        Position
        strapiId
        Date
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [value, setValue] = React.useState(0)
  const { Company, Position, Date, Description } = jobs[value]
  return (
    <div className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map(({ strapiId, Company }, index) => {
            return (
              <button
                className={`job-btn ${index === value && "active-btn"}`}
                key={strapiId}
                onClick={() => setValue(index)}
              >
                {Company}
              </button>
            )
          })}
        </div>
        <div className="job-info">
          <h3>{Position}</h3>
          <h4>{Company}</h4>
          <p className="job-date">{Date}</p>
          {Description.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{item.name}</p>
              </div>
            )
          })}
        </div>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </div>
  )
}

export default Jobs
