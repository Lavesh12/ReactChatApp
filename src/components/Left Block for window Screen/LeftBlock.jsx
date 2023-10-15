import React from 'react';
import { LuEdit, LuSearch } from "react-icons/lu";
import { HiDotsHorizontal } from "react-icons/hi";
import ContactProfile from '../Contact Profile Name/ContactProfile';

const LeftBlock = ({data}) => {
    return (
        <>
            {/* chat header  */}
            <div className='d-flex justify-content-between align-items-center py-3 px-1'>
                <div className='d-flex align-items-center'>
                    <div>
                        <img className='profile_photo' src="https://img.freepik.com/premium-photo/happy-3d-business-man-transparent-white-background_457222-3120.jpg" alt="profile_photo" />
                    </div>
                    <h1 className='px-2 text-light'>Chats</h1>
                </div>
                <div className='d-flex'>
                    <div className='mx-2 text-light'><LuEdit /></div>
                    <div className='mx-2 text-light'><HiDotsHorizontal /></div>
                </div>
            </div>

            {/* search field to find contact group */}
            <div className='position-relative px-1'>
                <input type="text" className="form-control form-control-sm input_bottom_line" placeholder='Search or start new chat' />
                <span className='text-dark position-absolute top-0 end-0 mx-2 bg-light'><LuSearch /></span>
            </div>

            {/* contact profile & name */}
            <>
                <ContactProfile item={data} active_backgound={"active_backgound"} text_light={'text-light'}/>
            </>
            
        </>
    );
};

export default LeftBlock;