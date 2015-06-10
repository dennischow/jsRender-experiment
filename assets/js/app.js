var myTemplate = $.templates("#personTmpl");

var people = [
    {
        name: "Adriana",
        age: 20,
        birthday : {
            d: 14,
            m: 32, 
            y: 2004
        }
    },
    {
        name: "Robert", 
        age: 56,
        birthday : {
            d: 14,
            m: 32, 
            y: 2004
        }
    },
    {
        name: "Alan", 
        age: 9034,
        birthday : {
            d: 14,
            m: 32, 
            y: 2004
        }
    }
];

var html = myTemplate.render(people);

$("#peopleList").html('<ul>' + html + '</ul>');




var blogListDrawer = {
    run : function(data){
        var myTemplate = $.templates("#blogTmpl");
        var entries = data;
        var html = myTemplate.render(entries);
        $("#blogList").html('<ul>' + html + '</ul>');
    }
}



$.ajax({
    type: 'GET', 
    url: 'assets/js/blogData.json', 
    // data: dataValues, 
    dataType: "json",
    beforeSend : function(){
        console.log('Before');
    },
    success: function(data){ 
        console.log( data );
        blogListDrawer.run( data );
        return false;
    },
    error: function(){
        console.log('Error');
    }
});