import React from 'react'
import Commobanner from '../component/Commobanner'

const Checkout = () => {
  return (
    <div>
      <div className="">
        <div className="container">
            <div className="">
                <Commobanner BNtittle={'Checkout'}/>
            </div>
            <div className="flex justify-center mt-[98px] mb-[52px]">
                <div className="Billing">
                    <h2 className='text-[36px] font-poppins font-semibold mb-[39px]'>Billing details</h2>
                    <div className="flex gap-[30px]">
                        <div className="flex flex-col">
                            <label htmlFor="First" className='text-[16px] font-poppins font-medium mb-[22px]'>First Name</label>
                            <input type="text" name="" id="First" className='w-[211px] h-[75px] text-[18px] font-poppins font-medium px-7 py-1 outline-none border-[1px] border-[#9F9F9F] rounded-[10px]'/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="Last" className='text-[16px] font-poppins font-medium mb-[22px]'>Last Name</label>
                            <input type="text" name="" id="Last" className='w-[211px] h-[75px] text-[18px] font-poppins font-normal px-7 py-1 outline-none border-[1px] border-[#9F9F9F] rounded-[10px]'/>
                        </div>
                    </div>
                    <div className="flex flex-col my-[36px]">
                        <label htmlFor="Company" className='text-[16px] font-poppins font-medium mb-[22px]'>Company Name (Optional)</label>
                        <input type="text" name="" id="Company" className='w-[453px] h-[75px] text-[18px] font-poppins font-normal px-7 py-1 outline-none border-[1px] border-[#9F9F9F] rounded-[10px]'/>
                    </div>
                    <div className="flex flex-col my-[36px]">
                        <label htmlFor="Country" className='text-[16px] font-poppins font-medium mb-[22px]'>Country / Region</label>
                        <select className='w-[453px] h-[75px] text-[18px] font-poppins font-normal px-7 py-1 outline-none border-[1px] border-[#9F9F9F] rounded-[10px]'>
                            <option value="defualt" className='text-[#9F9F9F]'>Select a country</option>
                            <option value="defualt">Afghanistan</option>
                            <option value="defualt">Albania</option>
                            <option value="defualt">Algeria</option>
                            <option value="defualt">American Samoa</option>
                            <option value="defualt">Andorra</option>
                            <option value="defualt">Angola</option>
                            <option value="defualt">Anguilla</option>
                            <option value="defualt">Antarctica</option>
                            <option value="defualt">Antigua and Barbuda</option>
                            <option value="defualt">Argentina</option>
                            <option value="defualt">Armenia</option>
                            <option value="defualt">Aruba</option>
                            <option value="defualt">Australia</option>
                            <option value="defualt">Austria</option>
                            <option value="defualt">Azerbaijan</option>
                            <option value="defualt">Bahamas</option>
                            <option value="defualt">Bahrain</option>
                            <option value="defualt">Bangladesh</option>
                            <option value="defualt">Barbados</option>
                            <option value="defualt">Belarus</option>
                            <option value="defualt">Belgium</option>
                            <option value="defualt">Belize</option>
                            <option value="defualt">Benin</option>
                            <option value="defualt">Bermuda</option>
                            <option value="defualt">Bhutan</option>
                            <option value="defualt">Bolivia</option>
                            <option value="defualt">Bosnia and Herzegovina</option>
                            <option value="defualt">Cypus</option>
                            <option value="defualt">China</option>
                            <option value="defualt">Canada</option>
                            <option value="defualt">Russia</option>
                            <option value="defualt">Denmark</option>
                            <option value="defualt">Dubai</option>
                            <option value="defualt">iran</option>
                            <option value="defualt">Yamen</option>
                            <option value="defualt">Japan</option>
                            <option value="defualt">Koria</option>
                            <option value="defualt">Sudan</option>
                            <option value="defualt">Nepal</option>
                            <option value="defualt">Malta</option>
                            <option value="defualt">France</option>
                            <option value="defualt">Portugal</option>
                            <option value="defualt">Pakistan</option>
                            <option value="defualt">Palestine</option>
                            <option value="defualt">Turkey</option>
                            <option value="defualt">saudi Arabia</option>
                            <option value="defualt">Switzerland</option>
                            <option value="defualt">Greece </option>
                            <option value="defualt">Garmany</option>
                            <option value="defualt">US</option>
                            <option value="defualt">USA</option>

                        </select>
                    </div>
                    <div className="flex flex-col my-[36px]">
                        <label htmlFor="Street" className='text-[16px] font-poppins font-medium mb-[22px]'>Street address</label>
                        <input type="text" name="" id="Street" className='w-[453px] h-[75px] text-[18px] font-poppins font-normal px-7 py-1 outline-none border-[1px] border-[#9F9F9F] rounded-[10px]'/>
                    </div>
                    <div className="flex flex-col my-[36px]">
                        <label htmlFor="Town" className='text-[16px] font-poppins font-medium mb-[22px]'>Town / City</label>
                        <input type="text" name="" id="Town" className='w-[453px] h-[75px] text-[18px] font-poppins font-normal px-7 py-1 outline-none border-[1px] border-[#9F9F9F] rounded-[10px]'/>
                    </div>
                    <div className="flex flex-col my-[36px]">
                        <label htmlFor="Province" className='text-[16px] font-poppins font-medium mb-[22px]'>Province</label>
                        <select type="text" name="" id="Province"  className='w-[453px] h-[75px] text-[18px] font-poppins font-normal px-7  py-1 outline-none border-[1px] border-[#9F9F9F] rounded-[10px]'>
                             <option value="defualt" className='text-[#9F9F9F]'>Select a province</option>
                                <option >Province 1</option>
                                <option >Province 2</option>
                                <option >Province3</option>
                                <option >Province 4</option>
                                <option >Province 5</option>
                                <option >Province 6</option>
                                <option >Province 7</option>
                                <option >Province 8</option>
                                <option >Province 9</option>
                                <option >Province 10</option>

                        </select>
                    </div>
                    <div className="flex flex-col my-[36px]">
                        <label htmlFor="ZIP" className='text-[16px] font-poppins font-medium mb-[22px]' >ZIP code</label>
                        <input type="number" id="ZIP" className='w-[453px] h-[75px] text-[18px] font-poppins font-normal px-7 py-1 outline-none border-[1px] border-[#9F9F9F] rounded-[10px]'/>
                    </div>
                    <div className="flex flex-col my-[36px]">
                        <label htmlFor="Phone"  className='text-[16px] font-poppins font-medium mb-[22px]'name='Phone' >Phone</label>
                        <input type="text" id="Phone" className='w-[453px] h-[75px] text-[18px] font-poppins font-normal px-7 py-1 outline-none border-[1px] border-[#9F9F9F] rounded-[10px]'/>
                    </div>
                    <div className="flex flex-col mt-[36px]">
                        <label htmlFor="Email"  className='text-[16px] font-poppins font-medium mb-[22px]'>Email address</label>
                        <input type="text" name="Email" id="Email" className='w-[453px] h-[75px] text-[18px] font-poppins font-normal px-7 py-1 outline-none border-[1px] border-[#9F9F9F] rounded-[10px]'/>
                    </div>
                    <div className="flex flex-col mt-[70px]" >
                        <input type="text" name="Additional" id="" placeholder='Additional information' className='w-[453px] h-[75px] text-[18px] font-poppins font-normal px-7 py-1 outline-none border-[1px] border-[#9F9F9F] rounded-[10px]'/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
