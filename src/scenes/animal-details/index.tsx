import CommentComponent from '@/components/comment'
import CommentForm from '@/components/comment-form'
import PageHero from '@/components/page-hero'
import TextSection from '@/components/text-section'
import { AnimalService } from '@/services/animal-service'
import { CommentService } from '@/services/comment-service'
import { useState } from 'react'
import { useParams } from 'react-router-dom'


const AnimalDetailsPage = () => {

  const routeParameters = useParams();
  const [animal] = useState(AnimalService.getAnimalById(Number(routeParameters.id)));
  const [comments, setComments] = useState(CommentService.getCommentsForAnimalId(animal.id));

  const handleCommentAdded = () => {
    setComments(CommentService.getCommentsForAnimalId(animal.id));
  }

  return (
    <div className="mb-20">
        <PageHero imageUrl={animal.imageUrl} title={animal.name} />

        <TextSection 
          titleLine1={animal.titleLine1} 
          titleLine2={animal.titleLine2}
          introduction={animal.introduction}
          content={animal.description}
        />

        <div className="container mx-auto mt-8 mb-12 px-10 flex items-center text-center md:px-40">
          <div className="w-full grid place-items-center text-center bg-yellow-custom h-20 mt-12 rounded-lg">
            <h2>
              {comments.length == 0 && 'No comments yet, be the first person to leave one!'}
              {comments.length == 1 && `${comments.length} comment`}
              {(comments.length != 0) && (comments.length !=1) && `${comments.length} comments`}
              </h2>
          </div>
        </div>

        <div className="container mx-auto px-10 md:px-40 md:mb-16">
          {comments.map(comment =>
            <div className="mb-6 md:mb-10">
              <CommentComponent author={comment.author} date={comment.time} content={comment.content} />
            </div>
          )}
        </div>

        <div className="container mx-auto px-10 md:px-40">
          <CommentForm animalId={animal.id} commentAddedHandlerDelegate={handleCommentAdded} />
        </div>
    </div>
  )
}

export default AnimalDetailsPage