import React from 'react'
import {Parallax} from 'react-parallax'

export default function ParallaxTest() {
  return (
        <Parallax
            bgImage={require("../images/testPattern2.png")}
            bgImageAlt="the cat"
            strength={200}
            style={{"background-repeat": "repeat", "background-size":"initial"}}
        >
            Parallax test
            <div style={{ height: '200px' }} />
        </Parallax>
  )
}
