
var world = [
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,1,2,1,1,2,2,2,1,2,2,2,1,2,2,1,1,1,2],
            [2,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2],
            [2,1,2,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,2],
            [2,1,2,2,2,1,1,1,1,1,1,1,1,1,2,1,3,1,2],
            [2,1,1,1,1,1,2,2,2,0,2,2,2,1,2,2,2,1,2],
            [2,1,1,1,1,1,2,0,0,0,0,0,2,1,1,1,1,1,2],
            [2,1,1,1,1,1,2,0,0,0,0,0,2,1,2,2,1,2,2],
            [2,1,2,1,1,1,2,2,2,2,2,2,2,1,2,1,1,1,2],
            [2,1,2,3,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2],
            [2,1,2,2,2,1,1,1,1,2,1,1,1,1,1,1,1,1,2],
            [2,1,2,1,1,1,2,1,1,2,1,1,1,2,2,2,2,1,2],
            [2,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,2,1,2],
            [2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
        ];

        var score= 0;
        var imgrotate;

        var pacman= {
            x: 1,
            y: 1,
        };

        var pinky= {
            x: 9,
            y: 5
        };
        var inky= {
            x: 11,
            y: 7
        };
        var blinky= {
            x: 9,
            y: 7
        };
        var clyde= {
            x: 7,
            y: 7
        };
        

        function displayworld(){
            var output='';

            for (var i=0; i<world.length; i++){
                output += "\n<div class='row'>\n";
                for (var j=0; j<world[i].length; j++){
                    if (world[i][j] == 2)
                        output += "<div class= 'brick'></div>";
                    
                    else if (world[i][j] == 1)
                        output += "<div class= 'coin'></div>";
                        
                    else if (world[i][j] == 3)
                        output += "<div class= 'cherry'></div>";
                    
                    if (world[i][j] == 0)
                        output += "<div class= 'empty'></div>";        
                }
                output+="\n</div>"; 
            }
            console.log(output);
            document.getElementById('world').innerHTML=output;
        }
        function displaypacman(){
            document.getElementById('pacman').style.top= pacman.y*20+"px";
            document.getElementById('pacman').style.left= pacman.x*20+"px";
            document.getElementById('pacman').style.transform = imgrotate;
        }
        function displaypinky(){
            document.getElementById('pinky').style.top= pinky.y*20+"px";
            document.getElementById('pinky').style.left= pinky.x*20+"px";
        }
        function displayblinky(){
            document.getElementById('blinky').style.top= blinky.y*20+"px";
            document.getElementById('blinky').style.left= blinky.x*20+"px";
        }
        function displayinky(){
            document.getElementById('inky').style.top= inky.y*20+"px";
            document.getElementById('inky').style.left= inky.x*20+"px";
        }
        function displayclyde(){
            document.getElementById('clyde').style.top= clyde.y*20+"px";
            document.getElementById('clyde').style.left= clyde.x*20+"px";
        }
        function displayscore(){
            document.getElementById('score').innerHTML = score;
        }
        displayworld();
        displaypacman();
        displayscore();
        displaypinky();
        displayblinky();
        displayinky();
        displayclyde();

        
        
        document.onkeydown = function(a){
            if (a.keyCode == 37 && world[pacman.y][pacman.x-1] != 2){
                pacman.x--;
                imgrotate= 'scaleX(-1)';
            }
            else if (a.keyCode == 39  && world[pacman.y][pacman.x+1] != 2){
                pacman.x ++;
                imgrotate= 'scaleX(1)';
            }
            else if (a.keyCode == 40 && world[pacman.y+1][pacman.x] != 2){
                pacman.y ++;
                imgrotate= 'rotate(90deg)';
            }
            else if (a.keyCode == 38 && world[pacman.y-1][pacman.x] != 2){
                pacman.y --;
                imgrotate= 'rotate(270deg)';
            }

            if(world[pacman.y][pacman.x]==1){
                world[pacman.y][pacman.x]= 0;
                score+=10;
                displayworld();
                displayscore();
            }
            
            else if(world[pacman.y][pacman.x]==3){
                world[pacman.y][pacman.x]= 0;
                score+=50;
                displayworld();
                displayscore();
            }
            console.log(a.keyCode);
            displaypacman();
        }