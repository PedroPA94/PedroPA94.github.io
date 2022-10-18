import React from 'react'
import '../styles/About.css'

export default function About () {
  return (
    <div className="About">
      <p>
        Lorem ipsum dolor sit amet, <span className='highlight'>consectetur adipiscing elit.</span> Aenean vitae cursus mi.
        Sed congue in ligula vitae mattis. Sed mauris ligula, blandit vitae nunc et,
        ullamcorper laoreet ipsum. <span className='highlight'>Praesent vel eros</span> vel dui laoreet tempor.
        Cras elementum mollis ante at rhoncus.
      </p>
      <p>
        Sed consectetur vulputate nibh, et aliquet est consectetur ac.
        Aenean tincidunt iaculis <span className='highlight'>tincidunt</span> . Nullam auctor mattis condimentum.
        Quisque ultrices porta libero sitamet sodales. Integer quis porta dui,
        dictum fringilla justo. Praesent laoreet purus nulla, ac accumsan mi euismod sed.
      </p>
    </div>
  )
};
