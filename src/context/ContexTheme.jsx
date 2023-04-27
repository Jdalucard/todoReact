import { useState, createContext } from 'react'
import Sun from '../assets/todo-app-main/images/icon-sun.svg'
import Moon from '../assets/todo-app-main/images/icon-moon.svg'
import bgdark from '../assets/todo-app-main/images/bg-desktop-dark.jpg'
import bgdlight from '../assets/todo-app-main/images/bg-desktop-light.jpg'

export const themeContext = createContext()

const Theme = ({ children }) => {
  /* theme state */
  const [theme, settheme] = useState('light')
  /* form state  */
  const [tasks, setTask] = useState('')
  /* taks state */
  const [listTasks, setListaks] = useState([])
  /* state filter */
  const [filterstate, setFilterState] = useState(false)
  /* array filter  */
  const [filter, setfilter] = useState([])

  const swichethme = () => {
    theme === 'light' ? settheme('dark') : settheme('light')
  }
  const icon = theme === 'light' ? Sun : Moon
  const image = theme === 'light' ? bgdark : bgdlight

  /*  function form  */
  /* form controler change */
  const handleChange = (e) => {
    setTask({
      ...tasks,
      [e.target.name]: e.target.value,
    })
  }
  /* send form ad create task */
  const HandleformSumit = (e) => {
    e.preventDefault()
    localStorage.setItem('tasks', [...listTasks])

    if (tasks === '') {
      alert('Datos Incompleted ')
      return
    }

    const newtaks = {
      id: new Date().getTime(),
      taskName: tasks,
      completed: false,
    }

    const temp = [...listTasks, newtaks]
    setFilterState(false)
    setListaks(temp)
  }

  /*  button function  */

  /* delete funtion */
  const Clear = (filterlist) => {
    const deletes = listTasks.filter((task) => task.id !== filterlist)

    setListaks(deletes)
  }
  /* tasks completed */
  /* 
  /  const handleCompleted = (id) => {
    const updatelist = listTasks.map((item) => {
      if (item.id === id) {
        return { ...listTasks, completed: !item.completed }
      }
      return item
    })
    console.log(updatelist)
    setListaks(updatelist)
  }  */
  const completed = (idcompleted) => {
    setListaks(
      listTasks.map((todo) => {
        if (todo.id === idcompleted) {
          if (!todo.completed) {
            return { ...todo, completed: true }
          } else return { ...todo, completed: false }
        } else return todo
      })
    )

    if (filterstate) {
      setfilter(
        filter.map((todo) => {
          if (todo.id === idcompleted) {
            if (!todo.completed) {
              return { ...todo, completed: true }
            } else return { ...todo, completed: false }
          } else return todo
        })
      )
    }
  }

  /* Task activate */

  /* reset form */
  const Handlereset = (e) => {
    const reset = listTasks.filter((task) => {
      return task.completed !== true
    })

    if (reset) {
      setListaks(reset)
      setFilterState(false)
    }
  }

  return (
    <>
      <themeContext.Provider
        value={{
          theme,
          swichethme,
          icon,
          image,
          handleChange,
          HandleformSumit,
          Clear,
          completed,
          filterstate,
          Handlereset,
          listTasks,
          setListaks,
          tasks,
          setFilterState,

          filter,
          setfilter,
        }}
      >
        {children}
      </themeContext.Provider>
    </>
  )
}

export default Theme
