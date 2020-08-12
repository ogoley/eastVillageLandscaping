import React from 'react'
import {Parallax} from 'react-parallax'

export default function ParallaxTest() {
  return (
        <Parallax
            bgImage={require("../images/testPattern2.png")}
            bgImageAlt="the cat"
            strength={200}
            bgStyle={{"background-repeat": "repeat"}}
        >
            Put some text content here - even an empty div with fixed dimensions to have a height
            for the parallax.
            <div style={{ height: '200px' }} />
        </Parallax>
  )
}
