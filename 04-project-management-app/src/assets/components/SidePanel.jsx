const projects = [];
const className = "font-mono text-neutral-300 m-x-auto text-center m-t-3";

export default function SidePanel({changeView, projects, projectId}){
    function showProject(key){
        changeView(key+2);
    }
    return (
        <aside className="bg-neutral-900 h-screen basis-[30vw] rounded-r-xl p-[2rem] flex flex-col items-center">
            <h1 className={`${className} font-bold text-3xl my-8 uppercase`}>Your Projects</h1>
            <button onClick={()=>changeView(1)} className={`${className} text-xl bg-neutral-600 px-[1.5rem] py-[0.5rem] rounded-md`}>+Add Project</button>
            <ul className="mt-5 text-center">
                {projects.map((proj,key)=>{
                    return <li key={key+2} className={`py-[0.25em] px-[2em] hover:bg-neutral-700 hover:text-neutral-300 active:bg-neutral-700 ${projectId==key+2?'bg-neutral-700':''}`}>
                        <button className='text-neutral-400 font-bold text-lg' onClick={()=>showProject(key)} >{proj.title || 'ErrorLoading'}</button>
                    </li>
                })}
            </ul>
        </aside>
    );
}