import {useContext, useActionState, useOptimistic} from 'react';
import {OpinionsContext} from '../store/opinions-context';

export function Opinion({ opinion: { id, title, body, userName, votes } }) {
  const {upvoteOpinion,downvoteOpinion} = useContext(OpinionsContext);
  const [voteCount, setVoteCount] = useOptimistic(votes, (prevCount, mode)=>{
    return mode ==='upvote'?prevCount+1:prevCount-1;
  })
  async function upVote(){
    setVoteCount('upvote');
    await upvoteOpinion(id);
  }

  async function downVote(){
    setVoteCount('downvote');
    await downvoteOpinion(id)
  }

  const [upvoteCount, updateUpvote, upvotePending] = useActionState(upVote);
  const [downvoteCount, updateDownvote, downvotePending] = useActionState(downVote);
  return (
    <article>
      <header>
        <h3>{title}</h3>
        <p>Shared by {userName}</p>
      </header>
      <p>{body}</p>
      <form className="votes">
        <button formAction={updateUpvote} disabled={upvotePending || downvotePending}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m16 12-4-4-4 4" />
            <path d="M12 16V8" />
          </svg>
        </button>

        <span>{voteCount}</span>

        <button formAction={updateDownvote} disabled={upvotePending || downvotePending}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M12 8v8" />
            <path d="m8 12 4 4 4-4" />
          </svg>
        </button>
      </form>
    </article>
  );
}
