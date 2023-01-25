import { Pack } from "@/model/packs";
import { Promotion } from "@/model/promotion";
import { User } from "@/model/user";

export class PackageService {

    private static allPacks: Pack[] = [
        { id: 1, name: 'Family pack', shortDescription: 'meh pack', isPromotion: true, priceAdult: 10, priceChild: 5},
        { id: 2, name: 'Corporate pack', shortDescription: 'meh pack', isPromotion: true, priceAdult: 20, priceChild: 10},
        { id: 3, name: 'Couple pack', shortDescription: 'meh', isPromotion: true, priceAdult: 30, priceChild: 15},
        { id: 4, name: 'Individual', shortDescription: 'meh', isPromotion: false, priceAdult: 15, priceChild: 5},
        { id: 5, name: 'Group', shortDescription: 'meh', isPromotion: false, priceAdult: 20, priceChild: 10},
        { id: 6, name: 'Celebration', shortDescription: 'meh', isPromotion: false, priceAdult: 5, priceChild: 2},
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