import {useRef} from 'react';
import { createPortal } from 'react-dom';
import Modal from './Modal';

const labelStyles = 'uppercase text-neutral-700 font-bold text-medium block  m-[0.2em]';
const inputStyles = 'bg-neutral-400 block w-[100%] p-[0.3em] m-[0.2em] border-0 border-b border-neutral-400 focus:outline-none focus:border-b-2 focus:border-b-neutral-600';
const btnStyles = 'px-[1em] py-[0.5em] font-bold text-medium font-sans'

export default function NewProject({changeView, addProject}){
    const inputdata = useRef();
    const dialog = useRef();

    function handleFormSubmit(e){
        e.preventDefault();
        const title = inputdata.current.elements['title'].value.trim();
        const desc = inputdata.current.elements['description'].value.trim();
        const dueDate = inputdata.current.elements['due-date'].value;
        if(!title || !desc || !dueDate) dialog.current.openDialog();
        else{
            const project ={
                title:title,
                description:desc,
                dueDate:dueDate
            }
            addProject(project);
        }
        
    }

    return (
        <>  
            {createPortal(
                <Modal ref={dialog}>
                    <p className="text-neutral-800 font-bold text-2xl py-2 text-left">Details Missing!</p>
                    <p className="text-neutral-600 font-bold">Please fill all the Project details</p>
                </Modal>
            , document.getElementById('modal-root'))}

            <form id="new-project" onSubmit={(e)=>handleFormSubmit(e)} ref={inputdata} className='flex flex-col justify-center min-h-screen w-[80%]'>
                <div className="btns self-end mb-[2rem]">
                    <button onClick={()=>changeView(0)} type='button' className={`${btnStyles} `}>Cancel</button>
                    <button type='submit' className={`${btnStyles} text-neutral-200 bg-neutral-700 rounded-lg`}>Save</button>
                </div>
                <div className="project-title">
                    <label htmlFor="title" className={labelStyles}>Title</label>
                    <input type="text" name='title' id='title' required className={inputStyles}/>
                </div>
                <div className="project-description">
                    <label htmlFor="description" className={labelStyles}>description</label>
                    <textarea name="description" id="description" className={inputStyles}></textarea>
                </div>
                <div className="project-due-date">
                    <label htmlFor="due-date" className={labelStyles}>Due Date</label>
                    <input type="date" name="due-date" id="due-date" className={inputStyles}></input>
                </div>  
            </form>
        </>
        
    );
}