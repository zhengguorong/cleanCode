// 不要使用系统专用名词，例如hp、aix、sco
// 😢 bad
const hp = 'hp';
const number: number = 123;

// 错误的类型标记
// 😢 bad
const userObj = ['tom', 'jake', 'mary'];
// 😁 good
const userList = ['tom', 'jake', 'mary'];

// 不要用不同的拼写表示同一个概念
// 😢 bad
const salePrice = 100;
const marketPrice = 100;