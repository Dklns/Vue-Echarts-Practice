<template>
    <div class="home">
        <header>
            <h1>数据可视化练习</h1>
        </header>
        <div class="container">
            <div class="left">
                <ItemPage>
                    <ItemOne />
                </ItemPage>
                <ItemPage>
                    <ItemTwo />
                </ItemPage>
            </div>
            <div class="center">
                <MapPage />
            </div>
            <div class="right">
                <ItemPage>
                    <ItemThree />
                </ItemPage>
                <ItemPage>
                    <ItemFour />
                </ItemPage>
            </div>
        </div>
    </div>
</template>

<script>
import ItemPage from '@/components/ItemPage.vue';
import ItemOne from '../components/ItemOne.vue';
import ItemTwo from '../components/ItemTwo.vue';
import ItemThree from '../components/ItemThree.vue';
import ItemFour from '../components/ItemFour.vue';
import MapPage from '../components/MapPage.vue';

import { inject } from 'vue';

export default {
    name: 'home',
    setup() {
        const echarts = inject('echarts');
    },
    components: {
        ItemPage,
        ItemOne,
        ItemTwo,
        ItemThree,
        ItemFour,
        MapPage
    }
}
</script>

<style lang="scss">
.home {
    header {
        height: 1rem;
        width: 100%;
        background-color: rgba(0, 0, 255, .2);

        h1 {
            font-size: .375rem;
            color: #fff;
            text-align: center;
            line-height: 1rem;
        }
    }

    .container {
        display: flex;
        align-items: center;
        min-width: 1200px;
        max-width: 2048px;
        margin: 0 auto;
        padding: .125rem .125rem 0;
        border: 1px solid red;

        .left {
            flex: 3;
        }

        .right {
            flex: 3;
        }

        .center {
            flex: 5;
            height: 10.5rem;
            border: 1px solid blue;
            padding: 0.125rem;
            margin: .25rem;
        }
    }
}
</style>