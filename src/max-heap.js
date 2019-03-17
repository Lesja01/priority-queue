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
		this.restoreRootFromInsertedNode(detached);
		this.shiftNodeDown(this.root);
		return this.root.data;
		
	}

	detachRoot() {
		this.root=null;
		this.parentNodes.root.remove();
		return root;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return MaxHeap.length;
	}

	isEmpty() {
		if (MaxHeap.length==0){
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
		}		
		this.parentNodes=[...this.parentNodes,node];
		node.data=null;
		node.priority=null;
	}

	shiftNodeUp(node) {
		if(this.node>=0){

		}
		this.swapWhithParent();
		this.shiftNodeUp();
		
	}

	shiftNodeDown(node) {
		Node.swapWhithParent();
		this.shiftNodeUp();
	}
}

module.exports = MaxHeap;
