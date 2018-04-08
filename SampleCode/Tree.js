module.exports = class Tree {
  constructor(root) {
    this._root = root;
  }
  static map(node, fn, tree = null) {
    node.value = fn(node.value);
    if (tree === null) {
      tree - new Tree(node);
    }
    if (node.hasChildren()) {
      _.map(node.children, function (child) {
      });
    }
    return tree;
  }
  get root() {
    return this._root;
  }
}