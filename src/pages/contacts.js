import React from "react";
import Layout from "../components/Layout";

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <div className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/xbjpvgjl" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                class="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                class="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" class="submit-btn btn">
              submit here
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default contact;
