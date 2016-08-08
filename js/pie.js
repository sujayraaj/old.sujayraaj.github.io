var pieData = document.querySelectorAll('.pie');
var degreeArray={};
for(var it= 0;it<pieData.length;it++){
    var col = pieData[it].getAttribute('data-color');
    var val = (pieData[it].getAttribute('data-value')/100)*360.0;
    var opa = (pieData[it].getAttribute('data-color-opacity'))*1.0;
    console.log('opacity '+opa)
    degreeArray[it] = {value:val,color:col,op:opa};
}
/*var degreeArray = {1:{value:30,color:'red'},
                    2:{value:210,color:'yellow'},
                    3:{value:10,color:'green'},
                    4:{value:50,color:'blue'},
                    5:{value:45,color:'purple'},
                    6:{value:15,color:'pink'}
                };
*/
var svg = document.getElementById('pieSVG');
function createPie(svg,width,height,radius,degreeArray) {
    c=9;
    var pathObj = {};
    var theta= 0;
    var futuretheta=0;
    var currentPos = [(height/2 + (radius*(Math.sin(theta)))),
                    (width/2 - (radius*(Math.cos(theta))))];

    for( x in degreeArray){
    theta+=(degreeArray[x]['value']/360)*2*Math.PI;

    var nextPos =  [(height/2 + (radius*(Math.sin(theta)))),
                    (width/2 - (radius*(Math.cos(theta))))];
    console.log(currentPos+'    '+nextPos+'\n')
    var bigCurve= degreeArray[x]['value'] > 180 ? 1 : 0;
    var path = '<path d="M'+(+width/2)+' '+(+height/2)+' '
                +'L '+currentPos[0]+' '+currentPos[1]+' '
                +'A '+radius+' '+radius+' 0 '+bigCurve
                +' 1 '
                +nextPos[0]+' '
                +nextPos[1]+' '
                +'L '+(width/2)+' '+(height/2)
                +' " fill="'+degreeArray[x]['color']+'" fill-opacity="'+degreeArray[x]['op']+'" />'    
                console.log(path);
    --c;
    svg.innerHTML+= path;
    console.log(theta); 
    currentPos=nextPos;
    }
}
createPie(svg,300,300,100,degreeArray);