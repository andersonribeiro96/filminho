export class Filme {

    constructor(nome?: string, link?: string) {
        this.nome = nome;
        this.link = link;
    }

    nome:string | undefined;
    link:string | undefined;
}
