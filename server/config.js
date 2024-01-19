/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "特别奖"
  },
  {
    type: 1,
    count: 5,
    text: "特等奖",
    title: "",
    img: ""
  },
  {
    type: 2,
    count: 9,
    text: "一等奖",
    title: "",
    img: ""
  },
  {
    type: 3,
    count: 20,
    text: "二等奖",
    title: "",
    img: ""
  },
  {
    type: 4,
    count: 30,
    text: "三等奖",
    title: "",
    img: ""
  },
  {
    type: 5,
    count: 120,
    text: "四等奖",
    title: "",
    img: ""
  },
  {
    type: 6,
    count: 200,
    text: "五等奖",
    title: "",
    img: ""
  },
  {
    type: 7,
    count: 600,
    text: "阳光普照奖",
    title: "",
    img: ""
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 2, 3, 7, 12, 60, 50, 60];

/**
 * 卡片公司名称标识
 */
const COMPANY = "SMEE";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
