const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root=null;
		this.parentNodes=[];
	}

	push(data, priority) {
		let node=new Node(data, priority);			
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		if(MaxHeap.length==0){return}else{
			let data=this.data;
		this.detachRoot();
		this.restoreRootFromInsertedNode(this);
		this.shiftNodeDown(this.root);
		return this.root.data;
	}
		
	}

	detachRoot() {
		let detached=this.root;
		this.clear(this);
		return detached;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return MaxHeap.length;
	}

	isEmpty() {
		if (!this.root){
			return true
		}
	}

	clear() {
		this.root=null;
		this.parentNodes=[];
	}

	insertNode(node) {
		if(MaxHeap.length==0){
			this.root=node;
		}else if(!this.root.left){this.root.left=node}
		else if(!this.root.right){this.root.right=node}
		else if(!this.root.left.left){this.root.left.left=node}
		else if(!this.root.right.right){this.root.right.right=node}
		
		return this.parentNodes=node;
	}

	shiftNodeUp(node) {
		this.root.appendChild(node);
		Node.swapWithParent;
		
		
	}

	shiftNodeDown(node) {
		this.swapWithParent;
		this.shiftNodeUp();
	}
}

module.exports = MaxHeap;
