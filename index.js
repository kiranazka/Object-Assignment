var tShirt = {
    name: "T-Shirt",
    price: 20,
    colour: "Red",
    inventory: {
        stock: 20,
        colorOptions: ["Red", "Blue", "Green"],
        changeColour: function (newColour) {
            this.colour = newColour;
            if (newColour === "Red") {
                this.price += this.price * 0.1;
            }
            else if (newColour === "Blue") {
                this.price += this.price * 0.05;
            }
        },
    },
};
tShirt.inventory.changeColour("Blue");
console.log(tShirt);
