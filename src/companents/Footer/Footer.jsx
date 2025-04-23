import React from 'react'

const Footer = () => {
  return (
    <div>

    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 mt-10">

    <div className='flex justify-center mt-5'>
    <span className='text-blue-400 text-2xl'>Auction<span className='text-yellow-500 text-2xl'>Gallery</span></span>
    </div>



    <div className='flex justify-center'>
    <p>Bid</p>
    <p>Win</p>
    <p>Own</p>
    
    </div>

    <div className='flex justify-center gap-2'>
    <p>Home</p>
    <p>Auction</p>
    <p>Categories</p>
    <p>How to work</p>
    </div>
    <p className='mb-10'>© 2025 AuctionHub. All rights reserved.</p>
  
</footer>

 
    



    </div>
  )
}

export default Footer
