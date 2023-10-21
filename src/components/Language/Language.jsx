import React from 'react'
import Select from 'react-select'
import styles from './Language.module.scss'


import ChinaIcon from '../../assets/images/language/china.svg'
import CzechIcon from '../../assets/images/language/czech.svg'
import EnglishIcon from '../../assets/images/language/english.svg'
import FranceIcon from '../../assets/images/language/france.svg'
import GermanIcon from '../../assets/images/language/german.svg'
import ItalyIcon from '../../assets/images/language/italy.svg'
import JapanIcon from '../../assets/images/language/japan.svg'
import KoreaIcon from '../../assets/images/language/korea.svg'
import PolishIcon from '../../assets/images/language/polish.svg'
import PortugueseIcon from '../../assets/images/language/portuguese.svg'
import SpanishIcon from '../../assets/images/language/spanish.svg'

const Language = () => {
  const language = [
    { value: 'english', label: (<div className='language__content'><img src={EnglishIcon} alt="" /><span>English</span></div>) },
    { value: 'china', label: (<div className='language__content'><img src={ChinaIcon} alt="" /><span>日本</span></div>) },
    { value: 'czech', label: (<div className='language__content'><img src={CzechIcon} alt="" /><span>Czech</span></div>) },
    { value: 'france', label: (<div className='language__content'><img src={FranceIcon} alt="" /><span>Français</span></div>) },
    { value: 'german', label: (<div className='language__content'><img src={GermanIcon} alt="" /><span>Deutsch</span></div>) },
    { value: 'italy', label: (<div className='language__content'><img src={ItalyIcon} alt="" /><span>Italiano</span></div>) },
    { value: 'japan', label: (<div className='language__content'><img src={JapanIcon} alt="" /><span>日本</span></div>) },
    { value: 'korea', label: (<div className='language__content'><img src={KoreaIcon} alt="" /><span></span></div>) },
    { value: 'polish', label: (<div className='language__content'><img src={PolishIcon} alt="" /><span>Polski</span></div>) },
    { value: 'portuguese', label: (<div className='language__content'><img src={PortugueseIcon} alt="" /><span>Português</span></div>) },
    { value: 'spanish', label: (<div className='language__content'><img src={SpanishIcon} alt="" /><span>Español</span></div>) }
  ]
  return (
    <Select options={language} classNamePrefix='language' defaultValue={language[0]} />
  )
}

export default Language