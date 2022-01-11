(() => {
    ((root, factory) => {

        console.log('in root func, root:', root);

        if ("undefined" != typeof module && module.exports)
            return module.exports = factory();


        console.log('will return');
        return "function" == typeof define && define.amd ? void define([], () => root.CrpMe = factory()) : root.CrpMe = factory()
    }
    )(this, () => {
        console.log('crp, in factory func: this', this);
        return {
            startStopTimes: {},
            idleTimeoutMs: 30000
        };
    }
    )
}
).call(this);

console.log('will add directly to window');

window.crp = {name: 'pak'}
