const tap = require('tap');
const sgf = require('../index')

var simple = sgf.parse('(;FF[4]GN[Simple SGF\\]]AB[cd][eg];B[aa];W[bb]C[Comment]N[Node Name])');

tap.equal(simple.length, 1);
tap.equal(simple[0].info['GN'], 'Simple SGF]');
tap.equal(simple[0].rootNode.children[0].children[0].color, 'W');
tap.equal(simple[0].rootNode.children[0].children[0].comment, 'Comment');
tap.equal(simple[0].rootNode.children[0].children[0].name, 'Node Name');
tap.equal(simple[0].rootNode.children[0].children[0].position[1], 1);
tap.equal(simple[0].rootNode.setupStones[0].color, 'B');
tap.equal(simple[0].rootNode.setupStones[0].positions[1][1], 6);
