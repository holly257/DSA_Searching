import React from 'react';
import BinarySearchTree from './bstConstructor';

//5. Implement different tree traversals

class BinaryTree extends React.Component {
    state = {
        tree: new BinarySearchTree(),
        printTree: [],
        preOrder: [],
        postOrder: [],
    };

    componentDidMount() {
        let bst = new BinarySearchTree();
        let data = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
        data.forEach(item => bst.insert(item));
        this.setState({
            tree: bst,
        });

        this.inOrderTrav(bst);
        this.preOrderTrav(bst);
        this.postOrderTrav(bst);
    }

    inOrderTrav = tree => {
        //L, root, R
        if (tree.left) {
            this.inOrderTrav(tree.left);
        }
        this.state.printTree.push(tree.key);

        if (tree.right) {
            this.inOrderTrav(tree.right);
        }
        return this.state.printTree;
    };

    preOrderTrav = tree => {
        this.state.preOrder.push(tree.key);

        if (tree.left) {
            this.preOrderTrav(tree.left);
        }

        if (tree.right) {
            this.preOrderTrav(tree.right);
        }
        return this.state.preOrder;
    };

    postOrderTrav = tree => {
        if (tree.left) {
            this.postOrderTrav(tree.left);
        }

        if (tree.right) {
            this.postOrderTrav(tree.right);
        }

        this.state.postOrder.push(tree.key);
        return this.state.postOrder;
    };

    render() {
        return (
            <div>
                <p>In Order Traversal</p>
                <div>{this.state.printTree.map(item => item + ', ')}</div>
                <p>Pre Order Traversal</p>
                <div>{this.state.preOrder.map(item => item + ', ')}</div>
                <p>Post Order Traversal</p>
                <div>{this.state.postOrder.map(item => item + ', ')}</div>
            </div>
        );
    }
}

export default BinaryTree;
