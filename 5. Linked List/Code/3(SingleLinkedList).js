class Node{
    constructor(value,next=null){
        this.value=value;
        this.next=next;
    }
}
class SingleLinkedList{
    constructor(data){
        let node=new Node(data);
        this.head=this.tail=node;
        this.length=1;
        console.log(node);
    }
}
let list1= new SingleLinkedList(10);
list1