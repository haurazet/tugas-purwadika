var output=''
for(var i=0;i<5;i++){
    for(var k=0;k<i+1;k++){
        if(k!==0){
            output+=' '}
        // } console.log(output)
    }
    for(var j=i;j<5;j++){
        output+='*'
    }
    for(var k=i;k<5-1;k++){
        output+='*'
    }
    if(i<5-1){
        output+='\n'
    }
}
console.log(output)