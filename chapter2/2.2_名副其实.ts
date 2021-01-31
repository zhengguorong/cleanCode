// 2.2 名副其实
// 变量、函数或类的命名应该表达它为什么会存在，它做什么事，如果名称需要注释来补充，那就不算是名副其实
// 我们应该花时间选个好名字，而且一旦你发现有更好的名称，就把旧的换掉

/**
 * 😢 bad
 * 1、theList中是什么东西？
 * 2、list1表示什么？
 * 3、值4的意义是什么？
 */

const theList: number[] = [4,2,3,1];
function getThem(): number[] {
  const list1: number[] = [];
  for (let x of theList) {
    if (x === 4) {
      list1.push(x);
    }
  }
  return list1;
}

/**
 * 😁 good
 * 假设我们开发的是一个扫雷游戏，盘面theList是一个数组，那可以命名为gameBoard
 * 把魔法数字4使用常量记录，FLAGGED表示“已标记”状态
 * 函数名字表达它的用途，表示获取“已标记”状态数据列表
 */
const gameBoard: number[] = [4,2,3,1];
const FLAGGED = 4;
function getFlaggedCells(): number[] {
  const flaggedList: number[] = [];
  for (let cell of gameBoard) {
    if (cell === FLAGGED) {
      flaggedList.push(cell);
    }
  }
  return flaggedList;
}