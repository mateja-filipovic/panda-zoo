import { useNavigate } from "react-router-dom";

interface ImageWithTextProps {
    imageUrl: string
    textLine1: string;
    textLine2?: string;
    textLine1CustomStyle?: string;
    renderBookNowButton?: boolean;
    routeToAnimalDetails?: boolean;
    onClickEventDelegate?: () => void;
}
//'@/assets/hero-image.jpeg'

const ImageWithText = (props: ImageWithTextProps) => {

  let navigate = useNavigate();
  
  const selectAnimal = () => {
    if(props.routeToAnimalDetails == undefined || props.routeToAnimalDetails == null)
      return;
    navigate("/animals/some-animal")
  }

  const handleBookNowOnClick = () => {
    if(props.onClickEventDelegate == undefined || props.onClickEventDelegate == null)
      return;
    props.onClickEventDelegate();
  }

  const parseTextLine1CustomStyle = ():string => {
    if(props.textLine1CustomStyle == undefined || props.textLine1CustomStyle == null)
      return '';

    return props.textLine1CustomStyle;
  }

  return (

    <div className={`bg-[url('${props.imageUrl}')] h-96 relative px-3`} onClick={selectAnimal}>

      {
        props.renderBookNowButton &&
        <button type="button" className="focus:outline-none bg-yellow-custom hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 absolute top-2 right-2 font-nunito"
          onClick={() => handleBookNowOnClick()}>
          Book now
        </button>
      }

      <p className="text-white absolute bottom-3 font-quick-sand">
        <span className={`font-bold text-xl ${parseTextLine1CustomStyle()}`}>{props.textLine1}</span>
        <br/>
        {props.textLine2}
      </p>
    </div>
  )
}

export default ImageWithText