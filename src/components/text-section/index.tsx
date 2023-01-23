interface TextSectionProps {
    titleLine1: string;
    titleLine2: string;
    introduction: string;
    content: string
}

const TextSection = (props: TextSectionProps) => {

    return (
        <div className="container mx-auto grid grid-cols-1 mt-12 px-10 md:grid-cols-3 md:gap-10 md:px-52">
            <div className="col-span-1 text-center grid place-items-center mb-12 md:mb-0">
                <h3 className="text-5xl border-b-4 border-primary py-4 font-quick-sand">
                    <span className="font-bold">
                    {props.titleLine1} 
                    </span>
                    <br/>
                    {props.titleLine2}
                </h3>
            </div>
            <div className="col-span-2 text-justify">
                <p className="text-gray-introduction font-bold font-nunito">
                    {props.introduction}               
                </p>
                <p className="mt-3 font-nunito">
                    {props.content}
                </p>
            </div>
        </div>
    )
}

export default TextSection