import React from 'react'


export default function ourServices(props) {
  return (
    <>
    <div className="py-1 servicesSmallTitle ">
      <h2 className="title1">{props.title1} </h2>
      <h2 className="title2"> {props.title2}</h2>
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

// p-0 m-0 