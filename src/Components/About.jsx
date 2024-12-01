import React from 'react'
import { CiMail,CiShoppingCart, CiSearch} from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaAngleDown,FaRegHeart,FaRegUser, FaFacebook,FaTwitter   } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Hekto from '../assets/images/Hekto.png'
import burce from '../assets/images/bruce-mars.png'
import Rectangle4 from '../assets/images/Rectangle4.png'
import Rectangle3 from '../assets/images/Rectangle3.png'
import Rectangle2 from '../assets/images/Rectangle2.png'
import Rectangle from '../assets/images/Rectangle.png'
import brucemar from '../assets/images/bruce-mars-FW.png'
import brucfour from '../assets/images/bruce-mars-F4.png'
import Mask from '../assets/img2/Mask Group.png'
import MyImage from '../assets/img2/image 1174.png'

const About = () => {
  return (
    <div>  
        {/* Header Section */}
        <header className='flex justify-between text-white py-3   bg-violet-500 font-josef'>
           <div className="container  mx-auto flex items-center justify-between">
           <div className="header-left flex items-center  gap-9  ">
          <div className="gmail-icon flex items-center gap-2 ">
          <CiMail />
          <p>mhhasanul@gmail.com</p>
          </div>
          <div className="contact flex items-center gap-2">
           <IoIosCall />
           <p>(12345)67890</p>
          </div>
        </div>
        <div className="header-right">
           <ul className='flex items-center gap-4'>
            <li className='flex items-center'>
              <select name="" id="" className='bg-transparent'>
                <option value="" className=' bg-violet-500 '>English <FaAngleDown /></option>
                <option value="" className='bg-violet-500 '>Bangla <FaAngleDown /></option>
                <option value="" className='bg-violet-500 '>Hindi <FaAngleDown /></option>
                <option value="" className='bg-violet-500 '>Arabic <FaAngleDown /></option>
              </select>
            </li>
            <li className='flex items-center'> 
               <select name="" id="" className='bg-transparent'>
                <option value="" className=' bg-violet-500 '>LSD <FaAngleDown /></option>
                <option value="" className=' bg-violet-500 '>USD <FaAngleDown /></option>
                <option value="" className=' bg-violet-500 '> Rial <FaAngleDown /></option>
                <option value="" className=' bg-violet-500 '> Rupe <FaAngleDown /></option>
               </select>
            </li>
            <li className='flex items-center'>Login<FaRegUser /></li>
            <li className='flex items-center gap-1'>Wishlist <FaRegHeart /></li>
            <li> <CiShoppingCart /></li>
           </ul>
        </div>
           </div>
         </header>
         <div>

            {/* Navbar Section */}

       <nav className='px-12 py-6'>
        <div className="Container">
          <div className=' flex items-center justify-between'>
          <div className="nav-left flex gap-16 items-center">
              <div className="logo">
             <img src= {Hekto} alt="" />
            </div>
            <div className="item">
              <ul className='flex gap-12 items-center'>
                <li className='flex items-center gap-2'>
                 <select name="" id="">
                 <option value="">Home <FaAngleDown /> </option>
                <option value=""> page <FaAngleDown /> </option>
                <option value=""> Product <FaAngleDown /> </option>
                <option value="">blog<FaAngleDown /> </option>
                
                 </select>
                </li>
                <li> Page </li>
                <li>Products</li>
                <li>Blog</li>
                <li>Shop</li>
                <li>Contact</li>
              </ul>
            </div>
              </div>
            <div className="search-bar flex items-center">
               <input type="text" className='border-2 outline-none w-64 h-8' />
               <button className=' bg-[#FB2E86] w-10 h-8 flex justify-center items-center'><CiSearch /></button>
            </div>
          </div>
        </div>
       </nav>
    </div>

     {/* Hero section */}

    <div className=' Hero mb-24'>
        <div className="Container bg-[#d8d8da] h-72 flex items-center justify-start px-12">
            
           <div className=''>
           <p className='py-2 color-[#101750] font-bold text-3xl'>Blog Pages</p>
            <ul className='flex items-center gap-4'>
                <li>Home</li>
                <li>page</li>
                <li className=''>Blog page</li>
            </ul>
           </div>
        </div>
       </div>

       {/* main section */}

       <section  className='pb-28'>
        <div className="Container flex px-12 gap-10">
         <div>
         <div className=" ">
           <div className="img mb-6">
           <img src= {burce} alt="#" />
           </div>
            <div className="button flex gap-6 mb-4">
            <p className='bg-[#FFE7F9] px-4'> Surf Auxion</p>
            <p className='bg-[#FFE7F9] px-4'> Aug 09 2020</p>
          </div>
          <div className=''>
        <p className='text-2xl font-bold mb-5'>Mauris at orci non vulputate diam tincidunt nec.</p>
        <p className='leading-8 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum
        <br /> eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
       <div className='mb-10'>
       <button className='font-bold '>Read More</button>
       </div>
      </div>
          </div>
          <div className="">
           <div className="img mb-6">
           <img src= {brucemar} alt="#" />
           </div>
            <div className="button flex gap-6 mb-4">
            <p className='bg-[#FFE7F9] px-4'> Surf Auxion</p>
            <p className='bg-[#FFE7F9] px-4'> Aug 09 2020</p>
          </div>
          <div className=''>
        <p className='text-2xl font-bold mb-5'>Mauris at orci non vulputate diam tincidunt nec.</p>
        <p className='leading-8 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum
        <br /> eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
        <div className='mb-10'>
       <button className='font-bold '>Read More</button>
       </div>
      </div>
          </div>
          <div className="">
           <div className="img mb-6">
           <img src= {brucfour} alt="#" />
           </div>
            <div className="button flex gap-6 mb-4">
            <p className='bg-[#FFE7F9] px-4'> Surf Auxion</p>
            <p className='bg-[#FFE7F9] px-4'> Aug 09 2020</p>
          </div>
          <div className=''>
        <p className='text-2xl font-bold mb-5'>Mauris at orci non vulputate diam tincidunt nec.</p>
        <p className='leading-8 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum
        <br /> eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
        <div className='mb-10'>
       <button className='font-bold '>Read More</button>

       </div>
      </div>
          </div>
          <div className=' flex justify-center  gap-8 mb-12'>
            <div className=' bg-pink-600 w-10 text-center py-1 '>
            <button >1</button>
            </div>
           <div  className=' bg-slate-200 w-10 text-center py-1 '>
           <button>2</button>
           </div>
           <div className=' bg-slate-200 w-10 text-center py-1 '>
            <button >3</button>
            </div>
           <div  className=' bg-slate-200 w-10 text-center py-1 '>
           <button>4</button>
           </div>
           
           
          </div>
          
         </div>
         
  
       
          
         
          <div className="right">
            <p className='text-2xl font-josef pb-3'>Search</p>
            <div className="flex items-center border border-gray-300 rounded-sm p-2 max-w-md mx-auto shadow-sm focus-within:shadow-md mb-11">
      <input
        type="text"
        placeholder="Search For Posts"
        className="flex-grow outline-none bg-transparent text-gray-600 placeholder-gray-400 px-2"
      />
      <button className="text-gray-400 hover:text-gray-600">
        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      
    </div>
       <div className="Categories">
        <p className='mb-6 font-josef text-2xl'>Categories</p>
        <ul className='flex gap-8'>
          <li className='font-josef'>Hobbies (14)</li>
          <li className='mb-5'>Women (14)</li>
        </ul>
        <ul className='flex gap-8'>
          <li className='  font-josef'> Women (21)</li>
          <li className='  font-josef mb-5'> Women (21)</li>
        </ul>
        <ul className='flex gap-8'>
          <li className='  font-josef'> Women (21)</li>
          <li className='  font-josef mb-5'> Women (21)</li>
        </ul>
       </div>
       <div className="Recent-post">
        <p className='mb-8 font-josef text-2xl'>Recent Post</p>
       </div>
       <div className='card mb-8 '>
             <div className="Rectangle1 flex gap-2  mb-5">
             <div className="">
            <img src= { Rectangle4 } alt="Ractangle" />
          </div>
          <div>
          <p>It is a long established fact</p>
          <p>Aug 09 2020</p>
          </div>
             </div>
             <div className="Rectangle1 flex gap-2 mb-5">
             <div className="">
            <img src= { Rectangle2 } alt="Ractangle" />
          </div>
          <div>
          <p>It is a long established fact</p>
          <p>Aug 09 2020</p>
          </div>
          
             </div>
             <div className="Rectangle1 flex gap-2 mb-5">
             <div className="">
            <img src= { Rectangle3 } alt="Ractangle" />
          </div>
          <div>
          <p>It is a long established fact</p>
          <p>Aug 09 2020</p>
          </div>
          
             </div>
             <div className="Rectangle1 flex gap-2 mb-5">
             <div className="">
            <img src= { Rectangle } alt="Ractangle" />
          </div>
          <div>
          <p>It is a long established fact</p>
          <p>Aug 09 2020</p>
          </div>
          
             </div>
       </div>
         <div className='mb-6 font-josef text-2xl'>
         <p >Sale Product</p>
         </div>
         <div className="card">
         <div className="Rectangle1 flex gap-2  mb-5">
             <div className="">
            <img src= { Rectangle4 } alt="Ractangle" />
          </div>
          <div>
          <p> Elit ornare in enim mauris.</p>
          <p>Aug 09 2020</p>
          </div>
             </div>
             <div className="Rectangle1 flex gap-2  mb-5">
             <div className="">
            <img src= { Rectangle4 } alt="Ractangle" />
          </div>
          <div>
          <p>Viverra pulvinar et enim.</p>
          <p>Aug 09 2020</p>
          </div>
             </div>
             <div className="Rectangle1 flex gap-2  mb-5">
             <div className="">
            <img src= { Rectangle4 } alt="Ractangle" />
          </div>
          <div>
          <p>Mattis varius donec fdsfd</p>
          <p>Aug 09 2020</p>
          </div>
             </div>
         </div>
         <div className=' offer-Product'>
         <div className='mb-6 font-josef text-2xl'>
         <p > Offer Product </p>
         </div>
          <div className='flex gap-2 text-center'>
          <div className="Rectangle1  mb-5   ">
             <div className=" mb-2 w-30 items-center">
            <img src= { Mask } alt="Ractangle" />
          </div>
          <div className=' ' >
          <p className=' font-lato from-neutral-600 text-base  '>Duis lectus est.</p>
          <p className='font-lato from-neutral-400 text-slate-400 text-sm '>$12.00 - $15.00</p>
          </div>
             </div>
             <div className="Rectangle1  mb-5    ">
             <div className=" mb-2 w-30 items-center">
            <img src= { Mask } alt="Ractangle" />
          </div>
          <div className=' ' >
          <p className=' font-lato from-neutral-600 text-base '>Duis lectus est.</p>
          <p className='font-lato from-neutral-400 text-slate-400 text-sm'>$12.00 - $15.00</p>
          </div>
             </div>
          </div>
          <div className='flex gap-2 text-center'>
          <div className="Rectangle1  mb-5   ">
             <div className=" mb-2 w-30 items-center">
            <img src= { Mask } alt="Ractangle" />
          </div>
          <div className=' ' >
          <p className=' font-lato from-neutral-600 text-base  '>Duis lectus est.</p>
          <p className='font-lato from-neutral-400 text-slate-400 text-sm '>$12.00 - $15.00</p>
          </div>
             </div>
             <div className="Rectangle1  mb-5    ">
             <div className=" mb-2 w-30 items-center">
            <img src= { Mask } alt="Ractangle" />
          </div>
          <div className=' ' >
          <p className=' font-lato from-neutral-600 text-base '>Duis lectus est.</p>
          <p className='font-lato from-neutral-400 text-slate-400 text-sm'>$12.00 - $15.00</p>
          </div>
             </div>
          </div>
         </div>
         <div className="Socail mb-8">
          <div className='mb-4'>
            <p className=' font-josef text-xl'>Follow</p>
          </div>
          <div className="icon flex items-center gap-4 text-2xl">
           
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />

          </div>
         </div>
         <p className=' font-josef text-xl'>Tags</p>
         <div className="link">
           
         </div>
          </div>
          
        </div>
        <div className=' flex justify-center mb-8 '>
            <img src= { MyImage } alt="" />
          </div>
          <footer>
            <div className="Container">
              <div className='bg-slate-300 flex gap-14 justify-center h-96 items-center '>
               <div className='Heko'>
               <div className="logo mb-6">
              <img src= {Hekto} alt="" />
            </div>
            <div className="search-bar flex items-center mb-6 ">
               <input type="text" placeholder='Enter Email Address' className='border-2 outline-none w-64 h-8 px-3'  />
               <button className=' bg-[#FB2E86] w-24 h-8 rounded-sm  flex justify-center items-center'>Sign Up</button>
            </div>
            <div className=' '>
               <p className='mb-2 font-lato from-neutral-400 text-slate-500 text-sm'>Contact Info</p>
              <p className='font-lato from-neutral-400 text-slate-500 text-sm' >17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
               </div>
               <div >
                 <div>
                 <p className='mb-6 font-lato text-lg'>Catagories</p>
                 </div>
                <div className="Category  font-lato from-neutral-400 text-slate-500 text-sm ">
                <p className='mb-3'>Laptops & Computers</p>
                <p className='mb-3'>Cameras & Photography</p>
                <p className='mb-3'>Smart Phones & Tablets</p>
                <p className='mb-3'>Video Games & Consoles</p>
                <p className='mb-3'>Waterproof Headphones</p>
                </div>
               </div>
               <div className="Category">
                <div>
                <p className='mb-6 font-lato text-lg' >Customer Care</p>
                </div>
                 <div className="Category font-lato from-neutral-400 text-slate-500 text-sm ">
                 <p className='mb-3 '>My Account</p>
                <p className='mb-3 '>Discount</p>
                <p className='mb-3 '>Returns</p>
                <p className='mb-3 '>Orders History</p>
                <p className='mb-3 '>Order Tracking</p>
                 </div>
               </div>
               <div className="Category">
                <div>
                <p className='mb-6 font-lato text-lg'>Pages</p>
                </div>
                 <div className="Category font-lato from-neutral-400 text-slate-500 text-sm ">
                 <p className='mb-3 '>Blog</p>
                <p className='mb-3 '>Browse the Shop</p>
                <p className='mb-3 '>Category</p>
                <p className='mb-3 '>Pre-Built Pages</p>
                <p className='mb-3 '>Visual Composer Elements</p>
                <p className='mb-3 '>WooCommerce Pages</p>
                 </div>
               </div>
              </div> 
            </div>
          </footer>
          <nav>
            <div className="Container">
              <div className='py-4 bg-slate-200 items-center flex'>
              <div className="left w-1/2 text-center">
              <p>©Webecy - All Rights Reserved</p>
            </div>
            <div className="right-icon ">
          
           
             <div className=' flex gap-4 text-2xl text-center'>
             <FaFacebook />
           <FaTwitter />
           <FaInstagram />
             </div>
 
           
            </div>
              </div>
            </div>
          </nav>
      </section>
    </div>
  )
}

export default About
