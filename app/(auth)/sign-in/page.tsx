import React from 'react'
import AuthForm from '@/components/ui/AuthForm'

const Signin = () => {
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type="sign-in"/>
    </section>
  )
}

export default Signin