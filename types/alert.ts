export enum IAlertType {
    Info = "info",
    Success = "success",
    Warning = "warning",
    Error = "error"
}

export interface IAlert {
    type: IAlertType|undefined,
    msg: string
}