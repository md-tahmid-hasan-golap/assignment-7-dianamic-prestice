import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
const Blog = ({blog,handleBookMark}) => {
  const [isRed, setIsRed] = useState(false);


  
  return (
    <tr>
     
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={blog.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{blog.title}</div>
              
            </div>
          </div>
        </td>
        <td>
          $ {blog.currentBidPrice}
          <br />
        </td>
        <td>{blog.TimeLeft}</td>
        <th>

          <button disabled = {
            
            isRed
          }  onClick={()=>{
            handleBookMark(blog,blog.currentBidPrice)
            setIsRed(true)
           }} id={blog.id}>
          {

            isRed ? <FaHeart className='cursor-not-allowed' size={25} /> : <CiHeart size={25} />
          }
          </button>
        </th>

      </tr>
    
  )
}

export default Blog


