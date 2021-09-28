function intro (name, profession){
    console.log('My name is ' + name + ' and I am a ' + profession + ' .');
   // console.log(this);
}
intro('Sue','student');
intro.apply(undefined,['Mary','Lawyer']);
intro.call(undefined, 'James', 'artist');
