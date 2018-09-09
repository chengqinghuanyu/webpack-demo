import _ from 'lodash'
import printMe from './print'
import './index.css'
import {
    cube
} from './math'

function createDiv() {
    var el = document.createElement('div');
    el.innerHTML = _.join(['hello', 'world'], ' ');
    var btn = document.createElement('button');
    btn.innerHTML = "点我打印";
    btn.onclick = printMe;
    el.appendChild(btn);

    var s = document.createElement('div');
    s.innerHTML = [
        'hello webpack',
        '5 cube is eq to ' + cube(5)
    ].join('\n\n');
    return el, s;
}
document.body.appendChild(createDiv())

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('热模块替换');
        printMe();
    })
}