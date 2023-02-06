import { useState } from "react"

import LionImage from "@/assets/PackCorporateBackground.jpeg"
import RedPandaImage from "@/assets/AnimalsBanner.jpeg"
import FishImage from "@/assets/clown_fish.jpeg"
import { AnimalService } from "@/services/animal-service"


type Props = {}

const AddAnimalForm = (props: Props) => {

  const [name, setName] = useState("");
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("");
  const [displayErrorText, setDisplayErrorText] = useState(false);

  const addAnimalClickHandler = () => {
    if(name == "" || headline == "" || description == "" || imageUrl == ""){
      setDisplayErrorText(true);
      return;
  }

    AnimalService.addNewAnimal(name, headline, description, imageUrl);
    console.log(AnimalService.getAllAnimals());
  }

  function colorActiveChoice(activeImageUrl: string) {
    if(activeImageUrl == imageUrl)
      return "border-4 border-primary"
    return "";
  }

  return (
    <div className="w-full px-4 py-6 md:px-12">
      <form onSubmit={(event) => event.preventDefault()}>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
          <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e) => setName(e.target.value)}/>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Headline</label>
          <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e) => setHeadline(e.target.value)}/>
        </div>

        <div className="mb-6 md:mb-12">
          <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
          <textarea rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" onChange={(e) => setDescription(e.target.value)}>
          </textarea>
        </div>

        <div className="grid grid-cols-2 mb-6 gap-2 md:grid-cols-3 md:gap-8 md:px-12">

          <div className="h-52 md:h-96">
            <img src={LionImage}  className={`w-full h-full object-cover active ${colorActiveChoice(LionImage)}`} onClick={() => setImageUrl(LionImage)}/>
          </div>

          <div className="h-52 md:h-96">
            <img src={RedPandaImage}  className={`w-full h-full object-cover ${colorActiveChoice(RedPandaImage)}`} onClick={() => setImageUrl(RedPandaImage)}/>
          </div>

          <div className="h-52 md:h-96">
            <img src={FishImage}  className={`w-full h-full object-cover ${colorActiveChoice(FishImage)}`} onClick={() => setImageUrl(FishImage)}/>
          </div>

        </div>

        <div className="w-full flex justify-end md:px-12">
          <button className="w-full bg-amber-300 rounded py-2 px-4 mb-4 md:w-fit" onClick={() => addAnimalClickHandler()}>Add</button>
        </div>

        {
        displayErrorText &&
          <div className="w-full flex justify-end md:px-12">
            <p className="text-sm font-nunito text-center text-red-500 opacity-70">
              All fields required
            </p>
          </div>
        }

      </form>
    </div>
  )
}

export default AddAnimalForm