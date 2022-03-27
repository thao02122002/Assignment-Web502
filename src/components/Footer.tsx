import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='pt-8 bg-gray-100'>
      <div className='grid grid-cols-12 gap-3 p-4 pl-8'>

        <div className='col-span-4'>
          <p className='pr-20 text-lg'><strong>Về chúng tôi</strong></p>
          <div className='pl-8'><img src='https://theme.hstatic.net/200000066044/1000820067/14/logo-footer.png?v=98' width='200px' /></div>
          
          <p className='text-xl'><strong>MỸ PHẨM CHÍNH HÃNG NGOẠI NHẬP</strong></p>
          <div><span>Địa chỉ:</span> <span>Trường Cao đẳng FPT Polytecnic Hà Nội</span></div>
          <div><span>SĐT:</span> < span>0392697014</span></div>
          <span>Email:</span><span>thaovtpph16945@fpt.edu.vn</span>
          <div className='grid grid-cols-2'>
            <div className='col-span-1'>
              <a href="https://www.facebook.com/profile.php?id=100069569706340"><img src='https://theme.hstatic.net/200000066044/1000820067/14/facebook.svg?v=98' width='30px'/></a>
            </div>
            <div className='col-span-1'>
            <a href="https://www.facebook.com/profile.php?id=100069569706340"><img src='https://theme.hstatic.net/200000066044/1000820067/14/instagram.svg?v=98' width='30px'/></a>
            </div>
          </div>
        </div>
        <div className='col-span-4'>
          <h1 className=''><strong>Liên hệ</strong></h1>
          <div className=' pr-16'>
             <p>Trang chủ</p>
          <p>Sản phẩm</p>
          <p>Liên hệ</p>
          <p>Tin tức</p>
          </div>
         
        </div>

        <div className='col-span-4'>
          
         
        </div>

      </div>

    </div>
  )
}

export default Footer