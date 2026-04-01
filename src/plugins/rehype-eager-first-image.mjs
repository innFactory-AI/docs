import { visit } from 'unist-util-visit';

export function rehypeEagerFirstImage() {
  return (tree) => {
    let found = false;
    visit(tree, 'element', (node) => {
      if (!found && node.tagName === 'img') {
        found = true;
        node.properties.loading = 'eager';
      }
    });
  };
}
