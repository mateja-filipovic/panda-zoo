import ChangePasswordForm from "@/components/change-password-form";
import ProfileForm from "@/components/profile-form"
import { useState } from "react"

type Props = {}

const ProfilePage = (props: Props) => {

  const [showChangePasswordModal, setShowPasswordModal] = useState(false);

  const openModal = () => setShowPasswordModal(true);
  const closeModal = () => setShowPasswordModal(false);

  return (
    <>
      <div className="w-full bg-[url('@/assets/hero-image.jpeg')]">
        <div className="container mx-auto py-16 px-8 md:px-40">
          <ProfileForm changePasswordDelegate={openModal} />
        </div>
      </div>

      {showChangePasswordModal && <ChangePasswordForm closeModalEventDelegate={closeModal}/>}
    </>
  )
}

export default ProfilePage