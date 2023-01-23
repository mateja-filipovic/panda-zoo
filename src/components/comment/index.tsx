type Props = {}

const CommentComponent = (props: Props) => {
  return (
    <div className="w-full">
        <div className="flex flex-col md:flex-row md:justify-between md:mb-2">
            <p className="mb-1 md:mb-0">Anna Holt</p>
            <p className="mb-1 md:mb-0">21 Jan'22 03:13PM</p>
        </div>
        <p className="text-justify">Quisque eget risus a quam tincidunt vehicula et id tellus. Curabitur quam nibh, pulvinar vitae ornare tristique, lacinia nec nulla</p>
        <div className="container mx-auto flex justify-start">
            <hr className="h-1 mt-5 bg-primary border-0 w-60" />
        </div>
    </div>
  )
}

export default CommentComponent