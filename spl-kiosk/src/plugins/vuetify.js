import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

// import blueSky from '../theme/blueSky'
// import greenGrass from '../theme/greenGrass'
import blackOps from '../themes/blackOps'
// import rose from '../themes/rose'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
    theme: {
        themes: {
            light: blackOps
        }
    }
})