export class Product {
    private pId: string;
    private pName: string;
    private pDes: string;
    private pPrice: string;
    private pSize: string;
    private pPhoto: string;

    constructor(pId: string, pName: string, pDes: string, pPrice: string, pPhoto: string, pSize: string) {
        this.pId = pId;
        this.pName = pName;
        this.pDes = pDes;
        this.pPrice = pPrice;
        this.pPhoto = pPhoto;
        this.pSize = pSize;
    }

    getId() {
        return this.pId;
    }

    getName() {
        return this.pName;
    }

    getDes() {
        return this.pDes;
    }

    getPrice() {
        return this.pPrice;
    }

    getPhoto() {
        return this.pPhoto;
    }

    getSize() {
        return this.pSize;
    }

    setName(name: string) {
        this.pName = name;
    }

    setDes(des: string) {
        this.pDes = des;
    }

    setPrice(price: string) {
        this.pPrice = price
    }

    setPhoto(photo: string) {
        this.pPhoto = photo;
    }

    setSize(size: string) {
        this.pSize = size;
    }
}