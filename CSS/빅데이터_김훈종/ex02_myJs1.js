

        let red = document.getElementById('redBox');
        let blue = document.getElementById('blueBox');
        let green = document.getElementById('greenBox');
        let gray = document.getElementById('grayBox');

       
       
        const move = () => {
            blue.style.marginLeft = '100px';
            green.style.marginLeft = '200px';
            gray.style.marginLeft = '300px';

        }
       
        const round = () => {

           

            let div_list = document.querySelectorAll('div');
            console.log(div_list); 

           
            div_list.forEach(element => { 

            element.style.borderTopRightRadius = '50%';
            element.style.borderBottomLeftRadius = '50%';
            })
            
            

        }

