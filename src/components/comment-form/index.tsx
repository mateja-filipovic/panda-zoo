import { CommentService } from '@/services/comment-service';
import { useState } from 'react';

interface CommentFormProps {
    animalId: number;
    commentAddedHandlerDelegate: () => void;
}

const CommentForm = (props: CommentFormProps) => {

  const [comment, setComment] = useState('');
  const [placeHolder, setPlaceHolder] = useState('Write your thoughts here!');

  const submitComment = () => {
    if (!comment.replace(/\s/g, '').length){
      setPlaceHolder('Comment text must not be empty');
    }
    CommentService.createComment(comment, props.animalId);
    props.commentAddedHandlerDelegate()
    setComment('');
  }

  return (
    <div className="w-full">      
        <label className="block mb-2 text-base font-medium text-gray-900">Leave a comment</label>
        <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder={placeHolder}
          onChange={(e) => setComment(e.target.value)} value={comment}>
        </textarea>
        <button className="bg-amber-300 text-sm font-quick-sand rounded py-2 px-4 mt-4" onClick={() => submitComment()}>Submit</button>
    </div>
  )
}

export default CommentForm