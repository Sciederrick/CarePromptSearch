import { Client } from 'typesense';

class TypesenseFactory {
    private _typesenseHost:string;
    private _typesenseKey:string;
    private _typesensePort:string;

    constructor() {
        const { typesenseHost, typesenseKey, typesensePort } = useRuntimeConfig();
        this._typesenseHost = typesenseHost
        this._typesenseKey = typesenseKey
        this._typesensePort = typesensePort  
        console.log(this._typesenseHost, this._typesenseKey, this._typesensePort)
    }

    initTypesense(): Client {
        let client: Client;
        try {
            client = new Client({
                'nodes': [{
                    'host': this._typesenseHost||'5fw8k6jch9oqpv34p-1.a1.typesense.net', 
                    'port': parseInt(this._typesensePort)||443,      
                    'protocol': 'https'   
                }],
                'apiKey': this._typesenseKey||'L2uUKPQLlkBK5vbrnzR2NtH8fWd3y4yS',
                'connectionTimeoutSeconds': 2
            });
            console.log('client: ', client);
        } catch (e) {
            console.log('error at init (factory): ', e)
            throw e
        }

        return client;
    }
}

export default TypesenseFactory;