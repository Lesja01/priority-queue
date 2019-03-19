const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize=maxSize||30;
		this.heap=new MaxHeap();
	}

	push(data, priority) {
		if(this.size()==this.maxSize){throw new Error ('You have reached max size')}
		else{
		this.heap.push(data, priority);
		}
	}

	shift() {
		if(this==null){throw new Error};
		let pop=this.heap.pop();	
		Object.entries(this.heap.priority).sort((a, b)=>
			 (a.priority - b.priority)
		  );
		return pop;
	}

	size() {
		return this.heap.length;
	}

	isEmpty() {
		if(this.heap==null){return true}
	}
}

module.exports = PriorityQueue;
