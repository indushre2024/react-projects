import {useState} from 'react';

export default function ProjectView({project, removeProject}){
    const [tasks, setTasks] = useState(project.tasks || []);
    
    function addTask(e){
        e.preventDefault();
        const taskSet = project.tasks ? [...project.tasks]: [];
        taskSet.push(e.target.elements['task'].value);
        e.target.elements['task'].value = ''; 
        setTasks(taskSet);
        project.tasks = taskSet;
    }

    function deleteTask(taskId){
        if(project.tasks){
            const taskSet = project.tasks.filter((task,key)=>key!=taskId);
            setTasks(taskSet);
            project.tasks = taskSet;
        }
        
    }

    return (
        <div className='flex flex-col justify-center min-h-screen w-[80%]'>
            <div className="flex justify-between">
                <p className="font-bold text-neutral-700 text-3xl mb-3">{project.title}</p>
                <button onClick = {removeProject} className="text-red-700 font-bold text-lg">Delete</button>
            </div>
            
            <p className="font-bold text-neutral-500 mb-5">{project.dueDate}</p>
            <p className="text-lg mb-7">{project.description?project.description:''}</p>
            <div className="w-[100%] h-1 bg-neutral-500 mb-3"></div>
            <div className="text-lg ml-4">
                <h2 className='font-bold text-neutral-700 text-3xl mb-3'>Tasks</h2>
                <form onSubmit={(e)=>addTask(e)}>
                    <span>
                        <input className='p-1 bg-neutral-400 border-0 border-b border-neutral-400 focus:outline-none focus:border-b-2 focus:border-b-neutral-600' type="text" name="task" id="" />
                    </span>
                    <span className="ml-4 px-[1em] py-[0.25em] text-neutral-200 bg-neutral-700 rounded-lg"><button type='submit'>Add Task</button></span>
                </form>
                
                <ul className="mt-5">
                    {project.tasks && project.tasks.map((task,id)=>{
                        return (
                            <div key={id} className="flex p-1 bg-neutral-400 justify-between mb-1">
                                <li className="">{task}</li>
                                <button onClick={()=>deleteTask(id)}>Clear</button>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}