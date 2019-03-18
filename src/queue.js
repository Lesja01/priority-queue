const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize=maxSize||30;
		this.heap=new MaxHeap();
	}

	push(data, priority) {
		if(this.heap.size()==this.maxSize){throw new Error ("You have reached max size")}
		else{
		this.heap.push(data, priority);
		}
	}

	shift() {
		if(this==null){throw new Error};
		this.heap.pop();
		console.log(this.heap);
		Object.keys(this.heap.priority)(function (a, b) {
			return (a.priority - b.priority)
		  });
		return this.heap.pop();
	}

	size() {
		this.heap.size();
	}

	isEmpty() {
		if(this.heap==null){return true}
	}
}

module.exports = PriorityQueue;
