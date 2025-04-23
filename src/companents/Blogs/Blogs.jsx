import React, { useState, useEffect } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookMark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <p className="ml-5 text-3xl">Active Auctions</p>
      <p className="ml-5 ">Discover and bid on extraordinary items</p>

      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Item</th>
                <th>BidCount</th>
                <th>TimeLeft</th>
                <th>Bid now</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {blogs.map((blog) => (
                <Blog
                  key={blog.id}
                  blog={blog}
                  handleBookMark={handleBookMark}
                ></Blog>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
