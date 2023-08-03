var v = $('#display_box');
function cl(){
    console.log('clear');
    v.val('');
}
function del(){
    v.val(v.val().substring(0,(v.val().length-1)));
    console.log('del');
}
function eql(){
    try{
        v.val(eval(v.val()));
    }
    catch(err){
        alert("Please Enter a valid expression");
        cl();
    }
}
function insert(n){
    v.val(v.val() + n);
    console.log('insert');
}

