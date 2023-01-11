import ListNode from "../_utils/ListNode"

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dmy = new ListNode(0, head);
    let slow = dmy;
    let fast = dmy;

    // fast 向后移动 n 个位置
    while (n-- > 0) fast = fast.next!;

    // fast 走到最后，slow 此时是 倒数第 n 个元素的前一个
    while (fast !== null && fast.next !== null) {
        fast = fast.next;
        slow = slow.next!;
    }

    // slow 的下一个节点就是要删除的节点
    slow.next = slow.next!.next;

    return dmy.next;
};
