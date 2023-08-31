export interface IProject {
  titulo:string,
  desc?:string[],
  modal?:IModal[],
  link?:string
}

export interface IModal {
  button:string,
  body:string,
  link:string
}
