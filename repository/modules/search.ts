import { SearchResponse } from 'typesense/lib/Typesense/Documents';
import TypesenseFactory from '~/repository/factory';
import { IResponse, ISearchInput } from '~/types/search';

class SearchModule extends TypesenseFactory {

    async searchTreatments(searchParams: ISearchInput) { 
        let res: SearchResponse<any>;    
        const client = this.initTypesense();
        if (client != null) {}
        try {
            res = await client?.collections('treatments')
                .documents()
                .search(searchParams);
            console.log(res);
        } catch(e) {
            console.log('error at search treatments: ', e);
            throw e;
        }

        return res;

    }
}

export default SearchModule;