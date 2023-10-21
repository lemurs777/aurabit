import React from 'react'
import HelpSearch from '../components/HelpSearch'
import HelpBlockText from '../components/HelpBlockText'

const HelpStartedPage = () => {
  const text = [
    {
      title: 'Get started',
      text: `<p>Aurabit is an automated trading service based on artificial intelligence. Combining the work of programmers and traders, we provide our clients with a unique product - a constantly improving algorithm that allows you to provide a completely passive income.</p>
      <p>Our service is intended for users of various levels of experience in working with finance.</p>
      <p>Follow our tips to keep your account secure and get the most out of partnering with us.</p>
      <p>We work 24/7 and our specialists are happy to help you with a consultation at any time.</p>
      `
    }
  ]
  return (
    <div className='help__grid'>
      <HelpSearch title={'Knowledge base'} text={'Find quickly or explore sections'} />
      {text.map(text => (
        <HelpBlockText key={text.title} data={text} />
      ))}
    </div>
  )
}

export default HelpStartedPage