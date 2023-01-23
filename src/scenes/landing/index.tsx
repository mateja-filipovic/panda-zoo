import Footer from '@/components/footer'
import HeroImage from '@/components/hero-image'
import ImageWithText from '@/components/image-with-text'
import TextSection from '@/components/text-section'

const LandingPage = () => {
  return (

    <div className="mb-20">

      <HeroImage></HeroImage>
      
      <TextSection 
        titleLine1={'LOREM'} 
        titleLine2={'IPSUM'} 
        introduction={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus elit, tempor in risus sed, pellentesque aliquet elit. Sed in sapien purus'} 
        content={'Quisque eget risus a quam tincidunt vehicula et id tellus. Curabitur quam nibh, pulvinar vitae ornare tristique, lacinia nec nulla. Phasellus imperdiet nisi et mi fermentum dignissim eu sed ante. Integer sed dolor purus. Maecenas molestie lacinia nibh, ornare volutpat nulla tempor a. Vivamus ac tristique lectus. Suspendisse facilisis massa nec erat imperdiet malesuada. Quisque in rutrum lorem. Vestibulum non justo quis nibh tincidunt scelerisque in at ligula. Vivamus condimentum nec lacus quis vehicula. Nulla turpis lorem, pretium sodales enim aliquet, blandit molestie ligula.'}
        />
      
      <div className="container mx-auto grid grid-cols-1 gap-6 px-12 mt-12 md:grid-cols-3 md:px-40 md:mt-16">
        <ImageWithText imageUrl={'@/assets/hero-image.jpeg'} textLine1={'Over 900'} textLine2={'Unique animals'} />
        <ImageWithText imageUrl={'@/assets/hero-image.jpeg'} textLine1={'Over 900'} textLine2={'Unique animals'} />
        <ImageWithText imageUrl={'@/assets/hero-image.jpeg'} textLine1={'Over 900'} textLine2={'Unique animals'} />
      </div>

    </div>
  )
}

export default LandingPage