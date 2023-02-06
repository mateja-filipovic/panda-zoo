type Props = {}

const Footer = (props: Props) => {

  return (
    <footer className="bg-footer w-full py-4">
        <div className="container mx-auto px-24 bg-footer flex flex-col md:flex-row justify-between items-center h-64 md:h-52">
            <div className="text-white border-primary border-b-4 py-4">
                <p className="text-center font-quick-sand font-bold text-4xl">CONTACT<br/>US</p>
            </div>
            <div className="text-white text-center md:text-right">
                <p><span className="font-bold">Location:</span> 742 Artisanal Avenue, Brooklyn, NY 11222</p>
                <p><span className="font-bold">Phone:</span> +1 (646) 555-4087</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer