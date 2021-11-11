const Part = (part) => {
    this.id = part.id;
    this.Part_Name = part.Part_Name;
    this.price = part.price;
};

const PartsM = (Parts = [Part]) => {
    for (inx = 0; inx < Parts.length; inx++)
    {
        this[inx].Part = Parts[inx].part;
    }
}

module.exports = PartsM;