class Node{
    constructor(value,next=null,prev=null){
        this.value=value;
        this.next=next;
        this.prev=prev;
    }
}

class DoublyLL{
    constructor(value){
        let newNode=new Node(value);
        this.head=this.tail=newNode;
        this.length=1;
        console.log(newNode);
    }

    append(value){
        let newNode=new Node(value);
        this.tail.next=newNode;
        newNode.prev=this.tail;
        this.tail=newNode;
        this.length++;
    }
    prepend(value){
      let newNode=new Node(value);
      newNode.next=this.head;
      this.head.prev=newNode;
      this.head=newNode;
      this.length++;
    }

    printFromStart(){
        let data=this.head;
        while(data){
            console.log(data.value);
            data=data.next;
        }
    }
    printFromLast(){
        let data=this.tail;
        while(data){
            console.log(data.value);
            data=data.prev;
        }
    }
    insertAtPosition(value, n) { 
        if(n === 1) {
            this.prepend(value);
            return;
        } 
        
        if(n > this.length) {
            this.append(value)
            return
        }
        
        let newNode = new Node(value); 
        let prevNode = this.find(n-1)
        let nextNode = prevNode.next
        if(!prevNode) return;
        
        prevNode.next = newNode
        newNode.prev = prevNode
        newNode.next = nextNode
        nextNode.prev = newNode
        this.length++;
    }
    
    find(n) {
        let data = this.head
        let position = 1
    
        while(data) {
            if (n === position) {
                return data
            }
    
            position++
            data = data.next
        }
    }
    deleteHead() {
        if (this.length === 1) {
            this.head = null
            this.tail = null
            this.prev = null
            this.length--
            return
        }
  
        let newHead = this.head.next
        newHead.prev = null
        this.head = newHead
        this.length--
    }

    deleteTail() {
        if (this.length === 1) {
            this.head = null
            this.tail = null
            this.prev = null
            this.length--
            return
        }
  
        let newTail = this.tail.prev
        newTail.next = null
        this.tail = newTail
        this.length--
    }

    delete(n) {
        if (this.length === 1) {
            this.head = null
            this.tail = null
            this.prev = null
            this.length--
            return
        }
  
        if(n === 1) {
            this.deleteHead();
            return;
        } 
  
        if(n > this.length) {
            this.deleteTail()
            return
        }
  
        let prevNode = this.find(n-1)
        let nextNode = prevNode.next.next
  
        prevNode.next = nextNode
        nextNode.prev = prevNode
  
        this.length--
    }

    reverse() {
        let currNode = this.head
        let prevNode = null
        let nextNode =null
  
        while(currNode) {
            prevNode = currNode.prev
            nextNode = currNode.next
  
            currNode.next = prevNode
            currNode.prev = nextNode
  
            currNode = nextNode
        }
  
        this.tail = this.head
        this.head = prevNode
    }
   
}


let list=new DoublyLL(10);
list.append(20);
list.append(30);
list.prepend(5);

list.printFromLast();
list.insertAtPosition(15,2)
//list.deleteHead();
//list.deleteTail();
// list.delete(3)
list.reverse()
list.printFromStart();

list