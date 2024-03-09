import React from 'react'
import Styles from './ViewAll.module.css'
import { MyAllProject } from '../MyAllProject/MyAllProject'
// import { Link } from 'react-router-dom'
// import { Routes, Route } from 'react-router-dom'
// import  MyAllProject  from '../MyAllProject/MyAllProject'

export const ViewAll = () => {
  const clicked = () => {
    return (
      <MyAllProject />
    )
  }
  return (
    <div>
        <div className={Styles.viewall}>
        <button className={Styles.viewproject} onClick={clicked}>View All</button>
    </div>
</div>
  )
}
