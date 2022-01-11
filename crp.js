(() => {
    ((root, factory) => {

        console.log('in root func, root:', root);


        /* typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
            typeof define === 'function' && define.amd ? define(['exports'], factory) :
                (global = global || self, factory(global.tf = global.tf || {})) */


        if (typeof module !== 'undefined' && module.exports) {
            // CommonJS
            console.log('crp CommonJS');
            return module.exports = factory();
        }
        else if (typeof define === 'function' && define.amd) {
            // AMD
            console.log('crp AMD');
            define([], () => {
                console.log('in define');
                return (root.CrpMe = factory());
            });
        }
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

function fff(c, d, e) {
    return _.isString(c) && "io.ox/core/notifications" !== c && (_.isFunction(d) || _.isArray(d)) ? (2 === arguments.length && (e = d,
    d = []),
    ox.manifests && !ox.manifests.hasPluginsFor(c) || (d.push(c + ":placeholder!"),
    b(c + ":placeholder", {
        load: a(c)
    })),
    b.call(this, c, d, e)) : b.apply(this, arguments)
}