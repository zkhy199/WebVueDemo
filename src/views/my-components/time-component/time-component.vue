<style lang="less">
    @import './area-linkage.less';
    @import '../../../styles/common.less';
</style>

<template>
    <div>
        <Row :gutter="10">
            <Col span="24">
                <Card>
                    <p slot="title">
                        <Icon type="minus-round"></Icon>
                        基础示例
                    </p>
                    <Row class="area-linkage-page-row1">
                        <Col span="4">
                            <DatePicker type="date" placeholder="选择日期" style="width: 200px"></DatePicker>
                        </Col>
                        <Col span="4">
                            <DatePicker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></DatePicker>
                        </Col>
                        <Col span="4">
                            <DatePicker type="daterange" split-panels placeholder="选择日期" style="width: 200px"></DatePicker>
                        </Col>
                        <Col span="4">
                            <DatePicker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="选择日期（格式化）" style="width: 200px"></DatePicker>
                        </Col>
                        <Col span="4">
                            <DatePicker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="选择日期区间" style="width: 200px"></DatePicker>
                        </Col>
                        <Col span="4">
                            <DatePicker type="datetime" placeholder="选择日期和时间" style="width: 200px"></DatePicker>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
import alSelector from './components/al-selector.vue';
import alCascader from './components/al-cascader.vue';

// import Vue from 'vue';
// import iviewArea from 'iview-area';
// Vue.use(iviewArea);

export default {
    components: {
        alSelector,
        alCascader
    },
    data () {
        return {
            res1: [],
            resDefault: ['贵州省', '贵阳市', '观山湖区', '世纪城社区服务中心'],
            showRes: [],
            value1: '2018-06-04',
            value2: ['2018-06-01', '2018-06-04']
        };
    },
    methods: {
        renderFormat (label) {
            return label.join(' => ');
        },
        setAreaOne () {
            this.resDefault = ['北京市', '市辖区', '东城区', '东华门街道'];
        },
        setAreaTwo () {
            this.resDefault = ['山西省', '太原市', '小店区', '北营街道'];
        },
        setAreaThree () {
            this.resDefault = ['130000', '130700', '130730', '130730100000'];
        }
    },
    watch: {
        res1 (val) {
            this.showRes = val;
        },
        resDefault (val) {
            this.showRes = val;
        }
    }
};
</script>
