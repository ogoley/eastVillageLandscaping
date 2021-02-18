import React from 'react'


export default function ourServices(props) {
  return (
    <>
    <div className="py-1 text-nowrap servicesSmallTitle ">
      <h5 className="p-0 m-0">{props.title1}</h5>
      <h2 className="p-0 m-0 sameLine">{props.title2}</h2>
    </div>
    <p className="py-2 mb-0">
      {props.text}
    </p>
    <h4 className="pushLinkDown">
      <a href="#/">READ MORE</a>
    </h4>
    </>
  )
}
