import test from 'ava';
import Graph from '../../src/graph/graph';

test('base graph', t => {
  let label = 'undirect graph';
  let graph = new Graph(label);
  t.is(graph.graph(), label);
  t.is(graph.isDirected(), false);
});
