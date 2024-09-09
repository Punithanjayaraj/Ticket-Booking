import { Post } from "../admin/add-movie/movielist";

export interface Booking{
    bookingId: string;
    movieobject:Post
    userId:string;
    movieId:string;
    TheaterId:string;
    showtime:string;
    numberOfTickets:number;
    paymentMode:string;
    price:number;
    imageUrl: Post['imageUrl'];
}