class InsertionSort
{
    constructor()
    {
        this.arrange = [5, 2, 4, 6, 1, 3, 9, 7, 8, 0, 10, 18, 13];
    }

    sortAscending()
    {
        for(let i = 0; i < Object.keys(this.arrange).length - 1; i++)
        {            
            let j = i + 1;
            let auxIndex = i;
            let key = this.arrange[j];
            while(j > 0)
            {
                if(key < this.arrange[auxIndex])
                {
                    let aux = this.arrange[auxIndex];
                    this.arrange[auxIndex] = key;
                    this.arrange[j] = aux;                    
                }
                auxIndex--;
                j--;
            }
            this.displayArray();
        }
    }

    sortDescending()
    {
        for(let i = 0; i < Object.keys(this.arrange).length - 1; i++)
        {            
            let j = i + 1;
            let auxIndex = i;
            let key = this.arrange[j];
            while(j > 0)
            {
                if(key > this.arrange[auxIndex])
                {
                    let aux = this.arrange[auxIndex];
                    this.arrange[auxIndex] = key;
                    this.arrange[j] = aux;                    
                }
                auxIndex--;
                j--;
            }
            this.displayArray();
        }
    }

    displayArray()
    {
        let output = "";

        for(let i = 0; i < Object.keys(this.arrange).length; i++)
        {
            output+= this.arrange[i] + "   ";            
        }
        console.log(output);
    }    
}

let insertion = new InsertionSort();
insertion.displayArray();
console.log("Ascending order");
insertion.sortAscending();
console.log("\nReverse order");
insertion.displayArray();
insertion.sortDescending();