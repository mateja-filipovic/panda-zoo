import React from 'react'

type Props = {}

const TextSection = (props: Props) => {
  return (
    <div className="container mx-auto grid lg:grid-cols-3 mt-12 gap-10 px-52">
        <div className="col-span-1 flex items-center text-center">
            <h3 className="text-5xl border-b-4 border-primary py-4">
                <span className="font-bold">
                Lorem 
                </span>
                <br/>
                ipsum
            </h3>
        </div>
        <div className="col-span-2 text-justify">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus elit, tempor in risus sed, pellentesque aliquet elit. Sed in sapien purus
            </p>
            <p className="mt-3">
                Quisque eget risus a quam tincidunt vehicula et id tellus. Curabitur quam nibh, pulvinar vitae ornare tristique, lacinia nec nulla. Phasellus imperdiet nisi et mi fermentum dignissim eu sed ante. Integer sed dolor purus. Maecenas molestie lacinia nibh, ornare volutpat nulla tempor a. Vivamus ac tristique lectus. Suspendisse facilisis massa nec erat imperdiet malesuada. Quisque in rutrum lorem. Vestibulum non justo quis nibh tincidunt scelerisque in at ligula. Vivamus condimentum nec lacus quis vehicula. Nulla turpis lorem, pretium sodales enim aliquet, blandit molestie ligula.
            </p>
        </div>
    </div>
  )
}

export default TextSection