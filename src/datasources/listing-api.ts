import { RESTDataSource } from "@apollo/datasource-rest";
import { Listing } from "../types";

export class ListingAPI extends RESTDataSource {
    override baseURL = "https://rt-airlock-services-listing.herokuapp.com/";
    // you'll get a compiler error if you misspell the variable 

    getFeaturedListings(): Promise<Listing[]> {
        return this.get<Listing[]>("featured-listings");
    }
    
}