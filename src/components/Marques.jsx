import React from 'react'
import Marque from './Marque'

function Marques() {
    const images = [
        [
            "https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bce8598eab05763c03d667_yahoo.svg",
            "https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bce9bcab2e364e3cdd5e5b_mural.svg",
            "https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bce858ab2e362edadd4bf1_haufe.svg",
            "https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bce85829ab7feaadae4e14_accel.svg",
            "https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63c48e8e94eb3938360501de_starred.webp",
            "https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bce8583a6aa79f6411d397_rainfall.svg",
            "https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bce858216b48235179e5a2_doxel-ai.svg",
            "https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bce859227654a843735ac7_super-ai.svg",
            "https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bce858003d2d6b94e762fe_maxxis.svg",
            "https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bce858216b487e0d79e5a3_remind.svg",
            "https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bce859935e9b7d029d4732_mint.svg",
            
        ],
        
        [
            "https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bce8598eab05763c03d667_yahoo.svg",
            "https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bce9bcab2e364e3cdd5e5b_mural.svg",
            "https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bce858ab2e362edadd4bf1_haufe.svg",
            "https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bce85829ab7feaadae4e14_accel.svg",
            "https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63c48e8e94eb3938360501de_starred.webp",
            "https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bce8583a6aa79f6411d397_rainfall.svg",
            "https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bce858216b48235179e5a2_doxel-ai.svg",
            "https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bce859227654a843735ac7_super-ai.svg",
            "https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bce858003d2d6b94e762fe_maxxis.svg",
            "https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bce858216b487e0d79e5a3_remind.svg",
            "https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bce859935e9b7d029d4732_mint.svg"
        ]
        
    ]
  return (
    <div className='py-5 mt-5 w-full relative overflow-hidden'>
        {images.map((item, index)=><Marque imgaesUrl= {item} key={index} direction={index === 0 ? "left" : "right"}/> )}
      
    </div>
  )
}

export default Marques
