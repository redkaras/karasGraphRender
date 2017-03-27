const DEFAULT_EDGE_NAME = "\x00";
const GRAPH_NODE = "\x00";
const EDGE_KEY_DELIM = "\x01";

export default class Graph {
  constructor(label=undefined, directed=false, multigraph=false, compound=false) {
    this._isDirected = directed;
    this._isMultigraph = multigraph;
    this._isCompound = compound;

    // Label for the graph itself
    this._label = label;

    // Defaults to be set when creating a new node
    this._defaultNodeLabelFn = () => ({});
    // Defaults to be set when creaeting a new edge
    this._defaultEdgeLabelFn = () => ({});

    // v -> label
    this._nodes = {};

    if (this._isCompound) {
      // v -> parent
      this._parent = {};
      // v -> children
      this._children = {};
      this._children[GRAPH_NODE] = {};
    }

    // v -> edgeObj
    this._in = {};
    
    // u -> v -> Number
    this._preds = {};

    // v -> edgeObj
    this._out = {};
    
    // v -> w -> Number
    this._sucs = {};

    // e -> edgeObj
    this._edgeObjs = {};

    // e -> label
    this._edgeLabels = {};

    this._nodeCount = 0;
    this._edgeCount = 0;
  }

  /*
   *  Graph functions
   */
  isDirected() {
    return this._isDirected;
  }
  isMultigraph() {
    return this._isMultigraph;
  }
  isCompound() {
    return this._isCompound;
  }
  setGraph(label) {
    this._label = label;
    return this;
  }
  graph() {
    return this._label;
  }

  /*
   *  Node functions
   */
  setDefaultNodeLabel(newDefaultFun) {
    if (newDefaultFun instanceof Function) {
      this._defaultEdgeLabelFn = newDefaultFun;
    }
    return this;
  }
  nodeCount() {
    return this._nodeCount;
  }
  nodes() {
    return Object.keys(this._nodes);
  }
}
