import React from 'react'

const Hero = () => {
  return (
    <div>

    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/gbbrdm3B/Banner-min.jpg)",
  }}>
  <div className="hero-overlay"></div>
  <div className="p-10 text-neutral-content text-left w-full">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Bid on Unique Items from Around the World</h1>
      <p className="mb-5">
      Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
      </p>
      <button className="btn btn-primary rounded-full bg-white text-black pr-5 px-5">Explore more</button>
    </div>
  </div>
</div>
      



    </div>
  )
}

export default Hero



