import GirrafeImage from '@/assets/PackFamilyBackground.jpeg';
import LemurImage from '@/assets/lemur.jpeg'
import CoalaImage from '@/assets/coala.jpeg'
import RabbitsImage from '@/assets/Rabbits.jpeg'
import TigerImage from '@/assets/tiger.jpeg'
import MonkeysImage from '@/assets/monkeys.jpg'
import KangaroosImage from '@/assets/kangaroos.jpg'
import BearImage from '@/assets/bear.jpg'
import FlamingoImage from '@/assets/flamingos.jpg'
import TurtleImage from '@/assets/turtle.jpg'





import { Animal } from "@/model/animal";


export class AnimalService {

    private static animals: Animal[] = [
        {
            id: 1,
            name: 'Girrafe',
            titleLine1: 'The tallest',
            titleLine2: 'of them all!',
            introduction: 'This majestic giraffe stands tall and proud, its long neck rising from a muscular body and slender legs',
            description: 'Its coat is a beautiful patchwork of yellow, brown, and white spots that provide perfect camouflage in the African savanna. Its majestic horns are a reminder of its proud, regal air. Its large brown eyes are filled with intelligence and curiosity. Its long, black tongue is perfect for plucking leaves and fruit from the highest branches. Its powerful hooves dig into the ground when it runs and its long tail helps keep it balanced. Its graceful movements and gentle nature make it a favorite animal among zoo visitors. Come meet our friendly giraffe and be amazed by its beauty and grace.',
            imageUrl: GirrafeImage
        },
        {
            id: 2,
            name: 'Lemur',
            titleLine1: 'Lemurs',
            titleLine2: 'adorable primates!',
            introduction: 'This lemur is an adorable and active primate native to the island of Madagascar.',
            description: 'It has a unique and distinctive appearance, with its long tail, large eyes, and striking black and white fur. It is a social animal, living in groups of up to 30 other members, and is active during the day. Its diet consists of fruit, leaves, and insects, and the lemur is known for its vocalizations, which include barks, barks and screams. Its ability to jump up to 10 feet in a single bound makes it an impressive animal to witness. The lemur can be seen at the zoo sunning itself, playing in the trees, and interacting with its group. It is a wonderful animal to observe and will certainly capture your attention.',
            imageUrl: LemurImage
        },
        {
            id: 3,
            name: 'Coala',
            titleLine1: 'Coala,',
            titleLine2: 'cute and cuddly!',
            introduction: 'This beautiful Coala is an amazing creature, native to Australia',
            description: 'It has a distinctive black and white fur pattern, and its fluffy tail is often longer than its body. Coalas are incredibly social animals, living in groups of up to 20 individuals and communicating through a variety of vocalizations. They are also incredibly agile and strong climbers, able to move up and down trees with ease. Coalas are most active during the day and spend much of their time in eucalyptus trees, where they feed on the leaves and bark. They have a unique way of eating that involves gripping the tree with their strong claws and tearing off strips of bark. At the zoo, visitors can observe Coalas in their natural environment, watching as they climb and interact with other Coalas.',
            imageUrl: CoalaImage
        },
        {
            id: 4,
            name: 'Tiger',
            titleLine1: 'The Majestic',
            titleLine2: 'Beasts of power',
            introduction: 'The tiger is one of the most majestic creatures on Earth. With its striking orange and black stripes, it is an awe-inspiring sight to behold.',
            description: 'Tigers are the largest of the big cats, reaching up to 11 feet long and weighing up to 660 pounds. They are powerful predators, hunting and killing their prey with stealth and speed. Tigers prefer to live and hunt alone, and their solitary lifestyles mean they can be difficult to spot in the wild. However, visitors to the zoo can admire these remarkable animals in their natural habitat. With strong, muscular bodies, long tails and powerful jaws, tigers are a sight to behold. Their thick fur protects them from the elements and helps keep them warm in their cold-weather habitats. The beautiful markings on their coats also serve to help them blend in with their surroundings, aiding them in their effort to remain undetected. Come and see these incredible creatures in person at the zoo and marvel at their beauty and power.',
            imageUrl: TigerImage
        },
        {
            id: 5,
            name: 'Rabbits',
            titleLine1: 'Adorable',
            titleLine2: 'fluffy friends!',
            introduction: 'This delightful rabbit is sure to bring a smile to your face! Its soft, white fur is as plush as a cloud, and its large, black eyes sparkle with joy',
            description: 'Its long ears twitch as it hops around, and its small, pink nose twitches as it scampers about its enclosure. Its powerful hind legs are perfect for leaping and bounding, and its small front paws are excellent for foraging for food. Its diet consists of fresh hay, vegetables, and fruits, and it loves to play with its favorite toys. This rabbit is a joy to watch, and it loves to be petted and snuggled. Visit this friendly creature at the zoo today!',
            imageUrl: RabbitsImage
        },
        {
            id: 6,
            name: 'Monkeys',
            titleLine1: 'Swing',
            titleLine2: 'into action!',
            introduction: 'Monkeys are some of the most beloved animals in the world, and for good reason!',
            description: 'These highly intelligent, social creatures come in many shapes and sizes. From the tiny Pygmy Marmoset to the towering Mandrill, each species of monkey has its own unique set of characteristics that make it special. Monkeys are incredibly agile, often using their long tails and powerful hands to swing from branch to branch. They can also be incredibly playful, showing off their mischievous side when given the chance. At the zoo, you can observe monkeys of all kinds in their natural habitats. Watch as they laugh, chatter, play, and even groom each other. Whether you\'re looking for a family-friendly activity or just a chance to marvel at these amazing creatures, visiting the monkey exhibit is sure to be an unforgettable experience.',
            imageUrl: MonkeysImage
        },
        {
            id: 7,
            name: 'Kangaroos',
            titleLine1: 'Jumping',
            titleLine2: 'high',
            introduction: 'Kangaroos are one of the most iconic and beloved creatures in the animal kingdom.',
            description: 'They are marsupials that are native to Australia and its surrounding islands, and are the largest living marsupials. These unique creatures have long hind legs and powerful tail that help them hop along with impressive speed and agility. The iconic pouch on the female kangaroo is used to carry her young. Kangaroos come in a variety of sizes and colors, ranging from the large red kangaroo to the small wallaby. They are herbivores, and feed on grasses, leaves, and other vegetation. These gentle animals are highly adaptable and can be found in a range of habitats, from woodlands to deserts. At the zoo, visitors can observe the kangaroos in their natural habitat and watch their captivating behavior.',
            imageUrl: KangaroosImage
        },
        {
            id: 8,
            name: 'Bears',
            titleLine1: 'Fluffy',
            titleLine2: 'but fierce!',
            introduction: 'Bears are some of the most beloved and awe-inspiring creatures on the planet.',
            description: 'Found on every continent but Antarctica, these large, powerful mammals have captivated the imaginations of people of all ages for centuries. From their intense curiosity and intelligence, to their impressive strength and agility, bears are truly majestic creatures. At the zoo, you can marvel at the size and power of these incredible animals. Bears come in a variety of shapes and sizes, from the small and cuddly American black bear, to the awe-inspiring polar bear, the largest of all bear species. You can watch them as they lumber through their habitats, dig in the dirt for food, and even take a refreshing dip in the water.',
            imageUrl: BearImage
        },
        {
            id: 9,
            name: 'Flamingos',
            titleLine1: 'Pink',
            titleLine2: 'and proud',
            introduction: 'The beautiful, graceful flamingo is a sight to behold.',
            description: 'With its long, slender neck and legs, and vibrant pink and white feathers, the flamingo is one of the most recognizable birds in the world. It is a wading bird, usually found in shallow, salty lakes and wetlands. The flamingo stands an average of 3-5 feet tall and can weigh up to 8 pounds. The unique pink color of its feathers is due to its diet of shrimp, algae, and other aquatic invertebrates. The flamingo\'s wingspan can reach up to 4 feet, allowing it to fly up to 40 miles per hour. Flamingos are also very social creatures, living in large colonies where they can be seen performing elaborate courtship rituals. At the zoo, you can view these amazing birds in their natural habitat, as they strut around and interact with each other. Come and experience the beauty of the flamingo for yourself!',
            imageUrl: FlamingoImage
        },
        {
            id: 10,
            name: 'Turtles',
            titleLine1: 'Shelled',
            titleLine2: 'wonders',
            introduction: 'Turtles are one of the oldest living creatures on earth and can make great pets!',
            description: 'They come in a variety of different species, shapes, and sizes. You can visit our zoo to see some of these fascinating reptiles. Turtles can range from the small, freshwater varieties that are often kept as pets to large, sea-dwelling varieties that can reach several feet in length. They have a hard shell that helps to protect them from predators, and they are able to swim, crawl and climb with ease. Turtles are omnivores, meaning they eat both plants and animals, and they can live for up to 100 years! Come to our zoo to see these fascinating creatures and watch them in their natural environment.',
            imageUrl: TurtleImage
        }
    ]

    static getAllAnimals(): Animal[]{
        return this.animals;
    }

    static getAnimalById(id: number): Animal {
        console.log('searching by id', id);
        let animal =  this.animals.filter(animal => animal.id == id);
        return animal[0];
    }
}