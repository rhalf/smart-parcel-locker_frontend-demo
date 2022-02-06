import Vue from 'vue';

Vue.filter('pad', function (value, size) {
    if (!value) return ''
    if (typeof value != "number") return ''

    var s = "000000000" + value;
    return s.substr(s.length - size);
})


export default Vue