
const Tasks = ({ listTask }) => {
    //console.log(props)
    const rederTasks = () => {
        return listTask.map((task, i) => {
            if (task.completed) {
                return <article key={i}> <h4 className="tachado"> {task.task}</h4></article>
            } else {
                return <article key={i}> <h4> {task.task}</h4></article>
            }
        }
        )
    }
    return <div>
        {rederTasks()}
    </div>
}
export default Tasks;
/* añadir un formulario, donde solicite el nombre de la nueva tarea y añadirla al array cuando ocurra un evento click sobre el boton del form */
