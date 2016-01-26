var graphs = {};

var calculateTotalWeight = function(path){
  var weight = 0;
  for(var i=0;i<path.length;i++){
    weight += path[i].value;
  };
  return weight;
};

var hasLessWeight = function(previousPath,recentPath){
  if(!previousPath) return true;
  return calculateTotalWeight(previousPath) > calculateTotalWeight(recentPath);
}

graphs.WeightedGraph = function(){
	this.graph = {};
};

graphs.WeightedGraph.prototype = {
	addVertex : function(vertex){
		this.graph[vertex] = [];
	},
	addEdge : function(edge){
		this.graph[edge.from].push(edge);
	},
	shortestPath : function(from,to,visiting){
		var visiting = visiting || [];
		if(from==to) return visiting;
		for(var i = 0; i<this.graph[from].length; i++){
			var vertex = this.graph[from][i].to;
			var path = this.shortestPath(vertex,to,visiting.concat(this.graph[from][i]));
			if(path[path.length-1].to==to && hasLessWeight(shortestPath,path))
				var shortestPath = path;
		}
		return shortestPath;
	}
}

graphs.Edge = function(edge,from,to,pathValue){
	this.name = edge;
	this.from = from;
	this.to = to;
	this.value = pathValue;
}

module.exports = graphs;
