const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root=null;
		this.parentNodes=[];
		this.heapSize = 0;
	}

	push(data, priority) {
		let node=new Node(data, priority);			
		this.insertNode(node);
		this.shiftNodeUp(node);
		this.heapSize+=1;
	}

	pop() {
		if(MaxHeap.length==0){return}else{
		
		this.detachRoot();
		this.restoreRootFromInsertedNode(this);
		this.shiftNodeDown(this.root);
		return this.root;
	}
		
	}

	detachRoot() {
		let detached=this.root;
		this.clear(this);
		return detached;
	}

	restoreRootFromLastInsertedNode(detached) {
		let last=detached.pop;
		this.root=last;
	}

	size() {
		return MaxHeap.length;
	}

	isEmpty() {		
			return !this.root;		
	}

	clear() {
		this.root=null;
		this.parentNodes=[];
	}

	insertNode(node) {
		if(MaxHeap.length==0){
			this.root=node;
			this.parentNodes.push(node);
		}else {
			let parentNode = this.parentNodes[0];
			if (parentNode.left == null){
				parentNode.appendChild(node);
				this.parentNodes.push(node);
			} else if (parentNode.right == null){
				parentNode.appendChild(node);
				this.parentNodes.shift();
				this.parentNodes.push(node);
			}
		}
	
	}

	shiftNodeUp(node) {
		if (node.parent != null && (node.parent.priority < node.priority)){
			//this.shiftNodeUp(node);	
	}
	//this.shiftNodeUp(node);	
	node.swapWithParent();
}

	shiftNodeDown(node) {
		swapWithParent(node);
		shiftNodeUp(node);
	}
}

module.exports = MaxHeap;
