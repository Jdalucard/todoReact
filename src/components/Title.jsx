import React, { useContext } from 'react'
import styles from '../context/style.module.scss'
import { themeContext } from '../context/ContexTheme'

const Title = ({ Title }) => {
  const { swichethme, icon } = useContext(themeContext)
  return (
    <>
      <div className={styles.todo}>
        <h2>{Title}</h2>
        <div className={styles.image_container}>
          <img src={icon} onClick={swichethme} alt="" />
        </div>
      </div>
    </>
  )
}

export default Title
