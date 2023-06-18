export interface IMessage {
    id?: number,
    senderId?: number,
    recieverId: number,
    message: string,
    timestamp: string
}