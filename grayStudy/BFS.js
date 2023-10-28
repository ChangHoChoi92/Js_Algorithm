function BFS(graph, start, target) {
    let visited = [];
    let queue = [start];

    while (queue.length !== 0) {
        let current = queue.shift();
                
        if (visited.indexOf(current) === -1) {
            visited.push(current);
                        if(current===target){
                                return "있습니다"
                        }
            let neighbors = graph[current].filter(n => visited.indexOf(n) === -1);
            queue = queue.concat(neighbors);
        }
    }
    return -1;
}
const graph = {
    0:[1,2,3],
    1:[4,5],
    2:[],
    3:[],
    4:[6],
    5:[],
    6:[]
}

const result = BFS(graph,0,10)
console.log(result)//-1