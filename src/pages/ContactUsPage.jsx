import React from 'react'

import ContactBlock from '../components/ContactBlock'
import Social from '../components/Social'
import ContactForm from '../components/ContactForm'

import { ReactComponent as TwitterIcon } from '../assets/images/social/twitter.svg'
import { ReactComponent as FbIcon } from '../assets/images/social/fb.svg'
import { ReactComponent as InstagramIcon } from '../assets/images/social/instagram.svg'
import { ReactComponent as TgIcon } from '../assets/images/social/tg.svg'
import { ReactComponent as YoutubeIcon } from '../assets/images/social/youtube.svg'
import twitterIcon from '../assets/images/social/twitter.svg'
import fbIcon from '../assets/images/social/fb.svg'
import instagramIcon from '../assets/images/social/instagram.svg'
import tgIcon from '../assets/images/social/tg.svg'
import youtubeIcon from '../assets/images/social/youtube.svg'
import mapImg from '../assets/images/page/contact/map.jpg'
import TeamSLider from '../components/TeamSLider'
import Mails from '../components/Mails'

const ContactUsPage = () => {
  const socialIcons = [
    {
      //icon: <TwitterIcon />,
      img: twitterIcon,
      path: '/',
    },
    {
      //icon: <FbIcon />,
      img: fbIcon,
      path: '/',
    },
    {
      //icon: <InstagramIcon />,
      img: instagramIcon,
      path: '/',
    },
    {
      //icon: <TgIcon />,
      img: tgIcon,
      path: '/',
    },
    {
      //icon: <YoutubeIcon />,
      img: youtubeIcon,
      path: '/',
    },
  ]

  return (
    <main className='main main--contact'>
      <div className='contact'>
        <div className="container">
          <div className="contact__head">
            <h1 className='contact__title text-gradient'>Contact us</h1>
          </div>

          <ContactBlock
            title={'Feedback form'}
            text={
              'We appreciate your questions, feedback and suggestions. Your letter will be sent to the customer service department and we will reply to you as soon as possible.'
            }
          >
            <div className={'desktop'}>
              <Social title={'Join us'} list={socialIcons} />
            </div>

            <ContactForm />
          </ContactBlock>
          <div className="mobile">
            <Social title={'Join us'} list={socialIcons} />
          </div>
          <ContactBlock
            title={'Location'}
            text={
              'Catterick Bridge, Brompton on Swale, Richmond DL10 7JB, United Kingdom'
            }
          >
            <div></div>
            <div className='contact__map'>
              <img src={mapImg} alt='map' />
            </div>
          </ContactBlock>
          <div className='contact__slider contact-slider'>
            <h4 className='contact-slider__title'>
              To discuss business, partnership or get advice on the work of
              Aurabit, please contact our managers
            </h4>
            <TeamSLider />
            <Mails />
          </div>       </div>
      </div>
    </main>
  )
}

export default ContactUsPage
