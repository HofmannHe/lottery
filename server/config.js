/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * extract_count: 每次抽取的奖品数量
* title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    extract_count: 1,
    title: "",
    text: "特别奖"
  },
  {
    type: 1,
    count: 5,
    extract_count: 2,
    text: "特等奖",
    title: "",
    img: ""
  },
  {
    type: 2,
    count: 9,
    extract_count: 3,
    text: "一等奖",
    title: "",
    img: ""
  },
  {
    type: 3,
    count: 20,
    extract_count: 7,
    text: "二等奖",
    title: "",
    img: ""
  },
  {
    type: 4,
    count: 30,
    extract_count: 12,
    text: "三等奖",
    title: "",
    img: ""
  },
  {
    type: 5,
    count: 120,
    extract_count: 40,
    text: "四等奖",
    title: "",
    img: ""
  },
  {
    type: 6,
    count: 200,
    extract_count: 50,
    text: "五等奖",
    title: "",
    img: ""
  },
  {
    type: 7,
    count: 600,
    extract_count: 60,
    text: "阳光普照奖",
    title: "",
    img: ""
  }
];

/**
 * 卡片公司名称标识
 */
const COMPANY = "SMEE";

module.exports = {
  prizes,
  COMPANY
};
