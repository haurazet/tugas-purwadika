var output=''
for(i=5;i>=0;i--){
    for(j=1;j<=i;j++){
        output+='  '
    }
    for(j=i;j<=5-1;j++){
        if(j==i){
            output+= ' 1'
        }else{
        output+=' *'}
    }
    for(k=i+1;k<=5-1;k++){
        if(k==5-1){
            output+= ' 1'
        }
          else{
        output+=' *'}
    }
    output+='\n'
}
console.log(output)
