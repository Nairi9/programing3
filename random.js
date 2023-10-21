function random (items){

    var item;
    
    if (Array.isArray(items)) {
    
    item = items[Math.floor(Math.random()*items.length)];
    
    }else if (typeof(items) == 'number') {
    
    item = Math.floor(Math.random()*items);
    
    }
    
    return item;
    
    }
    
    module.exports = random;
    