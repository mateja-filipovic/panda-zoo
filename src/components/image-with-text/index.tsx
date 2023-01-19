
interface ImageWithTextProps {
    imageUrl: string
    boldText: string;
    normalText: string;
    renderBookNowButton: boolean;
}
//'@/assets/hero-image.jpeg'

const ImageWithText = (props: ImageWithTextProps) => {
  return (
    <div className={`bg-[url('${props.imageUrl}')] h-96 relative px-3`}>
      {
        props.renderBookNowButton &&
        <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 absolute top-2 right-2">
          Book now
        </button>
      }
        <p className="text-white absolute bottom-3">
            <span>{props.boldText}</span>
            <br/>
            {props.normalText}
        </p>
    </div>
  )
}

export default ImageWithText