import {diskStorage, StorageEngine} from "multer";
import autobind from "autobind-decorator";

@autobind
class StorageFileHandler {
    public generateId(): string {
        const array = new Array(18);

        return array
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
    }

    public createFileName(req, file, callback): void {
        const extension = file.originalname.split('.').pop();

        callback(null, `${this.generateId()}.${extension}`);
    }
}

const storageFileHandler = new StorageFileHandler();

export const fileStorage : StorageEngine = diskStorage({
    destination: './uploads',
    filename: storageFileHandler.createFileName,
})