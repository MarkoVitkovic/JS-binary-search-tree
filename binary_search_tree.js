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
            //brisanje node sa jednim djetetom
            if(node.left === null){
                node = node.right;
                return node;
            }
            else if(node.right === null){
                node = node.left;
                return node;
            }

            //brisanje nodea s dvoje djece, minimalni node od desnog podstabla je spremljen u aux
            var aux = this.nadiNajmanjiNode(node.right);
            node.data = aux.data;

            node.right = this.ukloniNode(node.right, aux.data)
            return node;
        }
    }

    //obavlja inorder prolazak kroz stablo
    inorder(node){
        if(node !== null){
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    //obavlja preorder obilazak stabla
    preorder(node){
        if(node !== null){
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    //obavlja postorder obilazak stabla
    postorder(node){
        if(node !== null){
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    //funkcija trazi najmanji node u stablu, trazi od dobivenog cvora
    nadiNajmanjiNode(node){
        //ako je lijevi node null, onda mora biti najmanji
        if(node.left === null){
            return node
        }
        else{
            return this.nadiNajmanjiNode(node.left);
        }
    }

    //funkcija vraca korjen stabla
    nadiKorjenStabla(){
        return this.root;
    }

    //pretrazuje node s dobivenim podatcima
    search(node, data){
        //ako je drvo prazno vrati null
        if(node === null){
            return null;
        }
        //ako je data manji od node.data pomakni lijevo
        else if(data < node.data){
            return this.search(node.left, data);
        }
        //ako je data veci od node.data pomakni desno
        else if(data > node.data){
            return this.search(node.right, data);
        }
        //ako je jednak, vrati node
        else{
            return node;
        }
    }

}
//kreira se objekt za binarno stablo
var bts = new BinarySearchTree();

//dodavanje elemenata
bts.dodaj(15);
bts.dodaj(25);
bts.dodaj(10);
bts.dodaj(7);
bts.dodaj(22);
bts.dodaj(17);
bts.dodaj(13);
bts.dodaj(5);
bts.dodaj(9);
bts.dodaj(27);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

console.log(bts);

var root = bts.nadiKorjenStabla();

// prints 5 7 9 10 13 15 17 22 25 27
bts.inorder(root);
             
// uklanjanje node bez djece
bts.ukloni(5);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17

var root = bts.nadiKorjenStabla();
             
// prints 7 9 10 13 15 17 22 25 27
bts.inorder(root);

// uklanjanje node s jednim djetetom
bts.ukloni(7);
             
//          15
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
//            /
//           17

var root = bts.nadiKorjenStabla();
 
// prints 9 10 13 15 17 22 25 27
bts.inorder(root);

// uklanjanje nodea s dvoje djece
bts.ukloni(15);
     
//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
 
var root = bts.nadiKorjenStabla();
console.log("inorder poredak");
 
// prints 9 10 13 17 22 25 27
bts.inorder(root);
             
console.log("postorder poredak");
bts.postorder(root);
console.log("preorder poredak");
bts.preorder(root);