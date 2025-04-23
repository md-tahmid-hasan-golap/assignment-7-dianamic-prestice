
import { useState } from 'react'
import './App.css'
import Blogs from './companents/Blogs/Blogs'
import Footer from './companents/Footer/Footer'
import Hero from './companents/Hero/Hero'
import Navbar from './companents/Navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import { CiHeart } from "react-icons/ci";
function App() {

  const [bookmarked,setBookMarked] = useState([])
  const [addprice,setAddprice] = useState(0)

 



  const handleBookMark =(blog,price) =>{

    // setIsRed(!isRed);

    
    toast('card is added')
    setBookMarked([...bookmarked,blog])

    const newprice = addprice + price
    setAddprice(newprice)

  }

  const removeBlog = (item) => {
    toast('card is remove')
    const remainingblog = bookmarked.filter((marked)=>marked.id!==item.id)

    console.log(item);
    
    setBookMarked(remainingblog)
    setAddprice(addprice-item.currentBidPrice
    )

  }

  return (    
    <> 
  
     <Navbar></Navbar>
     <Hero></Hero>

 


     <div className='main-container flex justify-center mt-30'>
     <div className='left-container w-[70%]'>


     <Blogs handleBookMark={handleBookMark}></Blogs>
     </div>
     <div className='right-container w-[30%]'>    

     <div className='flex justify-center items-center'>
     <CiHeart size={35} className='mt-4 text-blue-500 '/>
     <h1 className='mt-2 text-2xl font-bold text-blue-500 '> Favourites</h1>
     </div>
     <hr className='mt-5' />
     <ToastContainer/>
     {
      
      bookmarked.length == 0 ?<h1 className=' mt-10 w-64 h-40 p-4 border border-gray-300 rounded-lg shadow-md bg-white justify-center items-center font-bold text-3xl'>No Cart Avaiable Select a card</h1> 
      :

      bookmarked.map((mark)=>
        <div key={mark.id} className=' ml-10 flex mt-10 w-64 h-[250px] p-4 border border-gray-300 rounded-lg shadow-md bg-white'>
        <div>
        <img className='w-56 h-32' src={mark.image} alt="" />
        </div>
        <div>
        <p className='text-xl font-bold ml-2'>{mark.title}</p>
       <p className='ml-5'>$ {mark.currentBidPrice}</p>
        <p className='ml-5'>bids:{mark.bidsCount}</p>
        <button  onClick={()=>removeBlog(mark)} className=' ml-5 bg-white-500 text-black px-2 border border-gray-300 rounded-lg'>x</button>
        </div>
    
      </div>
    )
     }
    

     <hr className='mt-5' />
     <h1 className='text-2xl'>Total Bids Amount :$ {addprice}</h1>
     </div>
     </div>
     



     <Footer></Footer>   
      
     </>
    
  )
        
}
 
    

export default App
