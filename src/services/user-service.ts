import { User } from "@/model/user";

export class UserService {

    private static allUsers: User[] = [
        { id: 1, username: 'mateja', password: 'test', name: 'Mateja', lastName: 'Filipovic', phoneNumber: '+ 49 100 100', email: 'mateja@example.com', role: 'user'},
        { id: 2, username: 'ana', password: 'test', name: 'Ana', lastName: 'Galic', phoneNumber: '+ 49 100 101', email: 'ana@example.com', role: 'user'},
        { id: 3, username: 'filip', password: 'test', name: 'Filip', lastName: 'Miric', phoneNumber: '+ 49 100 102', email: 'filip@example.com', role: 'user'},
        { id: 4, username: 'mina', password: 'test', name: 'Mina', lastName: 'Ristic', phoneNumber: '+ 49 100 103', email: 'mina@example.com', role: 'admin'}
    ]
    
    static login(username: string, password: string): boolean {
        for(let user of UserService.allUsers){
            if(user.username == username && user.password == password){
                localStorage.setItem('currentUser', JSON.stringify(user));
                return true;
            }
        }
        return false;
    }

    static logout(){
        localStorage.removeItem('currentUser');
    }

    static getCurrentUser(): User | null {
        let jsonUser: string | null = localStorage.getItem('currentUser');
        if(jsonUser == null)
            return null;
        return JSON.parse(jsonUser)
    }

    static updateUser(id: number, username: string, name: string, lastName: string, phoneNumber: string, email: string): void {
        let userToUpdate: User | undefined = this.allUsers.find(x => x.id == id);
        if(userToUpdate == undefined || userToUpdate == null)
            return;

        userToUpdate.username = username;
        userToUpdate.name = name;
        userToUpdate.lastName = lastName;
        userToUpdate.phoneNumber = phoneNumber;
        userToUpdate.email = email;

        localStorage.setItem('currentUser', JSON.stringify(userToUpdate));
    }

    static updateUserPassword(id:number, newPassword: string): boolean {
        let user: User | undefined = this.allUsers.find(usr => usr.id == id);

        if (user == undefined || user == null)
            return false;

        user.password = newPassword;

        let currentUser: User | null = this.getCurrentUser();

        if(currentUser == null)
            return true;
        if(currentUser.id != id)
            return true;

        currentUser.password = newPassword;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        return true;
    }

    static isAuthenticated() : boolean{
        return this.getCurrentUser() != null;
    }
}