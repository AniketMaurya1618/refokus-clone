import React from 'react'
import Button from './Button'

function Nav() {
  return (
    <div className='text-white max-w-screen-xl mx-auto py-6 flex items-center  justify-between border-b-[1px] border-zinc-700'>
      <div className='nleft flex items-center'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEV1UPhuRfh7WPi/svvEuPzFufxrQPjr5/7////e2P1sQvjz8P7m4f5xS/iIa/nXzv3Tyvx/X/hpPfiTevmYgPqQdfn7+//u6/75+P+bhPpjM/eGaPlwSfjMwfyolfqrmPq4qPvPmvTqAAAAkklEQVR4AbXQNRKAUBRD0eDu7ux/lQye/4aWW+Z0wc9plDTdMO8sQ5jtuJTnqxgwhja4KE7e0gxqUf5mQ+QX5VPlC0tdytLA5TVjY6vY7mPb1nttF32h3ud7uwncG0ZQhJNUxmKWStjli1TCyJbKCEUl3hrJh3a81LHB2aHrZsCliQ+1tRpx5JdrBNH4LNGIf9sAbscOp74CQdwAAAAASUVORK5CYII=" alt="" />
        <div className="link flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
            elem.length === 0
              ? <span key={index} className='h-6 w-[2px] bg-zinc-700'></span>
              : <a key={index} className='flex items-center gap-1' href="#">
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #0FF19" }}
                    className='inline-block h-1 w-1 rounded-full bg-green-500'
                  ></span>
                )}
                {elem}
              </a>
          ))}
        </div>
      </div>
      <Button/>
    </div>
  )
}

export default Nav
