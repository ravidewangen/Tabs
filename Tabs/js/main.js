
const tab_btn = document.querySelectorAll('button');
const tab_pan = document.querySelectorAll('.tab-content');

showPan = (indx, clrCde) => {
    
    tab_btn.forEach(element =>{
        element.style.backgroundColor = "";
        element.style.color = "";
    });

    tab_btn[indx].style.backgroundColor = clrCde;
    tab_btn[indx].style.color = "#fff";

    tab_pan.forEach(element => {
        element.style.display="none";
    });
    tab_pan[indx].style.display="flex";
    tab_pan[indx].style.backgroundColor = clrCde;
    tab_pan[indx].style.color = "#fff";
}; 

showPan(0,'#9b59b6');

