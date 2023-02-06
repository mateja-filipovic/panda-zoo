import { NotificationService } from "@/services/notification-service";
import { XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react";


interface NotificationsProps {
    closeModalEventDelegate: () => void;
}

const Notifications = (props: NotificationsProps) => {

  const [notifs, setNotifs] = useState(NotificationService.getAllNotifications());

  return (
    <div className="fixed top-0 left-0 z-50 h-full w-full bg-black bg-opacity-70 flex justify-center">

    <div className="container mx-auto px-10 py-12">
        <div className="w-full bg-white px-10 py-4 rounded-lg md:py-6">

          <div className="w-full flex justify-end mb-3" onClick={() => { console.log('there are notifsL ', notifs.length); props.closeModalEventDelegate()}}>
              <XMarkIcon className="w-8 h-8"/>
          </div>


          <div>
            {
              notifs.map(notif => { return(
                <>
                  <p className="font-nunito">{notif.content}</p>
                  <hr className="h-1 my-2 bg-primary border-0 w-60 mb-6" />
                </>
                )
              })
            }
          </div>

        </div>
    </div>

</div>
  )
}

export default Notifications