var output=''
for(i=10;i>=0;i--){
    for(j=1;j<=i;j++){
        output+='  '
    }
    for(j=i;j<=10-1;j++){
        output+=' *'
    }
    for(k=i+1;k<=10-1;k++){
        output+=' *'
    }
    output+='\n'
}
console.log(output)
