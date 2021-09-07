//Node class
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

//Binary search tree class
class BinarySearchTree{
    constructor(){
        //korjen od binarnog stabla
        this.root = null;
    }

    //funkcije koje ce se implementirati
    //insert(data) - dodaje novi node u stablo sa data vrijednosti
    //remove(data) - uklanja node iz stabla


    //pomocne funkcije
    //findMinNode() 
    //getRootNode()
    //inorder(node)
    //preorder(node)              
    //postorder(node)
    //search(node, data)


    //metoda koja kreira node i provjerava postoji li root te poziva metodu dodajNode
    dodaj(data){
        //kreiramo node i inicijaliziramo ga s data
        var noviNode = new Node(data);

        //ako ne postoji root, kreirani node ce biti root
        if(this.root === null){
            this.root = noviNode;
        }
        else{
            //inace ce naci tocnu poticiju u stablu i dodati node
            this.dodajNode(this.root, noviNode);
        }
    }

    //metoda koja dodaje node u stablo, trazi mu odgovarajucu poziciju na osnovu dobivenih data
    dodajNode(node, noviNode){
        //ako je data manji od node pomakni datu na lijevu stranu stabla
        if(noviNode.data < node.data){
            //ako ljevo ne postoji node, dodaj node ovdje
            if(node.left === null){
                node.left = noviNode;
            }
            else{
                //ako left nije null rekurzivno dok se ne pojavi null
                this.dodajNode(node.left, noviNode)
            }
        }
        //ako je data veci od node pomakni data na desnu stranu stabla
        else{
            //ako je data null dodaj datu ovdje
            if(node.right === null){
                node.right = noviNode;
            }
            else{
                //ako data nije null, rekurzivno dok se ne pojavi null
                this.dodajNode(node.right, noviNode)
            }
        }
    }

    //metoda koja poziva ukloniNode sa dobivenim podatcima
    ukloni(data){
        //root je reinicijaliziran s rootom od modificiranog stabla
        this.root = this.ukloniNode(this.root, data)
    }

    //metoda uklanja data, rekurzivno ide kroz stablo dok ne nade datu i ukloni ga
    ukloniNode(node, key){
        //ako je root null stablo je prazno 
        if(node === null){
            return null;
        }
        //ako je data koji se brise manji od roota, prebaci ga u lijevo podstablo
        else if(key < node.data){
            node.left = this.ukloniNode(node.left, key);
            return node;
        }
        //ako je data koji se brise veci od roota, prebaci ga u desno podstablo
        else if(key > node.data){
            node.right = this.ukloniNode(node.right, key);
            return node;
        }
        //ako je data jednaka rootu onda obrisi ovaj node
        else{
            //brisanje node bez djece
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }
        }
    }
}
