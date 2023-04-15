import React from 'react'


export default function About(props) {

  return (
    <>
    
    <div className="accordion" id="accordionExample" data-bs-theme={props.mode}>
  <div className="accordion-item" >
    <h2 className="accordion-header" >
      <button className={`accordion-button text-${props.mode === 'light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
        About us
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
      <div className= {`accordion-body text-${props.mode === 'light'?'dark':'light'}`} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quisquam atque eum, accusamus velit veniam, cupiditate asperiores iure necessitatibus obcaecati recusandae eaque sapiente similique corrupti nesciunt provident! Eaque, rerum laboriosam!
      </div>
    </div>
  </div>
  </div>

</>
  )
}
