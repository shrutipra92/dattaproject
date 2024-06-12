import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar/Navbar'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import FirstComponent from './FirstComponent'
import Footer from '@/components/Footer/Footer'

const IndependentVendorPage = () => {
  return (
    <div className='w-full'>

            <Navbar />

            <WhatsAppIcon />

            <div className='w-full h-[70vh] relative flex items-center'>

                <img
                    src="https://websiteimagessb.s3.us-west-2.amazonaws.com/travel_hospitality.webp"
                    alt=""
                    className='absolute top-0 left-0 w-full h-full z-[-1] object-cover' />

                <motion.div
                    className='w-[90%] 1000px:w-[80%] mx-auto flex items-center'
                    initial={{
                        opacity: 0,
                        x: -100
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        duration: 1
                    }}>

                    <p className='text-black font-[700] text-[28px] 700px:text-[32px] leading-[38px] 700px:leading-[36px]'>
                        <span>Independent vendor</span>
                    </p>

                </motion.div>

            </div>

            <FirstComponent />

            <Footer />

        </div>
  )
}

export default IndependentVendorPage