import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Loading')
export class Loading extends Component {
    @property(Node)
    testNode:Node;
    start() {
        
    }

    update(deltaTime: number) {
        
    }
}


