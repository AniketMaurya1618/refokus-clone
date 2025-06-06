import React from 'react';
import Stripe from './Stripe';

function Stripes() {
        const stripeData = [
  { Url: "/assets/images/css.svg", Number: "48" },
  { Url: "/assets/images/deepset.svg", Number: "2" },
  { Url: "/assets/images/lavender.svg", Number: "11" },
  { Url: "/assets/images/css.svg", Number: "48" },
  { Url: "/assets/images/deepset.svg", Number: "2" },
  { Url: "/assets/images/lavender.svg", Number: "11" }
];


    return (
        <div className='max-w-screen mt-10 mb-10  flex flex-wrap  justify-between'>
            {stripeData.map((elem, index)=>(
                <Stripe val={elem} key={index} />
            ))}
        </div>
    );
}

export default Stripes;
