<template>
    <div>
        <div class="live-casino-list">
            <ul class="nav-pills">
                <li class="nav-item" v-for='(live, index) in livecasinolist' :key="index">
                    <span @click="setActive(live.name)" :class="[
                        'nav-link',
                        selectedOption === live.name ? 'nav-link-active' : ''
                    ]">
                        {{ live.name }}
                    </span>
                </li>
            </ul>
        </div>
        <div v-for="(casino, index) in filteredData.subCasinoGames" :key="index">
            <div v-for="(casinolist, index) in casino.games" :key="index">
                <img :src="casinolist.image" />
            </div>
        </div>
    </div>

</template>

<script>
import livecasinolist from "../../../utils/sidebarjson/others/livecasinojson.json"
export default {
    name: "LiveCasinoList",
    components: {},
    data() {
        return {
            selectedOption: "",
            livecasinolist: livecasinolist,
            filteredData: []
        }
    },
    methods: {
        setActive(name) {
            this.selectedOption = name
            this.filteredData = this.livecasinolist.filter((data) => data.name === name)


        }
    }
};
</script>
