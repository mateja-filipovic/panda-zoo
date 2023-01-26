
interface PageHeroProps{
    imageUrl: string;
    title: string;
    subtitle: string;
}

const PageHero = (props: PageHeroProps) => {
  return (
    <header style={{backgroundImage: `url(${props.imageUrl})`}} className={`w-full h-96 bg-cover bg-center flex items-center`}>
        <div className="flex flex-col px-10 md:px-44">
            <h1 className="text-5xl text-white font-bold drop-shadow-lg">
              {props.title}
            </h1>
            <p className="mt-5 text-lg text-white opacity-70">
              {props.subtitle}
            </p>
        </div>
    </header>
  )
}

export default PageHero