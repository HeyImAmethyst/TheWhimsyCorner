// initLayout() is called once the DOM (the HTML content of your website) has been loaded.
document.addEventListener("DOMContentLoaded", function () 
{
  // The layout will be loaded on all pages that do NOT have the "no-layout" class in the <body> element.
  if (!document.body.classList.contains("no-layout")) 
  {
    var mainContainer = document.getElementById("main-container");
      
    // Inserting your header and footer:
    mainContainer.insertAdjacentHTML("afterbegin", headerEl);
    mainContainer.insertAdjacentHTML("beforeend", footerEl);

    // Inserting sidebars:
    const centerContainer = document.getElementById("center-container");
      
    centerContainer.insertAdjacentHTML("beforebegin", navBarEl);
    centerContainer.insertAdjacentHTML("afterend", rightSidebarEl);
      
    const rightSidebar = document.getElementById("rightSidebar");
      
    rightSidebar.insertAdjacentHTML("afterend", moonBoxEl);
      
    //if (center) 
    //{
    //    wrapperElement.insertAdjacentHTML("afterbegin", sidebarEl1);
    //    wrapperElement.insertAdjacentHTML("beforeend", sidebarEl2);
    //    
    //    center.insertAdjacentHTML("beforebegin", navBarEl);
    //}

    initActiveLinks();
  }

  // add your own javascript code here...
});

/* ********************************* */

/**
 *  F U N C T I O N S
 */

function initActiveLinks() 
{
  // This function adds the class "active" to any link that links to the current page.
  // This is helpful for styling the active menu item.

  const pathname = window.location.pathname;
    
  [...document.querySelectorAll("a")].forEach((el) => 
  {
    const elHref = el
      .getAttribute("href")
      .replace(".html", "")
      .replace("/public", "");

    if (pathname == "/") 
    {
      // homepage
      if (elHref == "/" || elHref == "/index.html") el.classList.add("active");
    } 
    else 
    {
      // other pages
      if (window.location.href.includes(elHref)) el.classList.add("active");
    }
  });
}

function getNestingString() 
{
  // This function prepares the "nesting" variable for your header and footer (see below).
  // Only change this function if you know what you're doing.
  const currentUrl = window.location.href
    .replace("http://", "")
    .replace("https://", "")
    .replace("/public/", "/");
  const numberOfSlahes = currentUrl.split("/").length - 1;
  if (numberOfSlahes == 1) return ".";
  if (numberOfSlahes == 2) return "..";
  return ".." + "/..".repeat(numberOfSlahes - 2);
}

/* ********************************* */

/**
 *  H T M L
 */

const nesting = getNestingString();

/**
  Use ${nesting} to output a . or .. or ../.. etc according to the current page's folder depth.
  Example:
    <img src="${nesting}/images/example.jpg" />
  will output
  	 <img src="./images/example.jpg" /> on a page that isn't in any folder.
    <img src="../images/example.jpg" /> on a page that is in a folder.
    <img src="../../images/example.jpg" /> on a page that is in a sub-folder.
    etc.
 */

// Insert your header HTML inside these ``. You can use HTML as usual.
const headerEl = `
	<header>
        <div id="header-image">
            <img src="https://files.catbox.moe/iynb8o.png" />
        </div>

        <div id="header-title">
            <h1 class="header">Amethyt's Gallery</h1>
        </div>
    </header>
`;

// Insert your footer HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a footer.
const footerEl = `
	<footer>
                
        <div id="footer-text">
            <p> 
                Website began production in December of 2025 - Made by HeyImAmethyst - Hosted by Neocities
            </p>
        </div>

    </footer>
`;

