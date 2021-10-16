export class Filme {

    constructor(nome?: string, link?: string, urlImage?: string, description?: string) {
        this.nome = nome;
        this.link = link;
        this.urlImage = urlImage;
        this.description = description;
    }

    nome: string | undefined;
    link: string | undefined;
    urlImage: string | undefined;
    description: string | undefined
}
