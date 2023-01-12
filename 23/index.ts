import ListNode from "../_utils/ListNode"

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length === 0) {
        return null
    } else if (lists.length === 1) {
        return lists[0]
    }
    let middle = lists.length >> 1
    let left: Array<ListNode | null> = lists.slice(0, middle)
    let right: Array<ListNode | null> = lists.slice(middle)
    let sortedList: ListNode | null = mergeKLists(left)
    let sortedRight: ListNode | null = mergeKLists(right)

    return merge(sortedList, sortedRight)
};

function merge(a: ListNode | null, b: ListNode | null): ListNode | null {
    let dummyHead: ListNode = new ListNode()
    let p: ListNode = dummyHead
    let left: ListNode | null = a, right: ListNode | null = b
    while (left && right) {
        if (left.val > right.val) {
            p.next = right
            right = right.next
        } else {
            p.next = left
            left = left.next
        }
        p = p.next
    }
    // 处理剩余的
    if (left) {
        p.next = left
    }

    if (right) {
        p.next = right
    }
    return dummyHead.next
}

let list1 = new ListNode(1)
list1.next = new ListNode(4)
list1.next = new ListNode(5)

let list2 = new ListNode(1)
list2.next = new ListNode(3)
list2.next = new ListNode(4)

let list3 = new ListNode(2)
list3.next = new ListNode(6)

let ret = mergeKLists([list1, list2, list3])
console.log("ret", ret)
// console.log("4234")