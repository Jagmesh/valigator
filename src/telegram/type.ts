export interface PendingMessage {
    original: {
        chatId:  number | string;
        messageId:  number;
        caption: string;
        contentFileId: string;
        username: string;
    }
    review: {
        messageId:  number;
        buttonsMsgId:  number;
    }
}