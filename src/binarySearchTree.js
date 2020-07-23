import React from 'react';
import BinarySearchTree from './bstConstructor';
import Queue from './queueConstructor';

class BinaryTree extends React.Component {
    state = {
        tree: new BinarySearchTree(),
        printTree: [],
        preOrder: [],
        postOrder: [],
        commandingOfficers: [],
    };

    //5. Implement different tree traversals
    // componentDidMount() {
    //     let bst = new BinarySearchTree();
    //     let data = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
    //     data.forEach(item => bst.insert(item));
    //     this.setState({
    //         tree: bst,
    //     });

    //     this.inOrderTrav(bst);
    //     this.preOrderTrav(bst);
    //     this.postOrderTrav(bst);
    // }

    //6. Find the next commanding officer
    componentDidMount() {
        let bst = new BinarySearchTree();
        
        bst.insert(10, 'Captain Picard')
        bst.insert(6, 'Commander Riker')
        bst.insert(4, 'Lt. Cmdr. Worf')
        bst.insert(8, 'Lt. Cmdr. LaForge')
        bst.insert(3, 'Lieutenant sercurity-officer')
        bst.insert(12, 'Commander Data')
        bst.insert(15, 'Lt. Cmdr. Crusher')
        bst.insert(13, 'Lieutenant Selar')

        this.setState({
            tree: bst,
        });

        this.bfs(bst)
        
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

    //6. Find the next commanding officer
    bfs (tree) {
        const queue = new Queue();
        const node = tree;
        queue.enqueue(node);
        while(queue.first !== null) {
            const node = queue.dequeue();
            this.state.commandingOfficers.push(node.value);

            if(node.left) {
                queue.enqueue(node.left);
            }

            if(node.right) {
                queue.enqueue(node.right);
            }
        }
        return ;
    }

    render() {
        return (
            <div>
                {/* 5. Implement different tree traversals */}
                <p>In Order Traversal</p>
                <div>{this.state.printTree.map(item => item + ', ')}</div>
                <p>Pre Order Traversal</p>
                <div>{this.state.preOrder.map(item => item + ', ')}</div>
                <p>Post Order Traversal</p>
                <div>{this.state.postOrder.map(item => item + ', ')}</div>
                
                {/* 6. Find the next commanding officer */}
                <p>Commanding Office Order</p>
                <div>{this.state.commandingOfficers.map(item => item + ', ')}</div>
            </div>
        );
    }
}

export default BinaryTree;
