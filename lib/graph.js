var graphs = {};

graphs.UndirectedGraph = function(){
	this.graph = {};
};
graphs.UndirectedGraph.prototype = {
	addVertex : function(point){
		this.graph[point] = [];
	},
	addEdge : function(from,to){
		this.graph[from].push(to);
		this.graph[to].push(from);
	},
	hasEdgeBetween : function(from,to){
		return this.graph[from].indexOf(to)>=0 || this.graph[to].indexOf(from)>=0;
	},
	order : function(){
		return Object.keys(this.graph).length;
	},
};



graphs.DirectedGraph = function(){
	this.graph = {};
};
graphs.DirectedGraph.prototype = {
	addVertex : function(point){
		this.graph[point] = [];
	},
	addEdge : function(from,to){
		this.graph[from].push(to);
	},
	hasEdgeBetween : function(from,to){
		return this.graph[from].indexOf(to)>=0 || this.graph[to].indexOf(from)<0;
	},
	order : function(){
		return Object.keys(this.graph).length;
	},
};




module.exports = graphs;