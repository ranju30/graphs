var graphs = {};

graphs.UndirectedGraph = function(){
	this.graph = {};
};
graphs.UndirectedGraph.prototype = {
	addVertex : function(point){
		this.graph[point] = [];
	},
	addEdge : function(from,to){
		this.graph[from] = this.graph[from] ? this.graph[from] : [];
    this.graph[to] = this.graph[to] ? this.graph[to] : [];
		this.graph[from].push(to);
		this.graph[to].push(from);
	},
	hasEdgeBetween : function(from,to){
		return this.graph[from].indexOf(to)>=0 || this.graph[to].indexOf(from)>=0;
	},
	order : function(){
		return Object.keys(this.graph).length;
	},
	size : function(){
		var vartex = Object.keys(this.graph);
		var self = this.graph;
		var size = 0;
		vartex.forEach(function(edge){
			size += self[edge].length;
		})
		return size/2;
	},
	pathBetween : function(from,to,visiting){
		var visiting = visiting || [from];
    if(visiting.indexOf(to) != -1)
        return visiting;
    for(var index = 0; index < this.graph[from].length; index++){
        var vertex = this.graph[from][index];
        if(visiting.indexOf(vertex) == -1)
            var path = this.pathBetween(vertex, to, visiting.concat(vertex));
        if(path && path.indexOf(to) != -1)
            return path;
    }
    return [];
	},
	farthestVertex : function(from, visiting){
    var visiting = visiting || [from];
    for(index = 0; index < this.graph[from].length; index++){
			var vertex = this.graph[from][index];
			if(visiting.indexOf(vertex) == -1)
		      return this.farthestVertex(vertex,visiting.concat(vertex));
			}
		return from;
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
	size : function(){
		var vartex = Object.keys(this.graph);
		var self = this.graph;
		var size = 0;
		vartex.forEach(function(edge){
			size += self[edge].length;
		})
		return size;
	},
	pathBetween : function(from,to,visiting){
		var visiting = visiting || [from];
    if(visiting.indexOf(to) != -1)
        return visiting;
    for(var index = 0; index < this.graph[from].length; index++){
        var vertex = this.graph[from][index];
        if(visiting.indexOf(vertex) == -1)
            var path = this.pathBetween(vertex, to, visiting.concat(vertex));
        if(path && path.indexOf(to) != -1)
            return path;
    }
    return [];
	},
	farthestVertex : function(from, visiting){
    var visiting = visiting || [from];
    for(index = 0; index < this.graph[from].length; index++){
			var vertex = this.graph[from][index];
			if(visiting.indexOf(vertex) == -1)
		      return this.farthestVertex(vertex,visiting.concat(vertex));
			}
		return from;
	},
};

module.exports = graphs;
