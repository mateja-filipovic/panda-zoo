import Event1Background from '@/assets/Event1Background.jpeg'
import Event2Background from '@/assets/Event2Background.jpeg'
import Event3Background from '@/assets/Event3Background.jpeg'
import { EventZoo } from '@/model/event-zoo'


export class EventService {

    private static events: EventZoo[] = [
        {
            id: 1,
            title: 'Meet the farm animals', 
            description: `Come to the zoo and meet the farm animals! From cows, horses, sheep and chickens, to pigs, ducks, goats and more! Enjoy up-close encounters with these animals and learn all about the life of a farm animal.`, 
            numberOfLikes: 30, 
            isLiked: false,
            imageUrl: Event1Background
        },
        {
            id: 2,
            title: 'Elephants arise!',
            description: `Visitors to the zoo are invited to witness an exciting 'Elephants Arise!' event. Watch as these majestic animals gracefully show off their remarkable strength and grace by performing a variety of tricks and behaviours. There will be plenty of opportunities for photos, so don't miss out!`, 
            numberOfLikes: 35, 
            isLiked: false, 
            imageUrl: Event2Background
        },
        {
            id: 3,
            title: 'Paint with the Zeebras!',
            description: 'Come join us at the zoo for a unique and fun experience! Paint with the Zeebras! Our knowledgeable zookeepers will guide you as you get up close and personal with the zebra while creating your own unique masterpiece. Enjoy a fun and creative day out with the family!',
            numberOfLikes: 60,
            isLiked: false,
            imageUrl: Event3Background
        }
    ]

    static getAllevents(): EventZoo[]{
        return this.events;
    }

    static likeEvent(id: number): void{
        for(let event of this.events){
            if(event.id == id){
                event.numberOfLikes++;
                event.isLiked = true;
            }
        }
    }

    static dislikeEvent(id: number): void{
        for(let event of this.events){
            if(event.id == id){
                event.numberOfLikes--;
                event.isLiked = false;
            }
        }
    }
}