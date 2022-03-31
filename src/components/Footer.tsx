import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='pt-8 bg-gray-100'>
      <div className='grid grid-cols-12 gap-3 p-4 pl-8 text-left'>

        <div className='col-span-4'>
          <h1 className=''><strong>Về chúng tôi</strong></h1>
          <div className=''><img src='https://theme.hstatic.net/200000066044/1000820067/14/logo-footer.png?v=98' width='200px' /></div>

          <p className='text-xl'><strong>MỸ PHẨM CHÍNH HÃNG NGOẠI NHẬP</strong></p>
          <div><span>Địa chỉ:</span> <span>Trường Cao đẳng FPT Polytecnic Hà Nội</span></div>
          <div><span>SĐT:</span> < span>0392697014</span></div>
          <span>Email:</span><span>thaovtpph16945@fpt.edu.vn</span>
          <div className='grid grid-cols-4'>
            <div className='col-span-1'>
              <a href="https://www.facebook.com/profile.php?id=100069569706340"><img src='https://theme.hstatic.net/200000066044/1000820067/14/facebook.svg?v=98' width='30px' /></a>
            </div>
            <div className='col-span-3'>
              <a href="https://www.facebook.com/profile.php?id=100069569706340"><img src='https://theme.hstatic.net/200000066044/1000820067/14/instagram.svg?v=98' width='30px' /></a>
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
          <h1>Fanpage</h1>
          <div>
            <iframe width="350px" height="250px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameBorder={0} scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.12/plugins/page.php?adapt_container_width=false&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df6dd0e6cd1ba98%26domain%3Dshopsonmoi.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fshopsonmoi.vn%252Ff1f81aa56aa1c4%26relation%3Dparent.parent&container_width=350&height=250&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2FShopSonMoiVietNam&locale=en_US&sdk=joey&show_facepile=true&show_posts=false&small_header=false&width=350" style={{ border: 'none', visibility: 'visible', width: 350, height: 130 }} />
          </div>

        </div>

      </div>

    </div>
  )
}

export default Footer