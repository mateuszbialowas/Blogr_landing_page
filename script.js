function myMenu(){
    var mobileMenu = document.getElementById("mobile-menu");
    var openMenu = document.getElementById("open-menu");
    var closeMenu = document.getElementById("close-menu");
    if (mobileMenu.style.display === "block"){
        mobileMenu.style.display = "none";
        openMenu.style.display = "block";
        closeMenu.style.display = "none";
    } else{
        mobileMenu.style.display = "block"
        openMenu.style.display = "none";
        closeMenu.style.display = "block";
    }
}

function DropdownMenu1(){
    var mDropdown1 = document.getElementById("m-dropdown-1");
    if (mDropdown1.style.display === "block"){
        mDropdown1.style.display = "none";
    } else{
        mDropdown1.style.display = "block"
    }
}

function DropdownMenu2(){
    var mDropdown2 = document.getElementById("m-dropdown-2");
    if (mDropdown2.style.display === "block"){
        mDropdown2.style.display = "none";
    } else{
        mDropdown2.style.display = "block"
    }
}

function DropdownMenu3(){
    var mDropdown3 = document.getElementById("m-dropdown-3");
    if (mDropdown3.style.display === "block"){
        mDropdown3.style.display = "none";
    } else{
        mDropdown3.style.display = "block"
    }
}