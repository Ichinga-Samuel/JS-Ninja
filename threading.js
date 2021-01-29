const thread = require('worker_threads');


if(thread.isMainThread){
    module.exports = function reticulateSplines(splines){
        return new Promise((resolve, reject) =>{
            // Create a worker that loads and runs this same file of code.
            // Note the use of the special __filename variable.
            let reticulator = new thread.Worker(__filename);
            reticulator.postMessage(splines);
            reticulator.on('message', resolve);
            reticulator.on('error', reject);
        })
    }
    else{
        // If we get here, it means we're in the worker, so we register a
        // handler to get messages from the main thread. This worker is designed
        // to only receive a single message, so we register the event handler
        // with once() instead of on(). This allows the worker to exit naturally
        // when its work is complete.
        thread.parentPort.once('message', splines=>{
            for(let spline of splines) {
        // For the sake of example, assume that spline objects usually
        // have a reticulate() method that does a lot of computation.
        spline.reticulate ? spline.reticulate() : spline.reticulated = true;
    }
        // When all the splines have (finally!) been reticulated
        // pass a copy back to the main thread.
            thread.parentPort.postMessage(splines);
        })
    }
}
