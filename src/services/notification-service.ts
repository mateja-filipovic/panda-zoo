import { ZooNotification } from "@/model/notification-zoo";


export class NotificationService {

    static notifications: ZooNotification[] = [
        {
            id: 1,
            content: "Your request has been approved!"
        },
        {
            id: 2,
            content: "Your request has been rejected."
        },
        {
            id: 3,
            content: "Your request has been sent!"
        }
    ]

    static getAllNotifications(): ZooNotification[] {
        return this.notifications;
    }
}