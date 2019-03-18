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
		if(MaxHeap.length==0){return};
		this.detachRoot();
		this.restoreRootFromInsertedNode(this);
		this.shiftNodeDown(this.root);
		return this.root.data;
		
	}

	detachRoot() {
		this.root=null;
		this.parentNodes.root.clear();
		return root;
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
		}else if(this.root.left.length!==null){this.root.left=node}
		else{this.root.right=node};
		this.parentNodes=node;
	}

	shiftNodeUp(node) {
		
		Node.swapWithParent;
		
		
	}

	shiftNodeDown(node) {
		this.swapWithParent;
		this.shiftNodeUp();
	}
}

module.exports = MaxHeap;
