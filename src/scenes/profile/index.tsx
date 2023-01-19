import ProfileForm from "@/components/profile-form"

type Props = {}

const ProfilePage = (props: Props) => {
  return (
    <div className="w-full h-screen bg-[url('@/assets/hero-image.jpeg')]">
      <div className="container mx-auto py-16 px-8 md:px-40">
        <ProfileForm />
      </div>
    </div>
  )
}

export default ProfilePage