<template>
    <el-row>
        <el-row style="margin-left: 180px">
        <h2 style="width: 230px;">豆瓣电影排行榜</h2>
        <h3 style="color:green;width: 230px">豆瓣新片榜· · · · · · </h3>
        </el-row>
        <hr style="border: 1px dashed #cfc7dd;margin-left: 200px;width: 810px;">
        <el-row v-for="List in movieList" type="flex" justify="left" :gutter="200"
                style="margin-top: 20px;margin-left: 100px">
            <el-col :span="4">
                <img v-bind:src="List[0].imgUrl"style="width: 130px;height:200px;" />
            </el-col>
            <el-col :span="11" style="text-align: left;padding-left: 1px;margin-left: 50px;margin-top: 10px">
                <a href="#" style="text-decoration: none"><div class="ab">{{List[0].alias}}</div></a>
                <p style="margin-top: 20px">
                    {{List[0].actor}}
                </p>
                    <el-rate
                            style="margin-top:50px"
                            disabled
                             text-color="#ff9900"
                             v-model="List[0].score">
                    </el-rate>
                <div style="margin-top: -21px;margin-left: 150px"><a style="color: #b88b1f">9.1</a>  &nbsp;(123358人评价)</div>
            </el-col>
        </el-row>
        <hr style="border: 1px dashed #cfc7dd;margin-left: 200px;width: 810px;">
        <el-row v-for="List in movieList" type="flex" justify="left" :gutter="200"
                style="margin-top: 20px;margin-left: 100px">
            <el-col :span="4">
                <img v-bind:src="List[1].imgUrl"style="width: 130px;height:200px;" />
            </el-col>
            <el-col :span="11" style="text-align: left;padding-left: 1px;margin-left: 50px;margin-top: 10px">
                <a href="#" style="text-decoration: none"><div class="ab">{{List[1].alias}}</div></a>
                <p style="margin-top: 20px">
                    {{List[1].actor}}
                </p>
                <el-rate
                        style="margin-top:50px"
                        disabled
                        text-color="#ff9900"
                        v-model="List[1].score">
                </el-rate>
                <div style="margin-top: -21px;margin-left: 150px"><a style="color: #b88b1f">8.7</a>  &nbsp;(256214人评价)</div>
            </el-col>
        </el-row>
        <hr style="border: 1px dashed #cfc7dd;margin-left: 200px;width: 810px;">
        <el-row v-for="List in movieList" type="flex" justify="left" :gutter="200"
                style="margin-top: 20px;margin-left: 100px">
            <el-col :span="4">
                <img v-bind:src="List[2].imgUrl"style="width: 130px;height:200px;" />
            </el-col>
            <el-col :span="11" style="text-align: left;padding-left: 1px;margin-left: 50px;margin-top: 10px">
                <a href="#" style="text-decoration: none"><div class="ab">{{List[2].alias}}</div></a>
                <p style="margin-top: 20px">
                    {{List[2].actor}}
                </p>
                <el-rate
                        style="margin-top:50px"
                        disabled
                        text-color="#ff9900"
                        v-model="List[2].score">
                </el-rate>
                <div style="margin-top: -21px;margin-left: 150px"><a style="color: #b88b1f">7.8</a>  &nbsp;(698547人评价)</div>
            </el-col>
        </el-row>
        <hr style="border: 1px dashed #cfc7dd;margin-left: 200px;width: 810px;">
        <el-row v-for="List in movieList" type="flex" justify="left" :gutter="200"
                style="margin-top: 20px;margin-left: 100px">
            <el-col :span="4">
                <img v-bind:src="List[3].imgUrl"style="width: 130px;height:200px;" />
            </el-col>
            <el-col :span="11" style="text-align: left;padding-left: 1px;margin-left: 50px;margin-top: 10px">
                <a href="#" style="text-decoration: none"><div class="ab">{{List[3].alias}}</div></a>
                <p style="margin-top: 20px">
                    {{List[3].actor}}
                </p>
                <el-rate
                        style="margin-top:50px"
                        disabled
                        text-color="#ff9900"
                        v-model="List[3].score">
                </el-rate>
                <div style="margin-top: -21px;margin-left: 150px"><a style="color: #b88b1f">6.9</a>  &nbsp;(365241人评价)</div>
            </el-col>
        </el-row>
        <hr style="border: 1px dashed #cfc7dd;margin-left: 200px;width: 810px;">
        <el-row v-for="List in movieList" type="flex" justify="left" :gutter="200"
                style="margin-top: 20px;margin-left: 100px">
            <el-col :span="4">
                <img v-bind:src="List[4].imgUrl"style="width: 130px;height:200px;" />
            </el-col>
            <el-col :span="11" style="text-align: left;padding-left: 1px;margin-left: 50px;margin-top: 10px">
                <a href="#" style="text-decoration: none;"><div class="ab">{{List[4].alias}}</div></a>
                <p style="margin-top: 20px">
                    {{List[4].actor}}
                </p>
                <el-rate
                        style="margin-top:50px"
                        disabled
                        text-color="#ff9900"
                        v-model="List[4].score">
                </el-rate>
                <div style="margin-top: -21px;margin-left: 150px"><a style="color: #b88b1f">7.5</a>  &nbsp;(756214人评价)</div>
            </el-col>
        </el-row>
        <hr style="border: 1px dashed #cfc7dd;margin-left: 200px;width: 810px;">
        <el-row v-for="List in movieList" type="flex" justify="left" :gutter="200"
                style="margin-top: 20px;margin-left: 100px">
            <el-col :span="4">
                <img v-bind:src="List[5].imgUrl"style="width: 130px;height:200px;" />
            </el-col>
            <el-col :span="11" style="text-align: left;padding-left: 1px;margin-left: 50px;margin-top: 10px">
                <a href="#" style="text-decoration: none"><div class="ab">{{List[5].alias}}</div></a>
                <p style="margin-top: 20px">
                    {{List[5].actor}}
                </p>
                <el-rate
                        style="margin-top:50px"
                        disabled
                        text-color="#ff9900"
                        v-model="List[5].score">
                </el-rate>
                <div style="margin-top: -21px;margin-left: 150px"><a style="color: #b88b1f">9.6</a>  &nbsp;(222549人评价)</div>
            </el-col>
        </el-row>
        <hr style="border: 1px dashed #cfc7dd;margin-left: 200px;width: 810px;">
        <el-row v-for="List in movieList" type="flex" justify="left" :gutter="200"
                style="margin-top: 20px;margin-left: 100px">
            <el-col :span="4">
                <img v-bind:src="List[6].imgUrl"style="width: 130px;height:200px;" />
            </el-col>
            <el-col :span="11" style="text-align: left;padding-left: 1px;margin-left: 50px;margin-top: 10px">
                <a href="#" style="text-decoration: none"><div class="ab">{{List[6].alias}}</div></a>
                <p style="margin-top: 20px">
                    {{List[6].actor}}
                </p>
                <el-rate
                        style="margin-top:50px"
                        disabled
                        text-color="#ff9900"
                        v-model="List[6].score">
                </el-rate>
                <div style="margin-top: -21px;margin-left: 150px"><a style="color: #b88b1f">8.6</a>  &nbsp;(895624人评价)</div>
            </el-col>
        </el-row>
        <hr style="border: 1px dashed #cfc7dd;margin-left: 200px;width: 810px;">
    </el-row>
