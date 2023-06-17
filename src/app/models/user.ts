export interface IUser {
    id: number,
    username: string,
    email: string,
    password: string
  }
  
  export class User implements IUser {
    id!: number
    username!: string
    email!: string
    password!: string
  }