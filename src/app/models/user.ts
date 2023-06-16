export interface IUser {
    username: string,
    email: string,
    password: string
  }
  
  export class User implements IUser {
    username!: string
    email!: string
    password!: string
  }