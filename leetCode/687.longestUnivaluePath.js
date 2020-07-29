/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * @author zxlg
 * @date 29/07/2020
 */

var longestUnivaluePath = function (root) {
  let ans = 0;
  arrowLength(root);
  return ans;

  // 令 arrowLength(node) 为从节点 node 延伸出的最长箭头的长度。如果 node.Left 存在且与节点 node 具有相同的值，则该值就会是 1 + arrowLength(node.left)。
  // 在 node.right 存在的情况下也是一样。
  function arrowLength(node) {
    if (node === null) return 0;
    const left = arrowLength(node.left);
    const right = arrowLength(node.right);

    let arrowLeft = 0;
    let arrowRight = 0;
    if (node.left !== null && node.val === node.left.val) {
      arrowLeft += left + 1;
    }
    if (node.right !== null && node.val === node.right.val) {
      arrowRight += right + 1;
    }
    ans = Math.max(ans, arrowLeft + arrowRight);
    return Math.max(arrowLeft, arrowRight);
  }
};
