export class CreateCatDTO {
    name: string;
    age: number;
    breed: string;
}

export class UpdateCatDTO {
    name?: string;
    age?: number;
    breed?: string;
}

export class ListAllEntities {
    limit: number;
}