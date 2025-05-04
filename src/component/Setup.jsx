import React from 'react'
import setimg from '../assets/Image/setup-1.png'
import setimg2 from '../assets/Image/setup-2.png'
import setimg3 from '../assets/Image/setup-3.png' 
import setimg4 from '../assets/Image/setup-4.png'
import setimg5 from '../assets/Image/setup-5.png'
import setimg6 from '../assets/Image/setup-6.png'
import setimg7 from '../assets/Image/setup-7.png'
import setimg8 from '../assets/Image/setup-8.png'
import setimg9 from '../assets/Image/setup-9.png'


const Setup = () => {
  return (
    <>
    <div className="pt-[67px] pb-[50px]">
          <div className="textHead">
              <p className='Cardtittle !text-[20px] !text-[#616161] text-center'>Share your setup with</p>
              <h2 className='tittle !text-[40px] text-center'>#FuniroFurniture</h2>
          </div>
          <div className="grid grid-cols-12 grid-rows-8 gap-4 h-[720px]">
          <img src={setimg} alt="setup1" className="col-start-1 col-end-2 row-start-1 row-end-5 object-cover w-full h-full" />
          <img src={setimg2} alt="setup2" className="col-start-1 col-end-3 row-start-5 row-end-9 object-cover w-full h-full" />
          <img src={setimg3} alt="setup3" className="col-start-2 col-end-6 row-start-2 row-end-5 object-cover w-full h-full" />
          <img src={setimg4} alt="setup6" className="col-start-3 col-end-6 row-start-5 row-end-8 object-cover w-full h-full" />
          <img src={setimg5} alt="setup5" className="col-start-6 col-end-8 row-start-3 row-end-7 object-cover w-full h-full" />
          <img src={setimg6} alt="setup9" className="col-start-8 col-end-10 row-start-6 row-end-9 object-cover w-full h-full" />
          <img src={setimg7} alt="setup7" className="col-start-8 col-end-11 row-start-2 row-end-6 object-cover w-full h-full" />
          <img src={setimg8} alt="setup8" className="col-start-12 col-end-10 row-start-6 row-end-8 object-cover w-full h-full" />
          <img src={setimg9} alt="setup4" className="col-start-11 col-end-13 row-start-1 row-end-6 object-cover w-full h-full" />
        </div>
      
    </div> 
    </>
  )
}

export default Setup