</template>
<script>
    export default{
        data:function(){
            return{
                movieList:[
                    [
                        {
                            alias:'爱尔兰杀手(港) / 听说你刷房子了',
                            score:4.7,
                            imgUrl:require('../assets/11.jpg'),
                            actor:"2019-09-27(纽约电影节) / 2019-11-01(美国点映) / 2019-11-27(美国网络) / 罗伯特·德尼罗 / 阿尔·帕西诺 / 乔·佩西 / 安娜·帕奎因 / 杰西·普莱蒙 / 哈威·凯特尔 / 斯蒂芬·格拉汉姆 / 鲍比·坎纳瓦尔 / 杰克·休斯顿 / 阿莱卡萨·帕拉迪诺 / 凯瑟琳·纳杜奇..."
                        },
                        {
                            alias:'小丑起源电影：罗密欧/Romeo',
                            score:4,
                            imgUrl:require('../assets/12.jpg'),
                            actor:"2019-08-31(威尼斯电影节) / 2019-10-04(美国) / 杰昆·菲尼克斯 / 罗伯特·德尼罗 / 马克·马龙 / 莎姬·贝兹 / 谢伊·惠格姆 / 弗兰西丝·康罗伊 / 布莱恩·考伦 / 布莱恩·泰里·亨利 / 布莱特·卡伦 / 道格拉斯·霍奇斯 / 格伦·弗莱施勒 / 比尔·坎普..."
                        },
                        {
                            alias:'82年生的金智英/2019-11-7(香港)',
                            score:3.7,
                            imgUrl:require('../assets/13.jpg'),
                            actor:"2019-10-23(韩国) / 2019-11-07(中国香港) / 郑有美 / 孔侑 / 金美京 / 孔敏晶 / 朴成妍 / 李凤莲 / 金圣喆 / 李乌 / 李海云 / 孙成灿 / 金正英 / 李娜云 / 禹志贤 / 韩国 / 金度英 / 118分钟 / 82年生的金智英 / 剧情 / 刘英雅 Yeong-ah Yoo / 赵南珠 Nam-joo..."
                        },
                        {
                            alias:' 好莱坞往事/Romeo(戛纳电影节) ',
                            score:4.1,
                            imgUrl:require('../assets/14.jpg'),
                            actor:"2019-05-21(戛纳电影节) / 2019-07-26(美国) / 2019(中国大陆) / 莱昂纳多·迪卡普里奥 / 布拉德·皮特 / 玛格特·罗比 / 埃米尔·赫斯基 / 玛格丽特·库里 / 蒂莫西·奥利芬特 / 茱莉亚·巴特斯 / 奥斯汀·巴特勒 / 达科塔·范宁 / 布鲁斯·邓恩 /..."
                        },
                        {
                            alias:'婚姻故事/(威尼斯电影节)/2019',
                            score:3.6,
                            imgUrl:require('../assets/15.jpg'),
                            actor:"2019-08-31(威尼斯电影节) / 2019-10-04(美国) / 杰昆·菲尼克斯 / 罗伯特·德尼罗 / 马克·马龙 / 莎姬·贝兹 / 谢伊·惠格姆 / 弗兰西丝·康罗伊 / 布莱恩·考伦 / 布莱恩·泰里·亨利 / 布莱特·卡伦 / 道格拉斯·霍奇斯 / 格伦·弗莱施勒 / 比尔·坎普..."
                        },
                        {
                        alias:'准备好了没/暴血新婚夜(香港)',
                        score:4.8,
                        imgUrl:require('../assets/16.jpg'),
                        actor:"2019-08-31(威尼斯电影节) / 2019-10-04(美国) / 杰昆·菲尼克斯 / 罗伯特·德尼罗 / 马克·马龙 / 莎姬·贝兹 / 谢伊·惠格姆 / 弗兰西丝·康罗伊 / 布莱恩·考伦 / 布莱恩·泰里·亨利 / 布莱特·卡伦 / 道格拉斯·霍奇斯 / 格伦·弗莱施勒 / 比尔·坎普..."
                    },
                        {
                            alias:'第一滴血5:最后的血/蓝波牛鼻',
                            score:3.8,
                            imgUrl:require('../assets/17.jpg'),
                            actor:"2019-09-18(印度尼西亚) / 2019-09-20(美国) / 2019-09-27(西班牙) / 西尔维斯特·史泰龙 / 帕斯·贝加 / 塞尔吉奥·佩里斯-门切塔 / 艾德里安娜·巴拉扎 / 维特·蒙雷尔 / 吉妮·金 / 华金·科西奥 / 帕斯卡西奥·洛佩斯 / 奥斯卡·贾恩那达 / 亚历山大·迪米特罗夫..."
                        },
                    ]
                ]
            }
        }

    }
</script>
<style>
    .ab:hover{background-color: rgb(77, 136, 233);width:240px;color:white;
    }
    .ab{color: #3377aa
    }
</style>