//Задача № 1
function cachingDecoratorNew(func) {
    const cache = [];
    return function(...args) {
        const hash = md5(args);
        const objectFromCache = cache.find(objectFromCache => objectFromCache.hash === hash);
        if (objectFromCache) {
            console.log("Из кэша: " + objectFromCache.value);
            return "Из кэша: " + objectFromCache.value;
        }

        let value = func(...args);
        cache.push({hash, value});

        if (cache.length > 5) {
            cache.shift();
        }

        console.log("Вычисляем: " + value);
        return "Вычисляем: " + value;
    }
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;

    function wrapper(...args){
        if (timeoutId === null) {
            func(...args);
            wrapper.count++;
        }

        console.log("Удалили текущий таймаут");
        clearTimeout(timeoutId);
        console.log("Создаем новый таймаут");
        timeoutId = setTimeout(() => {
            timeoutId = null;
            console.log(func(...args));
            console.log("Вызываем колбек");
        }, delay)

        wrapper.allCount++;
    }
    
    wrapper.count = 0;
    wrapper.allCount = 0;
    return wrapper;
} 