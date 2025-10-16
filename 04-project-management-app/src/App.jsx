import SidePanel from "./assets/components/SidePanel";
import NewProject from "./assets/components/NewProject";
import DefaultView from "./assets/components/DefaultView";
import {useState, useRef} from 'react';
import ProjectView from "./assets/components/ProjectView";

const projects = [];

function App() {
  const [viewId, setViewId] = useState(0);

  function changeView(value){
    setViewId(value);
  }

  function addProject(project){
    projects.push(project);
    changeView(projects.length+1);
  }

  function deleteProject(projectId){
    changeView(0);
    projects.splice(projectId,1);
  }

  return (
    <div className="flex max-h-[100vh]">
      <SidePanel changeView={changeView} projects={projects} projectId={viewId}/>
      <div className="px-[1.5rem] grow bg-neutral-300">
        {viewId==0 && <DefaultView changeView={changeView}/>}
        {viewId==1 && <NewProject changeView={changeView} addProject={addProject}/>}
        {viewId>1 && <ProjectView project={projects[viewId-2]} removeProject = {()=>deleteProject(viewId-2)}/>}
      </div>
    </div>
  );
}

export default App;
