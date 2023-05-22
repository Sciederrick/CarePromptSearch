import { Client } from 'typesense';

export default defineEventHandler(async (event) => {
    const { q } = getQuery(event);
    const { typesenseHost, typesensePort, typesenseKey, typesenseProtocol, typesenseTimeoutSeconds } = useRuntimeConfig();
    try {
        const client = new Client({
            'nodes': [{
                'host': typesenseHost, 
                'port': parseInt(typesensePort),      
                'protocol': typesenseProtocol  
            }],
            'apiKey': typesenseKey,
            'connectionTimeoutSeconds': parseInt(typesenseTimeoutSeconds)
        });

        if (!q?.toString().trim()) return;
        const res = await client?.collections('treatments')
            .documents()
            .search({
                'q': q.toString(),
                'query_by': 'title,description,tags',
                'sort_by': 'rating:desc'
            });

        return {
            success: true,
            response: res
        }
    } catch (e) {
        console.log('error at init (factory): ', e)
        return {
            success: false,
            response: e
        }
    }
});