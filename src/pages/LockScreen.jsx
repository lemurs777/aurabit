import React from 'react'

const LockScreen = () => {
  return (
    <div className='lockScreen' >
      <div className="container">
        <div className="lockScreen__inner">
          <h1 className="lockScreen__title">Enter pin-code</h1>
          <div className="lockScreen__inputs">
            <input type="text" /><input type="text" /><input type="text" /><input type="text" />
          </div>
          <button className="lockScreen__btn">Enter to Aurabit</button>
        </div>
      </div>
    </div>
  )
}

export default LockScreen