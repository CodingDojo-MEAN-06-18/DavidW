export class User {
    constructor(
      public _id?: number,
      public firstName: string = "",
      public lastName: string = "",
      public email: string = "",
      public password: string = "",
      public confirmPassword: string = "",
      public createdAt: Date = new Date(),
      public updatedAt: Date = new Date()
    ){}
  }