import React from 'react'
import img1 from '../accessImage/bluec.JPG';


function Home() {
    
    return (
        <div>
            <div className= 'container'>
            <h1 className="text-center mt-4">Welcome to Kaynor_Blog</h1>
            </div>
            <div className= 'container'>
                <div className= 'row'>
                <div className = 'col-md-3'>
            <h3> <h1>Brian Clark</h1>
                 “Don’t focus on having a great blog. Focus on producing a blog that’s great for your readers.”

                 As a blogger, everything you do flows from understanding your audience and seeking to help them.
            </h3>
            </div>

            <div className = 'col-md-6'>
            <div >
                <img src={img1} alt=" " style={{width:500,height:400,}} />
            </div>
            </div>

            <div className = 'col-md-3'>
            <h3>
                  <h1>Seth Godin</h1>
                  “Not only are bloggers suckers for the remarkable, so are the people who read blogs.”

                   When you write remarkable content, you stay engaged and excited with your blog. Your readers follow suit.
            </h3>
            </div>
                </div>
            
            
            </div>

        </div>
    )
}

export default Home
