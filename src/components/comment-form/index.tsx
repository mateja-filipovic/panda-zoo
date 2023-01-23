import React from 'react'

type Props = {}

const CommentForm = (props: Props) => {
  return (
    <div className="w-full">      
        <label className="block mb-2 text-sm font-medium text-gray-900">Leave a comment</label>
        <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment...">
        </textarea>
        <button className="bg-amber-300 rounded py-2 px-4 mt-4">Submit</button>
    </div>
  )
}

export default CommentForm