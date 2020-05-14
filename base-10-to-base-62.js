{
    function base10Tobase62(num){
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let tiny = '';
        while(num > 0){
            tiny = tiny + chars[num % 62] ;
            num = Math.floor(num / 62);
        }
        return tiny;
    }

    function base62Tobase10(tiny){
       let chars  = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let indices = [], original = 0;

        // fetch indices from the tiny string
        for(let char of tiny){
            indices.push(chars.indexOf(char));
        }

        // use indices to fetch original num
        for(let i = 0; i < indices.length;i++){
            original += indices[i] * Math.pow(62,i);
        }

        return original;
    }

    base62Tobase10(base10Tobase62('132')) // output - 132
}
   
    
