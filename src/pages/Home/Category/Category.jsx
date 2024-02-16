import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.scss'


import Product from '../../../components/Product/Product'
import ProductSkeleton from './ProductSkeleton';
const Category = ({error, load, data, header, fromProductInfo}) => {
  return (
    <div className='row w-100 my-5 mx-0'>
        <h3 className='category__header'>{header}</h3>
    <Swiper
      breakpoints ={{
         256 : {
            // width : 456,
            slidesPerView : 1
         },
         568: {
          // width: 568,
          slidesPerView: 2,
        },
        768 : {
          // width: 768,
          slidesPerView: 3,
        },

        968 : {
          slidesPerView: 4,
        }
      }}
      modules={[Navigation]}
      navigation
      spaceBetween={30}
      slidesPerView={4}

      
    >
    {load ? <ProductSkeleton/> : data?.map((item,index)=>(
      <SwiperSlide>
         <Product item={item} fromProductInfo/>
      </SwiperSlide> 
  ))}

    </Swiper>
    </div>
  )
}

export default Category