export interface IProject {
  titulo:string,
  desc:string[],
  modal?:IModal[]
}

export interface IModal {
  button:string,
  body:string,
  link:string
}
