import React from 'react'
import styles from './Filter.module.scss'
import Select, { components } from 'react-select'
import { ReactComponent as SelectArrowIcon } from '../../assets/images/svg/select-arrow.svg'
const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <SelectArrowIcon />
    </components.DropdownIndicator>
  )
}

const Filter = ({ name }) => {
  const options = [
    { value: 'All', label: 'All' },
    { value: 'Crypto', label: 'Crypto' },
    { value: 'Corporate', label: 'Corporate' },
    { value: 'Updates', label: 'Updates' },
    { value: 'Promotions', label: 'Promotions' },
    { value: 'Tutorials', label: 'Tutorials' },
  ]
  return (
    <div className={styles.filter}>
      {name}
      <Select options={options} classNamePrefix='filter' components={{ DropdownIndicator }}
        defaultValue={options[0]} />
    </div>
  )
}

export default Filter
