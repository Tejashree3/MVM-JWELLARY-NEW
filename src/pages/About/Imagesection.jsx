import React from 'react'
import img3 from "../../assets/about/about3.png"

const Imagesection = ({ innerImage }) => {
    return (

        <div className='flex justify-center items-center'>
            <div className=' min-h-[266px] w-[2800px] flex justify-center items-center'
                style={{
                    backgroundImage: `url(${img3})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }
                }
            >
                <div className='container'>
                    <div className='px-10 flex justify-center items-center'>
                        <img src={innerImage} alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Imagesection