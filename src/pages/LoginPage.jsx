import React from 'react'

import clsx from 'clsx'

import Header from '../components/Header'
import EnterForm from '../components/EnterForm/EnterForm'
const LoginPage = () => {
  return (
    <>
      <Header />
      <main className='main main--login'>
        <div className="login">
          {/*<div className="container">*/}
          <EnterForm />
          {/*</div>*/}
        </div>
      </main>
    </>
  )
}

export default LoginPage