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
        profit: [],
    };

    componentDidMount(){
        this.implementTreeTraversals();
        this.findNextCommandingOfficer();
        this.findMaxProfit();
    }

    //5. Implement different tree traversals
    implementTreeTraversals() {
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

    //6. Find the next commanding officer
    findNextCommandingOfficer() {
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
    bfs(tree) {
        const queue = new Queue();
        const node = tree;
        queue.enqueue(node);
        while (queue.first !== null) {
            const node = queue.dequeue();
            this.state.commandingOfficers.push(node.value);

            if (node.left) {
                queue.enqueue(node.left);
            }

            if (node.right) {
                queue.enqueue(node.right);
            }
        }
        return;
    }

    //7. Max Profit
    findMaxProfit() {
        let profitTree = new BinarySearchTree();

        profitTree.insert(128, 'Monday');
        profitTree.insert(97, 'Tuesday');
        profitTree.insert(121, 'Wednesday');
        profitTree.insert(123, 'Thursday');
        profitTree.insert(98, 'Friday');
        profitTree.insert(97, 'Saturday');
        profitTree.insert(105, 'Sunday');

        console.log(profitTree);

        let smallest = this.findSmallest(profitTree);
        let largest = this.findLargest(profitTree);
        let maxProfit = largest[0] - smallest[0];

        this.setState({
            profit: [maxProfit, smallest[1], largest[1]],
        });
    }

    findSmallest = tree => {
        console.log(tree);
        let pair = [];
        if (!tree) {
            return 'no data';
        }
        if (!tree.left) {
            pair = [tree.key, tree.value];
            return pair;
        }

        while (tree.left) {
            tree = tree.left;
            this.findSmallest(tree);
        }

        pair = [tree.key, tree.value];
        return pair;
    };

    findLargest = tree => {
        console.log(tree);
        let pair = [];
        if (!tree) {
            return 'no data';
        }
        if (!tree.right) {
            pair = [tree.key, tree.value];
            return pair;
        }

        while (tree.right) {
            tree = tree.right;
            this.findLargest(tree);
        }

        pair = [tree.key, tree.value];
        return pair;
    };

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

                {/* 7. Max Profit */}
                <p>Max Profit: {this.state.profit[0]}</p>
                <div>
                    To make the maximum profit of ${this.state.profit[0]}, you should buy on{' '}
                    {this.state.profit[1]} and sell on {this.state.profit[2]}.
                </div>
            </div>
        );
    }
}

export default BinaryTree;
