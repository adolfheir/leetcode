import ListNode from "../_utils/ListNode"

function swapPairs(head: ListNode | null): ListNode | null {
    const dmy = new ListNode(0, head);
    // 定义 curr 当前指针
    let curr: ListNode = dmy;

    while (curr.next !== null && curr.next.next !== null) {
        // 定义 node1 和 node2 指针
        let node1 = curr.next;
        let node2 = curr.next.next;

        // 反转 node1 node2 指向
        curr.next = node2;
        node1.next = node2.next;
        node2.next = node1;

        // 移动 curr 指针
        curr = curr.next.next!
    }

    return dmy.next;
};

