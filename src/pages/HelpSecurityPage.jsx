import React from 'react'
import HelpSearch from '../components/HelpSearch'
import HelpBlockText from '../components/HelpBlockText'
const HelpSecurityPage = () => {
  const text = [
    {
      title: 'Security setting',
      text: `<p>After registration, we recommend that you go to the security settings and enable two-factor authentication, pincode and go through identity verification. Any of these items is optional, but significantly affects the level of account protection. After making all changes to the settings - log out and log in to your account again to make sure everything is working properly.</p>
      <p>Two-factor authentication is used to protect the login to the account and is the use of a 6-digit one-time password to log in. We recommend using the Google Authenticator app as the most secure, but you can use other apps or browser add-ons for your PC. <br/>
Scan the QR code or enter the security key into the app. After that, you will receive a 6-digit one-time password that is valid for 30 seconds and is replaced by a new one automatically. Enter this 6-digit one-time password in the confirmation field to activate protection.
</p>
      <p>Pincode is used to protect payments. You can also use it for your lock screen if you are in a public place.
</p>
      <p>You can also set up payment protection using 2FA and a pincode at the same time.
</p>
<p>KYC (Know Your Customer) is a personal identification procedure designed to keep an account secure.<br/>
If your identity is confirmed, you can restore access to your account even if you have lost all data for accessing your account, such as password, 2FA key, pincode.<br/>
To restore access, you will need to answer the questions of the user support employee and go through the identity verification procedure again, so that we make sure that you are really accessing the account.</p>
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

export default HelpSecurityPage