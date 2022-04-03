import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='py-8 px-4 grid grid-cols-12 gap-2'>
      <div className='col-span-6'>
        <h1 className='pb-4 text-left'>Cửa hàng mỹ phẩm NewSkin</h1>
        <div className='grid grid-cols-6'>
              <div className='col-span-2'><span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg></span></div>
              <div className='col-span-4 text-left'><p className='hover:text-pink-400'>Địa chỉ: CN 2: 164 Ngô Gia Tự, Phan Rang-Tháp Chàm, Ninh Thuận </p></div></div>

            <div className='grid grid-cols-6'>
              <div className='col-span-2'><span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg></span></div>
              <div className='col-span-4 text-left'><p className='hover:text-pink-400'>Số điện thoại: 0833 20 22 28 </p></div></div>

            <div className='grid grid-cols-6'>
              <div className='col-span-2'><span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg></span></div>
              <div className='col-span-4 text-left'><p className='hover:text-pink-400'>Email: ns.newskin@gmail.com </p></div></div>
        
        
              <div className="h-0.5 bg-gray-200 w-full my-5"> </div>

              <div className='text-left'>
                <h3>LIÊN HỆ VỚI CHÚNG TÔI</h3>
                <form>
                  <input className='border-2 border-gray-400 hover:border-yellow-400 py-1 w-full px-2 rounded-md' type='text' placeholder='Họ và tên*' /><br /><br />
                  <input className='border-2 border-gray-400 hover:border-yellow-400 py-1 w-full px-2 rounded-md' type='email' placeholder='Email*' /><br /><br />
                  <input className='border-2 border-gray-400 hover:border-yellow-400 py-1 w-full px-2 rounded-md' type='number' placeholder='Số điện thoại*' /><br /><br />
                  <input className='border-2 border-gray-400 hover:border-yellow-400 w-full px-2 rounded-md h-48' type='text' placeholder='Nội dung*' /><br /><br />
                  <button className='rounded-full py-1 px-2 border bg-yellow-500 w-full text-white hover:bg-yellow-400'>Gửi liên hệ của bạn</button>
                </form>
              </div>
        </div>
      <div className='col-span-6 '>
        
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7839.182496401218!2d106.669041!3d10.765952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2b04c1f26f2f759f!2zTmV3c2tpbiAtIE3hu7kgUGjhuqltIENow61uaCBIw6NuZyBU4burIEjDoG4gUXXhu5Fj!5e0!3m2!1svi!2sus!4v1648958298255!5m2!1svi!2sus" width={900} height={600} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

      </div>





    </div>
  )
}

export default Contact