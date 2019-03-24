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
			node.parent=null;
		return}
		else if (this.right==node){
			this.right=null;
			node.parent=null;
		return}
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
		
		let parent=this.parent;		
		let pp=this.parent.parent;		
		let leftChild=this.left;
		let rightChild=this.right;
		let anotherChild;
	if(pp){
		if (pp.left==this.parent){
			pp.left=this;			
			
		}else if (pp.right==this.parent){
			pp.right=this;			
		}
	}
		if (this==parent.left){
			anotherChild=this.parent.right;
			this.right=anotherChild;
			this.left=parent;
						
		}else if (this==parent.right){
			anotherChild=this.parent.left;
			this.left=anotherChild;
			this.right=parent;
						
		}
		this.parent=pp;
		if(anotherChild)
			{
				anotherChild.parent=this;
			}		
		parent.parent=this;
		parent.left=leftChild;		
		parent.right=rightChild;
		if(leftChild)
		{
			leftChild.parent=parent;
		}
		if(rightChild)
		{
			rightChild.parent=parent;
		}
				

	
		
}//else
	}
}

module.exports = Node;
