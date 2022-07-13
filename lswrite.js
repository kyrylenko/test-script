(() => {
    ((root, factory) => {
        console.log('in root func, root:', root);
        
        localStorage.setItem('lswrite', 'initialized');
        // Global Variables
        return root.LsWrite = factory();

    })(this, () => {
        console.log('crp: in factory func: this', this);
        return {
            name: 'lswrite',
            action: function(){
                console.log('lswrite action: write date to localStorage');
                localStorage.setItem('lswrite', Date.now());
            }
        };
    }
    )
}).call(this);

console.log('hello from outside of lswrite.js');