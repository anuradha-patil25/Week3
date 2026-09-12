import TaskItem from"./TaskItem";
function TaskList({tasks,onComplete,onDelete}){
    return(
        <div>
            {tasks.map((task)=>(
            <TaskItem
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
            />
       ))}
        </div>
    );
}
export default TaskList;