
## rems
font-size: 62.5%; /* now 1rem = 10px*/

## OOCSS & multiple less files

## responsive svgs
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 194 186">
    <style>
        svg * {
            transition: fill .1s ease-out, opacity .1s ease-out;
        }
        @media all and (max-width: 250px) {
            #curved_bg { 
                opacity: 0; 
            }
            #secondary_content, #primary_content { 
                fill: #195463; 
            }
        }
        @media all and (max-width: 200px) {
            #secondary_content {
                opacity: 0;
            }
        }
        @media all and (max-width: 150px) {
            #inner-circle, #middle-circle {
                opacity: 0;
            }
        }
    </style>
    <path id="curved_bg" fill="#195463" d="..."/>
    
</svg>




## hover, focus, etc
inkl. touch devices


## google analytics
click auf bestimmte links testen3