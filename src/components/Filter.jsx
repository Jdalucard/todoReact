import styles from '../context/style.module.scss'
import { useContext } from 'react'
import { themeContext } from '../context/ContexTheme'

const Filter = () => {
  const { Handlereset, listTasks, setFilterState, setfilter } =
    useContext(themeContext)

  const filterActives = () => {
    setFilterState(true)
    const actives = listTasks.filter((task) => {
      return task.completed === false
    })

    setfilter(actives)
  }
  const filterCompleted = () => {
    setFilterState(true)
    const completed = listTasks.filter((task) => {
      return task.completed === true
    })

    setfilter(completed)
  }

  const length = listTasks.filter((task) => task.completed === false).length

  return (
    <section className={styles.fotterbutton}>
      <div className={styles.todoCompleted}>
        {length} {length < 2 ? 'item' : 'items'} left
      </div>
      <section className={styles.todofilter}>
        <button onClick={() => setFilterState(false)} type="submit">
          All
        </button>
        <button onClick={filterActives} type="submit">
          Activate
        </button>
        <button onClick={filterCompleted} type="submit">
          Completed
        </button>
      </section>
      <button type="submit" onClick={() => Handlereset()}>
        Clear Completed
      </button>
    </section>
  )
}
export default Filter
