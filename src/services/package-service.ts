import PackFamilyBackground from '@/assets/PackFamilyBackground.jpeg'
import PackCorporateBackground from '@/assets/PackCorporateBackground.jpeg'
import PackCoupleBackground from '@/assets/PackCoupleBackground.jpeg'

import PackIndividualBackground from '@/assets/PackIndividualBackground.jpg'
import PackGroupBackgorund from '@/assets/PackGroupBackground.jpg'
import PackCelebrationBackground from '@/assets/PackCelebrationBackground.jpg'


import { Pack } from "@/model/packs";
import { Promotion } from "@/model/promotion";

export class PackageService {

    private static allPacks: Pack[] = [
        { id: 1, name: 'Family pack', shortDescription: 'Perfect for families', isPromotion: true, priceAdult: 10, priceChild: 5, imageUrl: PackFamilyBackground},
        { id: 2, name: 'Corporate pack', shortDescription: 'A wild office getaway', isPromotion: true, priceAdult: 20, priceChild: 10, imageUrl: PackCorporateBackground},
        { id: 3, name: 'Couple pack', shortDescription: 'A romantic walk', isPromotion: true, priceAdult: 30, priceChild: 15, imageUrl: PackCoupleBackground},
        { id: 4, name: 'Individual', shortDescription: 'For interested visitors', isPromotion: false, priceAdult: 15, priceChild: 5, imageUrl: PackIndividualBackground},
        { id: 5, name: 'Group', shortDescription: 'Perfect for a group of friends!', isPromotion: false, priceAdult: 20, priceChild: 10, imageUrl: PackGroupBackgorund},
        { id: 6, name: 'Celebration', shortDescription: 'Big event coming up? We got you', isPromotion: false, priceAdult: 5, priceChild: 2, imageUrl: PackCelebrationBackground}
    ]

    private static promoCodes: Promotion[] = [
        { promoCode: 'promo-1', discountPercentage: 20},
        { promoCode: 'promo-2', discountPercentage: 30},
        { promoCode: 'promo-3', discountPercentage: 40}
    ]

    private static selectedPack: Pack | null;

    static getPacks(promotionsOnly:boolean){
        if(promotionsOnly)
            return this.allPacks.filter(pack => pack.isPromotion) ;
        return this.allPacks;
    }

    static getSelectedPack(): Pack | null {
        return this.selectedPack;
    }

    static findByPackId(id: number): Pack {
        return this.allPacks.filter(pack => pack.id == id)[0];
    }

    static calculatePrice(selectedPackId: number, numberOfAdults: number, numberOfChildren: number): number {
        let selectedPack: Pack = this.findByPackId(selectedPackId);
        return selectedPack.priceAdult * numberOfAdults + selectedPack.priceChild * numberOfChildren;
    }

    static applyPromoCode(price:number, promoCode: string): number | null {
        let promotions:Promotion[] = this.promoCodes.filter(promo => promo.promoCode == promoCode);
        if (promotions.length == 0)
            return null;
        let discountPercentage = promotions[0].discountPercentage;
        return price * ( 1 - (discountPercentage/100));
    }
}