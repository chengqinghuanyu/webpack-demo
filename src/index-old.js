import _ from 'lodash'
import './index.css'
import A from './a.png'

function createDiv() {
    var el = document.createElement('div');
    el.innerHTML = _.join(['hello', 'world'], ' ');
    var myImgs = new Image();
    myImgs.src = A;
    el.appendChild(myImgs);
    return el;
}
document.body.appendChild(createDiv())