// Insert your nav HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a sidebar.
const navBarEl = `
	<nav>
        <br>

        <div id="gif-manager">
            <button class="play-gif">Play GIFs</button>
            <button class="stop-gif">Stop GIFs</button>
        </div>

        <br>

        <div id="nav-title">
            <h3>Navigation</h3>
        </div>

        <br>

        <div class="custom-button">
            <a href="../../index.html">Home</a>
        </div>

        <div class="custom-button">
            <a href="../../pages/about.html">About</a>
        </div>

        <div class="custom-button">
            <a href="../../pages/blog.html">Blog</a>
        </div>

        <div class="custom-button">
            <a href="../../NeoGallery.html">Gallery</a>
        </div>

        <div class="custom-button">
            <a href="../../pages/neopets.html">My Neopets</a>
        </div>

        <div class="custom-button">
            <a href="../../https://heyimamethyst.atabook.org/">Guest Book</a>
        </div>

        <div class="custom-button">
            <a href="../../pages/smallGraphicsCollection.html">Graphics Collection</a>
        </div>

        <div class="custom-button">
            <a href="../../pages/websites.html">Cool Websites</a>
        </div>

        <div class="custom-button">
            <a href="../../pages/resources.html">Resources</a>
        </div>

        <br>

        <div id="socials-title">
            <h3>My Socials</h3>
        </div>

        <div class="socials-navi">

            <div class="custom-button">
                <a href="https://www.deviantart.com/heyimamethyst">
                    Deviant Art
                </a> 
            </div>

            <div class="custom-button">
                <a href="https://twitch.tv/helloimamethyst">
                    Twitch
                </a> 
            </div>

            <div class="custom-button">
                <a href="https://instagram.com/heyimamethyst/?hl=en" target="_blank">
                    Instagram
                </a> 
            </div>

            <div class="custom-button">
                <a href="https://twitter.com/HeyImAmethyst44" target="_blank">
                    Twitter
                </a> 
            </div>

            <div class="custom-button">
                <a href="https://pinterest.com/HeyImAmethyst" target="_blank">
                    Pinterest
                </a> 
            </div>

        </div>
        
        <div id="website-button-title">
            <h3>My Website Button</h3>
            
            <img class="freeze" src="https://files.catbox.moe/5ezv3z.png">
        </div>

    </nav>
`;

// Insert your sidebar HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a sidebar.
const rightSidebarEl = `
	<aside id="rightSidebar">
        <div class="rightSideBarSection">
            <h2>Time</h2>
        </div>

        <div id="timeAndDateContent">
            <iframe src="https://free.timeanddate.com/clock/iagegze0/n179/fs24/fc695887/tct/pct" frameborder="0" width="193" height="30" allowtransparency="true">

            </iframe>  
        </div>

        <div class="rightSideBarSection">
            <h2>Calendar</h2>
        </div>
        
        <div align=center>
            <div id='calendarContent' align=center>
                <iframe align=center src="../../pages/calendar.html" width="280" height="305" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0">
                </iframe>
            </div>
        </div>
        
        <div align=center>
            <iframe width="180" height="180" style="border: 1px solid #383838; padding: 10px; background-color:black;" src="https://dimden.dev/moon?custom=1" name="dimdenmoonwidget"></iframe>
        </div>
        
        <div class="rightSideBarSection">
            <h2>Visitor Counter</h2>
        </div>

        <div align=center id='visitorCounterContent'>
            <iframe align=center src="../../pages/visitorCounter.html" width="104" height="25" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0">
            </iframe>
        </div>
        
        <div class="rightSideBarSection">
            <h2>DO DAILY CLICK!!</h2>
        </div>
        
        <div align='center'>
            <a href="https://arab.org/">Arab.org</a>
        </div>
        

         <div class="rightSideBarSection">
            <h2>Chat</h2>
        </div>

        <div align='center'>
            <div align='center' id="chatContent">
                <iframe src="https://www3.cbox.ws/box/?boxid=3552621&boxtag=WWmumF" width="280" height="450" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto">

                </iframe>
            </div>
        </div>

        <div id="updates-title" class="rightSideBarSection">
            <h2>Updates</h2>
        </div>

        <a href= "https://heyimamethyst.neocities.org/rss.xml" style="font-family: Arial, Helvetica, sans-serif;">RSS Feed Link</a>
        <!--<div id="updatesBox" class="box">-->
        <div id="updatesBox">
            <!--
            <div class="updatePost"></div>
            <p>June 6 2026</p>
            <ul style="padding-left:10px;">
                <li>Rewrote the website code using sad girl online's layout maker</li>
            </ul>
            -->
            <iframe align=center src="../../pages/rss.html" width="400" height="450" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0">
            </iframe>
        </div>

        <br>

        <div align=center class="enlarge">
            <iframe align=center src="../../pages/coffeeButton.html" width="290" height="75" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0">
            </iframe>
        </div>
        <!--<script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="heyimamethyst" data-description="Support me on Buy me a coffee!" data-message="" data-color="#BD5FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>-->

    </aside>
`;

// Insert your moon box HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a footer.
const moonBoxEl = `
    
`;