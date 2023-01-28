
interface PageHeroProps{
    imageUrl: string;
    title: string;
    subtitle?: string;
}

const PageHero = (props: PageHeroProps) => {
  return (
    <header style={{backgroundImage: `url(${props.imageUrl})`}} className={`w-full h-96 bg-cover bg-center flex items-center`}>
        <div className="flex flex-col px-10 md:px-44">
            <h1 className="text-white text-8xl font-quick-sand font-bold drop-shadow-lg">
              {props.title}
            </h1>
            { props.subtitle != undefined &&
              <p className="mt-5 text-3xl text-white font-quick-sand">
                {props.subtitle}
              </p>
            }
        </div>
    </header>
  )
}

export default PageHero