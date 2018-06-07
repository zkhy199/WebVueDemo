<style lang="less">
    @import '../../../styles/common.less';
    @import '../advanced-router.less';
</style>

<template>
    <div>
        <Row>
            <Card>
                <p slot="title">
                    <Icon type="compose"></Icon>
                    订单详情
                </p>
                <Table :columns="order_col" :data="order_data"></Table>
                <Modal width="700" v-model="showInfo" title="订单信息">
                    <Table :columns="order_col" :data="order_data"></Table>
                </Modal>
            </Card>
        </Row>
        <Row class="margin-top-10">
            <Card>
                <Row>
                    <p class="advanced-router-tip-p">虽然iview-admin支持打开带参数的页面，但是类似于这种需求，还是建议用iview的Modal或者使用表格直接在表格内展开数据</p>
                    <p><Button @click="showInfo = true" type="primary">点击按钮弹出Modal</Button></p>
                </Row>
                <div class="margin-top-10">
                    <p class="advanced-router-tip-p">iview官方示例<a href="https://www.iviewui.com/components/table">表格</a></p>
                    <Table :columns="columns10" :data="data9"></Table>
                </div>
            </Card>
        </Row>
    </div>
</template>

<script>
import expandRow from './expandRow.vue';
export default {
    name: 'order-info',
    components: {
        expandRow
    },
    data () {
        return {
            showInfo: false,
            order_col: [
                {
                    title: '订单号',
                    key: 'order_id',
                    align: 'center'
                },
                {
                    title: '买家',
                    key: 'buyer',
                    align: 'center'
                },
                {
                    title: '地址',
                    key: 'addr',
                    align: 'center'
                },
                {
                    title: '下单时间',
                    key: 'time',
                    align: 'center'
                },
                {
                    title: '交易状态',
                    key: 'state',
                    align: 'center'
                }
            ],
            order_data: [],
            columns10: [
                {
                    type: 'expand',
                    width: 50,
                    render: (h, params) => {
                        return h(expandRow, {
                            props: {
                                row: params.row
                            }
                        });
                    }
                },
                {
                    title: '姓名',
                    key: 'name'
                },
                {
                    title: '年龄',
                    key: 'age'
                },
                {
                    title: '地址',
                    key: 'address'
                }
            ],
            data9: [
                {
                    name: '刘光瑞',
                    age: 28,
                    address: '贵阳市',
                    job: '前端工程师',
                    interest: '游戏',
                    birthday: '1990-01-01',
                    book: '乔布斯传',
                    movie: '致命魔术',
                    music: 'I Cry'
                },
                {
                    name: '王崇',
                    age: 27,
                    address: '贵阳市',
                    job: '前端工程师',
                    interest: '篮球',
                    birthday: '1931-01-01',
                    book: '乔布斯传',
                    movie: '致命魔术',
                    music: 'I Cry'
                }
            ]
        };
    },
    methods: {
        init () {
            let index = parseInt(this.$route.params.order_id.toString().substr(-1, 1));
            let buyer = '';
            let addr = '';
            let time = '';
            let state = '';
            switch (index) {
                case 1: buyer = 'Alex'; addr = '贵阳市高新区高科一号'; time = '2018年6月04日 13：33：24'; state = '已付款'; break;
                case 2: buyer = 'Liuguangrui'; addr = '贵阳市高新区高科一号'; time = '2018年6月04日 19：13：24'; state = '已付款'; break;
                case 3: buyer = 'java'; addr = '中科恒运'; time = '2018年6月04日 10：39：24'; state = '待收货'; break;
                case 4: buyer = 'html'; addr = '国家统计局'; time = '2018年6月04日 11：45：24'; state = '已收货'; break;
            }
            let order = {
                order_id: this.$route.params.order_id,
                buyer: buyer,
                addr: addr,
                time: time,
                state: state
            };
            this.order_data = [order];
        }
    },
    mounted () {
        this.init();
    },
    activated () {
        this.init();
    }
};
</script>
