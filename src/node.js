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
		else if(this.left!==null){this.right=node}else
		{this.left=node};
	}

	removeChild(node) {
		if (this.left==node){this.left=null}
		else if (this.right==node){this.right=null}
		else if (this.left!==node&&this.right!==node){throw new Error};
		this.parent=null;
	}

	remove() {		
		if (this.parent==null){return}
		else{		
		this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent==null){return}else{		
		this.parent.parent=this.parent;
		this.parent.parent.parent=this.parent.parent;
		this.parent.left=this.left;
		this.parent.right=this.right;	
		this.parent.parent.left=this.parent.left;
		this.parent.parent.right=this.parent.right;	
		}
	
	}
}

module.exports = Node;
