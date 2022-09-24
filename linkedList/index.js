class Node {
  constructor(item, next) {
    this.item = item;
    this.next = next;
  }
}

class LinkedList {
  __head = null;
  __numItems = 0;

  // item 을 연결 리스트의 index번 원소로 삽입
  insert(index, item) {
    if (index > this.__numItems - 1) {
      console.log("error!");
      return;
    }

    // index 가 0으로 헤더인 경우
    if (index === 0) {
      // head 가 없으면
      if (!this.__head) {
        this.__head = new Node(item, null);
        this.__numItems += 1;
        return;
      }

      this.__head = new Node(item, this.__head);
      this.__numItems += 1;
      return;
    }

    let currentIndex = 0;
    let currentNode = this.__head;
    while (currentIndex !== index - 1) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    const tempNodeAtIndex = currentNode.next;

    // 마지막 노드는 신경쓰지 않아도 된다. why? 어짭히 next는 null 값이기 때문에
    currentNode.next = new Node(item, tempNodeAtIndex.next);
    this.__numItems += 1;
  }

  // item 을 연결 리스트의 맨 뒤에 item 을 삽입
  append(item) {
    // head 가 없으면 head 에 Node 를 추가하고 리턴한다.
    if (!this.__head) {
      this.__head = new Node(item, null);
      this.__numItems += 1;
      return;
    }

    // head 를 시작으로 next 가 없을 때까지 반복문을 돌려 마지막 노드를 가져온다.
    let node = this.__head;
    while (!!node.next) {
      node = node.next;
    }

    // 위에서 찾은 마지막 노드의 next에 파라메터로 전달받은 item으로 마지막 노드를 생성하여 연결한다.
    node.next = new Node(item, null);
    this.__numItems += 1;
  }

  // 연결 리스트의 index번 원소를 삭제하면서 삭제된 값을 반환
  pop(index) {}

  // 연결 리스트에서 (처음으로 나타나는) x를 삭제한다.
  remove(item) {}

  // 연결 리스트의 i번 원소를 반환
  get(index) {}

  // 연결 리스트가 빈 리스트인지 boolean 값으로 반환
  isEmpty() {}

  // 연결 리스트의 총 원소 수를 반환
  size() {}

  // 연결 리스트를 청소
  clear() {}

  //연결 리스트에서 원소 item이 몇 번 나타나는지 알려준다.
  count(item) {}

  // 연결 리스트에 나열할 수 있는 객체(리스트, 튜플 등) a를 풀어서 추가한다.
  extend(a) {}

  // 연결 리스트를 복사해서 새 연결 리스트를 반환한다.
  copy() {}

  // 연결 리스트의 순서를 역으로 뒤집는다.
  reverse() {}

  // 연결 리스틀르 정렬한다.
  sort() {}
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(5);
linkedList.append(10);
linkedList.insert(0, 0.3);

console.log(linkedList);
