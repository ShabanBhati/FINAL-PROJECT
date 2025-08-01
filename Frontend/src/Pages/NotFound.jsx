import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
        <section className="notFound">
          <div className="container">
            <h1>Network Error Or Invalid Url</h1>
            <p>We Cannot find your page</p>
            <Link to={'/'}>Back to Home <span><HiOutlineArrowNarrowRight/></span></Link>
          </div>

        </section>
    </>
  )
}

export default NotFound