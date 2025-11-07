import { useActionState , use} from "react";
import {OpinionsContext} from "../store/opinions-context";
import FormSubmit from "./FormSubmit";

export function NewOpinion() {
  const opinionsContext = use(OpinionsContext);

  async function handleFormSubmit(prevFormState, formData){
    const userName = formData.get('userName').trim();
    const title = formData.get('title').trim();
    const body = formData.get('body').trim();
    const error = [];
    if(userName == '') error.push("User name cannot be Empty");
    if(title.length<5) error.push("Title should have minimum 5 characters");
    if(body == '') error.push("Body cannot be Empty");

    if(error.length>0){
      return {error, eventData:{
        userName,
        title,
        body
      }}
    }
    await opinionsContext.addOpinion({userName, title, body});
    return {error:null};

  }

  const [formState, formAction,isPending] = useActionState(handleFormSubmit,{error:null});

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.eventData?.userName} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.eventData?.title} />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.eventData?.body}></textarea>
        </p>

        <FormSubmit/>
      </form>
      <ul className="errors">
        {formState.error && formState.error.map((err, id)=>{
          return <li key={id}>{err}</li>
        })}
      </ul>
      
    </div>
  );
}
