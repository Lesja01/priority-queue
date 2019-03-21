class Node {
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;
		this.parent=null;
		this.left=null;
		this.right=null;
	}

	appendChild(node) {
		if(this.right!==null&&this.left!==null){return}
		else if(this.left!==null){
		this.right=node;
		this.right.parent=this;
		}
		else
		{this.left=node;
		this.left.parent=this;};
	}

	removeChild(node) {
		if (this.left==node){
			this.left=null;
			node.parent=null;}
		else if (this.right==node){
			this.right=null;
			node.parent=null;}
		else if (this.left!==node&&this.right!==node){throw new Error('Node have not this child')}
		
	}

	remove() {		
		if (this.parent==null){return}
		else{		
		this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent==null){return}
		else{	
		let p=this.parent;		
		let pp=this.parent.parent;		
		let leftChild=this.left;
		let rightChild=this.right;
		let pLeftChild=this.parent.left;
		let pRightChild=this.parent.right;

		
		if(this.parent.parent.left==this.parent){
			this.parent=pp;
			this.parent.parent=p;
			this.parent.parent.left=pp;
		}else if(this.parent.parent.right==this.parent){
			this.parent=pp;
			this.parent.parent=p;
			this.parent.parent.right=pp;
		}
		
	}
	
	}
}

module.exports = Node;
