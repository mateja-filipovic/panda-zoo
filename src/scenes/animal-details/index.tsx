import CommentComponent from '@/components/comment'
import CommentForm from '@/components/comment-form'
import PageHero from '@/components/page-hero'
import TextSection from '@/components/text-section'

type Props = {}

const AnimalDetailsPage = (props: Props) => {
  return (
    <div className="mb-20">
        <PageHero imageUrl={'@/assets/hero-image.jpeg'} title={"Title"} subtitle={"Subtitle"} />

        <TextSection 
          titleLine1={'LOREM'} 
          titleLine2={'IPSUM'} 
          introduction={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus elit, tempor in risus sed, pellentesque aliquet elit. Sed in sapien purus'} 
          content={'Quisque eget risus a quam tincidunt vehicula et id tellus. Curabitur quam nibh, pulvinar vitae ornare tristique, lacinia nec nulla. Phasellus imperdiet nisi et mi fermentum dignissim eu sed ante. Integer sed dolor purus. Maecenas molestie lacinia nibh, ornare volutpat nulla tempor a. Vivamus ac tristique lectus. Suspendisse facilisis massa nec erat imperdiet malesuada. Quisque in rutrum lorem. Vestibulum non justo quis nibh tincidunt scelerisque in at ligula. Vivamus condimentum nec lacus quis vehicula. Nulla turpis lorem, pretium sodales enim aliquet, blandit molestie ligula.'}
        />

        <div className="container mx-auto mt-8 mb-12 px-10 flex items-center text-center md:px-40">
          <div className="w-full grid place-items-center text-center bg-yellow-custom h-20 mt-12">
            <h2>2 Comments</h2>
          </div>
        </div>

        <div className="container mx-auto px-10 md:px-40">
          <div className="mb-6 md:mb-10">
            <CommentComponent />
          </div>
          <div className="mb-6 md:mb-10">
            <CommentComponent />
          </div>
          <div className="mb-6 md:mb-10">
            <CommentComponent />
          </div>
        </div>

        <div className="container mx-auto px-10 md:px-40">
          <CommentForm />
        </div>
    </div>
  )
}

export default AnimalDetailsPage