import React from 'react'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import vote from './components/vote'




function ParentComponent() {
  return (
    <div className= "ParentComponent">
      <SignUp />
      <SignIn />

    </div>

  )
}

export default ParentComponent;
