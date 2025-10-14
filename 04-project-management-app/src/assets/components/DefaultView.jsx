

export default function DefaultView({changeView}){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex justify-center items-center w-full">
                <img src="logo.png" alt="" className="w-32 h-32 object-contain" />
            </div>
            <p className="mt-2 font-sans text-2xl font-semibold p-[1rem]">No Project Selected</p>
            <p className="mb-4 font-sans text-lg font-normal">Select a project or get started with a new one</p>
            <button onClick={() => changeView(1)} className="my-4 font-mono text-neutral-300 m-x-auto text-center m-t-3 text-xl bg-neutral-800 px-[1.5rem] py-[0.5rem] rounded-md">Create new project</button>
        </div>
    );
}