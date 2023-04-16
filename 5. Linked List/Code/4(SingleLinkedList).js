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
    }

    append(value){
        let node=new Node(value);
        this.tail.next=node;
        this.tail=node;
        this.length++;
    }

    prepend(value){
        let node=new  Node(value);
        node.next=this.head;
        this.head=node;
        this.length++;
    }
    appendAtPosition(value,n){
        if(n===1){
            this.prepend(value);
            return;
        }
        if(n===this.length+1){
            this.append(value);
            return;
        }
        let node=new Node(value);
        let prevNode=this.findNode(n-1);
        const temp=prevNode.next;
        prevNode.next=node;
        node.next=temp;
        this.length++;
    }
    findNode(n){
        let data=this.head;
        let count=0;
        while(true){
            count++;
           
            if(count===n){
                break;
            }
            data=data.next;
        }
       
        return data;
    }

    print(){
        let data=this.head;
        while(data){
            console.log(data.value);
            data=data.next;
        }
    }

    update(value,n){
        let node=this.findNode(n)
        node.value=value;

    }
    delete(n){
        let prevNode=this.findNode(n-1);
        prevNode.next=prevNode.next.next;
        this.length--;
    }
}
let list1= new SingleLinkedList(10);
list1.append(20);
list1.prepend(30);
list1.appendAtPosition(100,1)
list1.appendAtPosition(40,2)
list1.update(111,5)
list1.update(111,5)
list1.delete(4);
list1.print();

list1