
interface ImageWithTextProps {
    imageUrl: string
    boldText: string;
    normalText: string;
}
//'@/assets/hero-image.jpeg'

const ImageWithText = (props: ImageWithTextProps) => {
  return (
    <div className={`bg-[url('${props.imageUrl}')] h-96 relative px-3`}>
        <p className="text-white absolute bottom-3">
            <span>{props.boldText}</span>
            <br/>
            {props.normalText}
        </p>
    </div>
  )
}

export default ImageWithText