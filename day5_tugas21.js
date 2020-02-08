var output=''
for(i=5;i>=0;i--){
    for(j=1;j<=i;j++){
        output+='  '
    }
    for(k=i;k<=5-1;k++){
        output+=' *'
    }
    for(l=i+1;l<=5-1;l++){
        output+=' *'
    }
    output+='\n'
}
for(m=1;m<=5;m++){
    for(n=1;n<=m;n++){
        output+='  '
    }
    for(o=m+1;o<=5;o++){
        if(!(n<=m)){
        output+=' *'
        }
    }
    for(p=o-(5-(5-3));p>0;p--){
        if(p>=m){
        output+=' *'
        }
    }
    output+='\n'
}
console.log(output)
