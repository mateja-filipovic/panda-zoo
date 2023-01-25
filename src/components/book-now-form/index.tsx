import { Pack } from "@/model/packs";
import { PackageService } from "@/services/package-service";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

interface BookNowFormProps {
    selectedPack: Pack | null;
    closeModalEventDelegate: () => void;
}
const BookNowForm = (props: BookNowFormProps) => {

    const [selectedPackId, setSelectedPackId] = useState(props.selectedPack?.id);
    const [numberOfAdults, setNumberOfAdults] = useState(1);
    const [numerOfChildren, setNumberOfChildren] = useState(0);
    const [promoCode, setPromoCode] = useState('');

    const [originalPrice, setOriginalPrice] = useState(props.selectedPack?.priceAdult);
    const [discountedPrice, setDiscountedPrice] = useState(0);
    const [incorrectCodeFlag, setIncorrectCodeFlag] = useState(false);

    useEffect(() => {
        handleTotalPriceCalculation()
    }, [selectedPackId])

    useEffect(() => {
        handleTotalPriceCalculation()
    }, [numberOfAdults])

    useEffect(() => {
        handleTotalPriceCalculation()
    }, [numerOfChildren])

    const handleTotalPriceCalculation = () => {
        setOriginalPrice(PackageService.calculatePrice(selectedPackId ?? 0, numberOfAdults, numerOfChildren));
    }

    const handleApplyCode = () => {
        if(originalPrice == null || promoCode == null || promoCode == '')
            return;

        let result: number | null = PackageService.applyPromoCode(originalPrice, promoCode);
        
        if(result == null){
            setIncorrectCodeFlag(true);
            return;
        }
        setIncorrectCodeFlag(false);
        setDiscountedPrice(result);
    }

    
    return(
        <div className="fixed top-0 left-0 z-50 h-full w-full bg-black bg-opacity-70 flex justify-center">

            <div className="container mx-auto px-10 py-12">
                <div className="w-full bg-white px-10 py-4 rounded-lg md:py-6">

                <div className="w-full flex justify-end mb-3" onClick={props.closeModalEventDelegate}>
                    <XMarkIcon className="w-8 h-8"/>
                </div>
                <form onSubmit={(event) => event.preventDefault()}>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selected Pack</label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-6"
                        onChange={(e) => setSelectedPackId(parseInt(e.target.value))}>
                            {PackageService.getPacks(false).map(pack => {
                                if(props.selectedPack !== null && pack.id == props.selectedPack.id)
                                    return <option value={pack.id} selected>{pack.name}</option>;
                                else
                                    return <option value={pack.id}>{pack.name}</option>;
                            })}
                        </select>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adults</label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-6"
                        onChange={(e) => setNumberOfAdults(parseInt(e.target.value))}>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => <option value={item}>{item}</option>)}
                        </select>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Children</label>
                        <select  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-6"
                        onChange={(e) => setNumberOfChildren(parseInt(e.target.value))}>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => <option value={item}>{item}</option>)}
                        </select>

                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900">Have a promo code? Enter down below!</label>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChange={(event) => setPromoCode(event.target.value)} />
                        </div>

                        <div className="w-full flex justify-end md:justify-start">
                            <button className="w-full bg-amber-300 rounded py-2 px-4 mb-4 md:w-fit" onClick={() => handleApplyCode()}>Apply code</button>
                        </div>

                        <div className="w-full flex justify-end mb-3">
                            <p>Total: ${discountedPrice != 0 && discountedPrice}{discountedPrice == 0 && originalPrice}</p>
                        </div>

                        { discountedPrice != 0 &&
                        <div className="w-full flex justify-end mb-6">
                            <p className="text-sm text-slate-500 line-through">${originalPrice}</p>
                        </div>
                        }

                        <div className="w-full flex justify-end">
                            <button className="w-full bg-amber-300 rounded py-2 px-4 mb-4 md:w-fit">Submit Request</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default BookNowForm