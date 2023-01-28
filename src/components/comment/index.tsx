interface CommentProps{
  author: string,
  date: string,
  content: string
}

const CommentComponent = (props: CommentProps) => {
  return (
    <div className="w-full mb-6">
        <div className="flex flex-col md:flex-row md:justify-between md:mb-2">
            <p className="mb-1 md:mb-0 font-nunito font-bold text-base">{props.author}</p>
            <p className="mb-1 md:mb-0 font-nunito text-base text-date-custom">{props.date}</p>
        </div>
        <p className="text-justify font-quick-sand text-base text-gray-introduction">{props.content}</p>
        <div className="container mx-auto flex justify-start">
            <hr className="h-1 mt-5 md:mt-6 bg-primary border-0 w-60" />
        </div>
    </div>
  )
}

export default CommentComponent