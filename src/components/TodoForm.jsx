import { React, useContext } from 'react'
import { themeContext } from '../context/ContexTheme.jsx'
import styles from '../context/style.module.scss'
import iconCheck from '../assets/todo-app-main/images/icon-check.svg'
import iconCross from '../assets/todo-app-main/images/icon-cross.svg'
import { IoIosAdd } from 'react-icons/io'
import Filter from './Filter.jsx'
import Title from './Title.jsx'

const Todolist = () => {
  const {
    theme,
    image,
    HandleformSumit,
    tasks,
    handleChange,
    listTasks,
    completed,
    Clear,
    filter,
    filterstate,
  } = useContext(themeContext)

  return (
    <>
      <main className={`${styles.container} ${styles[theme]}`}>
        <header className={styles.Backgroud}>
          <img src={image} alt="" />
          <div className={styles.title}>
            <Title Title="Todo" />
          </div>
        </header>
        <aside className={styles.container_card}>
          <form onSubmit={HandleformSumit} className={styles.styleform}>
            <div className={styles.todoImageIconHeader}>
              <div className={styles.iconimageInput}>
                <h1>
                  <IoIosAdd onClick={HandleformSumit} />
                </h1>
              </div>
              <label htmlFor="task">
                <input
                  type="text"
                  name="task"
                  id="task"
                  minLength={1}
                  maxLength={60}
                  value={tasks.name}
                  className={styles.task}
                  placeholder="Create a new Todo"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className={styles.divtask}>
              {filterstate
                ? filter.map((task) => {
                    return (
                      <aside className={styles.Container_OnList} key={task.id}>
                        <article className={styles.ultaks}>
                          {task.completed ? (
                            <div
                              onClick={() => completed(task.id)}
                              className={styles.imagecheck}
                            >
                              <img src={iconCheck} alt="" />
                            </div>
                          ) : (
                            <div
                              onClick={() => completed(task.id)}
                              className={styles.imagecheckactivate}
                            />
                          )}
                          <ul className={styles.ullist}>
                            {task.completed ? (
                              <li
                                className={styles.completedtask}
                                onClick={() => completed(task.id)}
                              >
                                {task.taskName.task}
                              </li>
                            ) : (
                              <li
                                className={styles.activetask}
                                onClick={() => completed(task.id)}
                              >
                                {task.taskName.task}
                              </li>
                            )}
                          </ul>
                          <div className={styles.imageDelete}>
                            <img
                              onClick={() => Clear(task.id)}
                              src={iconCross}
                              alt=""
                            />
                          </div>
                        </article>
                      </aside>
                    )
                  })
                : listTasks.map((task) => {
                    return (
                      <aside className={styles.Container_OnList} key={task.id}>
                        <article className={styles.ultaks}>
                          {task.completed ? (
                            <div
                              onClick={() => completed(task.id)}
                              className={styles.imagecheck}
                            >
                              <img src={iconCheck} alt="" />
                            </div>
                          ) : (
                            <div
                              onClick={() => completed(task.id)}
                              className={styles.imagecheckactivate}
                            />
                          )}

                          <ul className={styles.ullist}>
                            {task.completed ? (
                              <li
                                className={styles.completedtask}
                                onClick={() => completed(task.id)}
                              >
                                {task.taskName.task}
                              </li>
                            ) : (
                              <li
                                className={styles.activetask}
                                onClick={() => completed(task.id)}
                              >
                                {task.taskName.task}
                              </li>
                            )}
                          </ul>
                          <div className={styles.imageDelete}>
                            <img
                              onClick={() => Clear(task.id)}
                              src={iconCross}
                              alt=""
                            />
                          </div>
                        </article>
                      </aside>
                    )
                  })}
            </div>
          </form>
          <Filter />
        </aside>
      </main>
    </>
  )
}

export default Todolist
