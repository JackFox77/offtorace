export class racer{
    constructor(name,img) {
        this.name = name
        this.img= img 
    }

    get Template() {
        return `
        <h4>${this.img} ${this.name} </h4>
        `
    }
}