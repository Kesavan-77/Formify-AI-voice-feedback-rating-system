import React from 'react'

export default function Thankyou(props) {
  const { result } = props.location.state;
  return (
    <div class="container">
      <div class="row px-3">
        <div class="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
          <div class="card-body">
            <h4 class="title text-center mt-4">
              Thanks for your submission. Your review analysis is under process...
            </h4>
            <p>Result: {result}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
