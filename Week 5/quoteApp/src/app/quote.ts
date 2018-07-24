export class Quote {
  constructor(
    public id: number = null,
    public content: string = "",
    public author: string = "",
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date()
  ){}
}