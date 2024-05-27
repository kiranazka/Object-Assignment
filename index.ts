// type Colour
type Colour = "Red" | "Blue" | "Green";
// type product
type Product = {
    name: string,
    price: number,
    colour?: string,
    inventory:{
        stock: number,
        colorOptions?: Colour[],
        changeColour(newColour: Colour):
        void;
    };
};
const tShirt: Product =
{
    name: "T-Shirt",
    price: 20,
    colour: "Red",
    inventory: {
        stock: 20,
        colorOptions: ["Red", "Blue","Green"],
        changeColour(newColour: Colour) {
            this.colour = newColour;
            if(newColour === "Red"){
                this.price += this.price * 0.1;
            }
            else if(newColour === "Blue"){
                this.price += this.price * 0.05;
            }
        },
    },
    };  
tShirt.inventory.changeColour("Blue");
console.log(tShirt);
