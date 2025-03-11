import React from 'react'
import ratingIcon from "../assets/rating.jpg"
import thumbnail from "../assets/thumbnail.jpg"
import playIcon from "../assets/play.jpg"

const Banner = () => {
  return (
    <div className='w-[100] h-[500px] bg-center bg-no-repeat bg-cover relative' style={{backgroundImage: 'url(/banner.jpg)'}}>
        <div className='absolute w-full h-full top-0 bg-black opacity-50'/>
        <div className='w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20'>
            <div className='flex flex-col space-y-5 items-baseline w-[50%]'>
                <p className='text-white bg-gradient-to-r from-red-600 to-red-300 text-md py-2 px-5'>TV Show</p>
                <div className=' flex flex-col space-y-4'>
                    <h2 className='text-white text-4xl font-bold'>Nhóc quậy và khu rừng kỳ diệu</h2>
                    <div className='flex items-center space-x-3'>
                        <img src={ratingIcon} alt='rating' className='h-8 w-8'/>
                        <img src={ratingIcon} alt='rating' className='h-8 w-8'/>
                        <img src={ratingIcon} alt='rating' className='h-8 w-8'/>
                        <img src={ratingIcon} alt='rating' className='h-8 w-8'/>
                        <img src={ratingIcon} alt='rating' className='h-8 w-8'/>
                    </div>
                    <p className='text-white'>Angelo mơ ước trở thành một nhà thám hiểm và nhà động vật học. 
                        Khi cậu lên đường cùng gia đình để thăm người bà yêu quý đang đau yếu của mình, cha mẹ
                         cậu đã bỏ cậu lại ở một trạm dừng chân. Bị bỏ mặc, Angelo quyết định băng qua khu rừng 
                         để tìm kiếm gia đình mình. Cậu bước vào một thế giới đen tối và bí ẩn, nơi sinh sống của 
                         những sinh vật kỳ lạ.
                    </p>
                    <div className='flex items-center space-x-4'>
                        <button className='px-5 py-2 text-white bg-black font-bold text-sm'>Chi tiết</button>
                        <button className='px-5 py-2 text-white bg-red-600 font-bold text-sm'>Xem Phim</button>

                    </div>
                </div>
            </div>
            <div className='w-[50%] flex items-center justify-center'>
                <div className='w-[300px] h-[400px] relative group cursor-pointer'>
                    <img src={thumbnail} alt="thumbnail" className='w-full h-full object-cover' />
                    <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center 
                    backdrop-blur-sm opacity-0  group-hover:opacity-100'>
                        <img src={playIcon} className='w-20 h-20' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
