export type BookCreateCommand = {
    _id?: string;
    title: string;
    author: string;
    publicationYear: number;
    genre: string;
};

export class Book {
    _id?: string;
    title: string;
    author: string;
    publicationYear: number;
    genre: string;

    constructor(props: BookCreateCommand) {
        this._id = props._id;
        this.title = props.title;
        this.author = props.author;
        this.publicationYear = props.publicationYear;
        this.genre = props.genre;
    }

    toJSON() {
        return {
            _id: this._id,
            title: this.title,
            author: this.author,
            publicationYear: this.publicationYear,
            genre: this.genre,
        };
    }
}