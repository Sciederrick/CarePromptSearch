import { Client } from 'typesense';

class TypesenseFactory {
    private _typesenseHost:string;
    private _typesenseKey:string;
    private _typesensePort:string;
    private _typesenseProtocol:string;
    private _typesenseTimeoutSeconds:number;

    constructor() {
        const { typesenseHost, typesenseKey, typesensePort, typesenseProtocol, typesenseTimeoutSeconds } = useRuntimeConfig();
        this._typesenseHost = typesenseHost;
        this._typesenseKey = typesenseKey;
        this._typesensePort = typesensePort;  
        this._typesenseProtocol = typesenseProtocol;
        this._typesenseTimeoutSeconds = typesenseTimeoutSeconds;
        console.log(this._typesenseHost, this._typesenseKey, this._typesensePort)
    }

    initTypesense(): Client {
        let client: Client;
        try {
            client = new Client({
                'nodes': [{
                    'host': this._typesenseHost, 
                    'port': parseInt(this._typesensePort),      
                    'protocol': this._typesenseProtocol  
                }],
                'apiKey': this._typesenseKey,
                'connectionTimeoutSeconds': this._typesenseTimeoutSeconds
            });
        } catch (e) {
            console.log('error at init (factory): ', e)
            throw e
        }

        return client;
    }
}

export default TypesenseFactory;