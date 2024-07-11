import React from "react";
import { useState } from "react";


const profile = [
    {
        name: 'Tanya Sinclair',
        description: 'I have interested in coding forr a while but never taken the jump until now. I\'m couldn\'t recommend this course enough. I am in the job of my dreams and so excited about the future',
        image:'image-tanya.jpg',
        specialty: 'UX Engineer'
    },

    { 
        name: 'John Tarkpor',
        description: 'If you want to lay the best foundation possible i\'d recommend taking this course. The depth the instructors go to is incredibe. I now feel so confident about starting up as a professional developer ',
        image: 'image-john.jpg',
        specialty: 'Junior Frontend Developer'
    }

]

const Slider = () => {

    const [currentprofile, setCurrentprofile] = useState(0);

    const switchProfile = () => {
        setCurrentprofile ((prevprofile) => (prevprofile === 0 ? 1 : 0))
    };
    return(
        <div className=" relative flex flex-col p-6 lg:flex-row-reverse lg:justify-center lg:0"> 
            <div className=" relative ">
                <div className=" flex justify-center items-center mt-8 lg:ml-48" >
                    < img className=" w-80" src={profile[currentprofile].image}  alt="Tanya"/>
                </div>
                <div className=" bg-white flex flex-row gap-6 w-20 justify-center p-2 rounded-3xl
                    absolute bottom-0  left-1/2 transform -translate-x-1/2 translate-y-1/2
                     lg:right-1/4 ">
                    <img onClick={switchProfile} src="icon-prev.svg" alt="icon-prev" />
                    <img onClick={switchProfile} src="icon-next.svg" alt="icon-next" />
                </div>
                
            </div>

            <div  className=" background lg:w-1/3 lg:flex lg:flex-col lg:text-left lg:absolute lg: right-2/4 lg:mt-8 lg:p-6">
                <h3 className=" text-xl text-darkBlue mt-14">"{profile[currentprofile].description}"</h3>
                <div className=" flex flex-col lg:flex-row lg:mt-4 lg:gap-1">
                    < h3 className=" text-darkBlue font-bold mt-4 lg:mt-0">{profile[currentprofile].name}</h3>
                    <h3 className=" text-grayishBlue lg:text-sm lg:mt-1">{profile[currentprofile].specialty}</h3>

                </div>
            </div>
        </div>

    );
};

export default Slider