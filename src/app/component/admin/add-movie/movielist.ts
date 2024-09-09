export interface Post {
    id:string;
    Title: string;
    Description: string;
    Duration: string;
    TotalTicketsAvailable:number;
    Genre:string;
    imageUrl:string;

}

export interface userlogin{
    email:string;
    password:string
}

export interface   JwtPayload {
    Role?: string;
  }