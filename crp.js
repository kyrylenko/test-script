console.log('Hello from CRP');
window.crp = { crp: 'hello' }

    (() => {
        ((a, b) => {
            if ("undefined" != typeof module && module.exports)
                return module.exports = b();
            return "function" == typeof define && define.amd ? void define([], () => a.CrpMe = b()) : a.CrpMe = b()
        }
        )(this, () => {
            let a = {
                startStopTimes: {},
                idleTimeoutMs: 30000
            };
            return a
        }
        )
    }
    ).call(this);
