//大类型
var types = [{
  id: 0,
  name: "男生"
}, {
  id: 1,
  name: "女生"
}, {
  id: 2,
  name: "漫画"
}
// , {
//   id: 3,
//   name: "杂志"
// }, {
//   id: 4,
//   name: "图书"
// }, {
//   id: 5,
//   name: "听书"
// }
];

//书籍类型
var book_types = [{
  id: 0,
  name: "玄幻"
}, {
  id: 0,
  name: "奇幻"
}, {
  id: 0,
  name: "武侠"
}, {
  id: 0,
  name: "都市"
}, {
  id: 0,
  name: "仙侠"
}, {
  id: 0,
  name: "历史"
}, {
  id: 0,
  name: "军事"
}, {
  id: 0,
  name: "灵异"
}, {
  id: 0,
  name: "科幻"
}, {
  id: 0,
  name: "游戏"
}, {
  id: 0,
  name: "竞技"
}, {
  id: 0,
  name: "职场"
}, {
  id: 0,
  name: "同人"
}, {
  id: 0,
  name: "短篇"
}, {
  id: 1,
  name: "搞笑"
}, {
  id: 1,
  name: "热血"
}, {
  id: 1,
  name: "冒险"
}, {
  id: 1,
  name: "恐怖"
}, {
  id: 1,
  name: "科幻"
}, {
  id: 1,
  name: "魔幻"
}, {
  id: 1,
  name: "玄幻"
}, {
  id: 1,
  name: "校园"
}, {
  id: 1,
  name: "悬疑"
}, {
  id: 1,
  name: "穿越"
}, {
  id: 1,
  name: "后宫"
}, {
  id: 1,
  name: "都市"
}, {
  id: 1,
  name: "恋爱"
}, {
  id: 1,
  name: "耽美"
}, {
  id: 1,
  name: "治愈"
}, {
  id: 1,
  name: "纯爱"
}, {
  id: 1,
  name: "古风"
}, {
  id: 1,
  name: "真人"
}, {
  id: 2,
  name: "玄幻言情"
}, {
  id: 2,
  name: "古代言情"
}, {
  id: 2,
  name: "仙侠奇缘"
}, {
  id: 2,
  name: "现代言情"
}, {
  id: 2,
  name: "浪漫青春"
}, {
  id: 2,
  name: "科幻空间"
}, {
  id: 2,
  name: "悬疑灵异"
}, {
  id: 2,
  name: "游戏竞技"
}, {
  id: 2,
  name: "同人小说"
}, {
  id: 2,
  name: "耽美小说"
}];


//正文-书籍信息
var local_database = [{
  imgsrc: "/images/swiper/hhzyhnt.jpg",
  title: "洪荒之妖皇逆天",
  grade: "★ ★ ★ ★ ☆",
  score: "9分",
  author: "清风扶醉月",
  type: "仙侠",
  words: "289.1万字",
  describe: "每个人心中都有一个洪荒故事！我的洪荒没有遗憾！",
  status: "更新中",
  comment: "值得一看",
  commentDate: "2018-12-14",
  postid: 0,
}, {
  imgsrc: "/images/swiper/rdzs.jpg",
  title: "儒道至圣",
  grade: "★ ★ ★ ★ ☆",
  score: "9分",
  author: "永恒之火",
  type: "东方玄幻",
  words: "673.9万字",
  describe: "这是一个读书人掌握天地之力的世界。\n才气在身，诗可杀敌，词能灭军，文章安天下。\n秀才提笔，纸上谈兵；举人杀敌，出口成章；进士一怒，唇枪舌剑。\n圣人驾临，口诛笔伐，可诛人，可判天子无道，以一敌国。\n此时，圣院把持文位，国君掌官位，十国相争，蛮族虎视，群妖作乱。\n此时，无唐诗大兴，无宋词鼎盛，无创新文章，百年无新圣。\n一个默默无闻的寒门子弟，被人砸破头后，挟传世诗词，书惊圣文章，踏上至圣之路。",
  status: "更新中",
  comment: "值得一看",
  commentDate: "2018-12-14",
  postid: 1,
}, {
  imgsrc: "/images/swiper/frxxzxjp.jpg",
  title: "凡人修仙之仙界篇",
  grade: "★ ★ ★ ★ ★",
  score: "10分",
  author: "忘语",
  type: "仙侠",
  words: "188.0万字",
  describe: "凡人修仙，风云再起\n时空穿梭，轮回逆转\n金仙太乙，大罗道祖\n三千大道，法则至尊\n《凡人修仙传》仙界篇，一个韩立叱咤仙界的故事，一个凡人小子修仙的不灭传说。",
  status: "更新中",
  comment: "值得一看",
  commentDate: "2018-12-14",
  postid: 2,
}, {
  imgsrc: "/images/swiper/qzfs.jpg",
  title: "全职法师",
  grade: "★ ★ ★ ★ ☆",
  score: "9分",
  author: "乱",
  type: "异世大陆",
  words: "605.5万字",
  describe: "一觉醒来，世界大变。\n熟悉的高中传授的是魔法，告诉大家要成为一名出色的魔法师。\n居住的都市之外游荡着袭击人类的魔物妖兽，虎视眈眈。\n崇尚科学的世界变成了崇尚魔法，偏偏有着一样以学渣看待自己的老师，一样目光异样的同学，一样社会底层挣扎的爸爸，一样纯美却不能走路的非血缘妹妹……\n不过，莫凡发现绝大多数人都只能够主修一系魔法，自己却是全系全能法师！",
  status: "更新中",
  comment: "值得一看",
  commentDate: "2018-12-14",
  postid: 3,
},];

//用户信息
var user_info = {
  userName: "书生游"
};

//轮播图
var swiper_info = [{
  swipersrc: "/images/swiper/hgg.jpg"
}, {
  swipersrc: "/images/swiper/wdyj.jpg"
}, {
  swipersrc: "/images/swiper/jtzl.jpg"
}];

//用于对外暴露接口
module.exports = {
  types: types,
  book_types: book_types,
  userInfo: user_info,
  bookList: local_database, //正文
  swiperInfo: swiper_info //轮播图
};