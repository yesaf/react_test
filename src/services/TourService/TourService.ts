import {
    ApolloClient, ApolloQueryResult,
    gql, InMemoryCache, NormalizedCacheObject,
} from '@apollo/client';
import { getTourDataQuery } from './queries';
import { ToursQuery } from '@/types/QueryTypes';

class TourService {
    client: ApolloClient<NormalizedCacheObject>;
    constructor() {
        this.client = new ApolloClient({
            uri: 'https://api.spacex.land/graphql/',
            cache: new InMemoryCache(),
        });
    }

    getToursData(limit: number): Promise<ApolloQueryResult<ToursQuery>> {
        return this.client.query<ToursQuery>({
            query: gql`
                query ${getTourDataQuery(limit)}
            `
        })
    }
}

export default TourService;
