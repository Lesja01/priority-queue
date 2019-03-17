const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize=maxSize||30;
		this.heap=new MaxHeap;
	}

	push(data, priority) {
		if(this.length==this.maxSize){throw new Error};
		this.heap.push(data, priority);
	}

	shift() {
		if(this==null){throw new Error};
		this.heap.pop();
		this.heap.sort(sort(function (a, b) {
			if (a.priority > b.priority) {
			  return 1;
			}
			if (a.priority < b.priority) {
			  return -1;
			}
			// a должно быть равным b
			return 0;
		  }))
		return this.heap.pop();
	}

	size() {
		return this.heap.length;
	}

	isEmpty() {
		if(this.heap==null){return true}
	}
}

module.exports = PriorityQueue;
