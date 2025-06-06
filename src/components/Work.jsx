import React, { useState } from 'react';
import { motion, useScroll } from "framer-motion"

function Work() {
    const [image, setImage] = useState([
        { Url: "https://plus.unsplash.com/premium_photo-1661741405731-c41f92e02e2c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", left: "50%", top: "50%", isActive: false },
        { Url: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", left: "44%", top: "56%", isActive: false },
        { Url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", left: "56%", top: "45%", isActive: false },
        { Url: "https://images.unsplash.com/photo-1726137065566-153debe32a53?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", left: "53%", top: "60%", isActive: false },
        { Url: "https://images.unsplash.com/photo-1726065235221-78562122baf3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", left: "40%", top: "43%", isActive: false },
        { Url: "https://images.unsplash.com/photo-1726064855857-46c37dc43c78?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", left: "55%", top: "60%", isActive: false }
    ])

    const { scrollYProgress } = useScroll()

    scrollYProgress.on("change", (data) => {
        function showImages(arr) {
            setImage((prev) =>
                prev.map((item, index) => ({
                    ...item,
                    isActive: arr.includes(index),
                }))
            )
        }

        switch (Math.floor(data * 100)) {
            case 0:
                showImages([])
                break;
            case 1:
                showImages([0])
                break;
            case 2:
                showImages([1]);
                break;
            case 3:
                showImages([1, 2]);
                break;
            case 4:
                showImages([1, 2, 3])
                break;
            case 5:
                showImages([1, 2, 3, 4])
                break;
            case 6:
                showImages([1, 2, 3, 4, 5])
                break;
        }
    })


    return (
        <div className='w-full mt-10'>
            <div className='relative max-w-screen-xl mx-auto'>
                <h1 className='text-white text-[40vw] select-none leading-none text-center tracking-tight font-medium'>work</h1>
                <div className='absolute top-0 w-full h-full'>
                    {image.map((elem, index) =>
                        elem.isActive && (
                            <img
                                key={index}
                                className='absolute h-[250px] -translate-x-1/2 -translate-y-1/2 w-48 rounded-lg'
                                style={{ top: elem.top, left: elem.left }}
                                src={elem.Url}
                                alt={`Work image ${index + 1}`}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default Work;
