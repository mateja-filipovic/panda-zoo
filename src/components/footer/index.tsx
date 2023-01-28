type Props = {}

const Footer = (props: Props) => {

  return (
    <footer className="bg-footer w-full">
        <div className="container mx-auto px-24 bg-footer flex justify-between items-center h-52">
            <div className="text-white border-primary border-b-4 py-4">
                <p className="text-center font-quick-sand font-bold text-4xl">CONTACT<br/>US</p>
            </div>
            <div className="text-white text-right">
                <p><span className="font-bold">Location:</span> 742 Artisanal Avenue, Brooklyn, NY 11222</p>
                <p><span className="font-bold">Phone:</span> +1 (646) 555-4087</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer