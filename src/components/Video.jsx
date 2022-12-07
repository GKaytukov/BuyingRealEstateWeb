import React from "react"
import FinalVideo from '../assets/FinalVideo.mov'

export default function Video() {
    return (
        <>
        <div>
        <video src={FinalVideo} autoPlay muted controls />
        {/* <video src={} /> */}
        {/* <video src={} /> */}
      </div>
      </>
    )
}