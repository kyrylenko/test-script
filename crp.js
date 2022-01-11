(() => {
    ((root, factory) => {

        console.log('in root func, root:', root);

        if (typeof module !== 'undefined' && module.exports) {
            // CommonJS
            console.log('crp CommonJS');
            return module.exports = factory();
        } 
        /* else if (typeof define === 'function' && define.amd) {
            // AMD
            console.log('crp AMD');
            define([], () => {
                return (root.CrpMe = factory());
            });
        }  */
        else {
            console.log('crp Global Variables');
            // Global Variables
            return root.CrpMe = factory();
        }
    }
    )(this, () => {
        console.log('crp: in factory func: this', this);
        return {
            startStopTimes: {},
            idleTimeoutMs: 30000
        };
    }
    )
}
).call(this);

console.log('will add directly to window');

window.crp = { name: 'pak' }
