type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-footer w-full">
        <div className="container mx-auto px-24 bg-footer flex justify-between items-center h-52 mt-20">
            <div className="text-white">
                <p className="text-center">CONTACT<br/>US</p>
            </div>
            <div className="text-white text-right">
                <p><span>Location:</span> av. Slice Line, NYC CA</p>
                <p><span>Phone:</span> +11 111 111</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer