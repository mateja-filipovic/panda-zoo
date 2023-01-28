import { CommentZoo } from "@/model/comment-zoo";
import { AnimalService } from "./animal-service";
import { UserService } from "./user-service";

export class CommentService {

    static comments: CommentZoo[] = [];

    private static __initializeCommentsService(){

        const commentContents = [
            "The animals at the zoo are so fascinating to watch! I love seeing them roam around their enclosures and interact with each other.",
            "Visiting the zoo is a great way to learn about the diversity of animal life. It's amazing to see so many species in one place!",
            "I love how the zookeepers take such good care of the animals and make sure they have everything they need.",
            "The zoo is a great place to get up close and personal with animals you wouldn't normally get to see in the wild.",
            "It's so inspiring to see the different habitats the animals are placed in and how they adapt to their new environment.",
            "The animals at the zoo are so beautiful and it's amazing to see how they move and interact with each other.",
            "I love getting to know the animals at the zoo and learning interesting facts about them.",
            "It's wonderful to see how the zookeepers work to ensure the animals are well fed, cared for, and healthy.",
            "Watching the animals play with each other is so fun and entertaining.",
            "It's incredible to see how the animals in the zoo are able to coexist in harmony."
        ]

        let userIdAndNamePairs = [];
        let allUsers = UserService.getAllUsers();
        for (let user of allUsers){
            userIdAndNamePairs.push({id: user.id, name: user.name})
        }

        let allAnimals = AnimalService.getAllAnimals();


        let commentsIndex = 0;
        let authorIndex = 0;
        let idIndex = 0;

        // generate comments for each animal
        for(let animal of allAnimals){

            // random number of comments
            let numberOfCommentsForAnimal = Math.floor(Math.random() * 4);
            for(let i = 0; i < numberOfCommentsForAnimal; i++){

                let comment: CommentZoo = {
                    id : idIndex++,
                    author: userIdAndNamePairs[authorIndex % userIdAndNamePairs.length].name,
                    time: (this.generateRandomDate()).toLocaleDateString(),
                    content: commentContents[commentsIndex % commentContents.length],
                    animalId: animal.id,
                    userId: userIdAndNamePairs[authorIndex % userIdAndNamePairs.length].id,
                }

                this.comments.push(comment);

                idIndex++;
                authorIndex++;
                commentsIndex++;
            }

        }
    }

    public static getCommentsForAnimalId(animalId: number): CommentZoo[] {
        if(this.comments.length == 0)
            this.__initializeCommentsService();

        console.log('here! ', this.comments.length);

        return this.comments.filter(comment => comment.animalId == animalId);
    }

    public static createComment(content:string, animalId:number){
        let newComment: CommentZoo = {
            id: this.comments[this.comments.length-1].id + 1,
            author: UserService.getCurrentUser()?.name || 'No name',
            time: new Date().toLocaleDateString(),
            content: content,
            animalId: animalId,
            userId: UserService.getCurrentUser()?.id || 1
        }
        
        this.comments.push(newComment);
    }

    private static generateRandomDate(): Date {
        let start = new Date('2022-12-15').getTime();
        let end = new Date('2023-01-30').getTime();
        let randomDate = new Date(start + Math.random() * (end - start));
        return randomDate;
    }

}