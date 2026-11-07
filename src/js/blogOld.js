function populateTagFilters(){
    
    fetch("../../json/blogTags.json")
        .then((response) => response.json())
        .then((blogTags) => {
        
            //prints [{"name":"Silly"},{"name":"Sad"},{"name":"Fun"}]
            //alert(JSON.stringify(blogTags));
            
            //for (var tag in blogTags)
            //{
            //    tagsArray.push(tag.name);
            //}
        
            //for (var i = 0; i < 1; i++) 
            //{
            //    var tag = tagsArrayData[i];
            //    alert(tag);
            //}
        
            var filterContainerElement = document.getElementById("tag-filters");
        
            //var string = "<summary>tag filters</summary><label><input type='radio' id='all' name='tag' checked />all</label>";
        
            for (var i = 0; i < blogTags.length; i++) 
            {
                var jsonObject = blogTags[i];
                //alert(jsonObject.name);
                //tagsArray.push(jsonObject.name);
                
                //<label><input type="radio" id="all" name="tag" checked />all</label>
                
                //var string += "<label><input type='radio' id='" + jsonObject.name + "' name='tag' checked />#" + jsonObject.name + "</label>";
                //var string = "<label><input type='radio' id='" + jsonObject.name + "' name='tag' checked />#" + jsonObject.name + "</label>";
                
                var label = document.createElement("label");
                label.innerHTML = "<input type='radio' id='" + jsonObject.name + "' name='tag'/>#" + jsonObject.name;
                
                filterContainerElement.firstElementChild.append(label);
            }
        
            //filterContainerElement.firstElementChild.innerHTML = string;
        })
        .catch((error) => console.error("Error fetching blog tags:", error));
}

function getImages() 
{
    return document.getElementsByTagName('img');
}

function getImages(contentId) 
{
    var content = document.getElementById(contentId);
    
    // only one image, just return an item; or you can return an array
    if (content) return content.getElementsByTagName('img');
}

function getFirstParagraph(contentId) 
{
    var content = document.getElementById(contentId);
    
    // only one paragraph, just return an item; or you can return an array
    if (content) return content.getElementsByTagName('p')[0];
}


function createPosts() {
    
    fetch("../../json/blogEntries.json")
        .then((response) => response.json())
        .then((blogEntries) => {
        
            var postArray = blogEntries;
            var postContainerElement = document.getElementById("postsContainer");
        
            postArray.reverse();
        
        
            var styleSheet = document.createElement("style");
        
            var styleArray = [];
        
            for (var i = 0; i < postArray.length; i++) 
            {
                var postData = postArray[i];
                
                var postDate = postData.date;
                var postHtml = postData.html;
                var postTags = postData.tags;
                
                var postTagsArray = postTags.toString().split(",");
                
                //Create blog post
                var blogPost = document.createElement("article");
                blogPost.classList.add("post");
                
                //Post header
                
                //<div class="post-header">@pastille <time>6/10/2025, 6:13pm</time></div>
                var postHeader = document.createElement("div");
                postHeader.classList.add("post-header");
                postHeader.innerHTML = "HeyImAmethyst <br> <time>" + postDate + "</time>";
                
                blogPost.appendChild(postHeader);
                
                //Post content
                var postContent = document.createElement("div");
                
                postContent.setAttribute("id", "post-Content");
                postContent.innerHTML = "<br>" + postData.html + "<br>";
                
                blogPost.appendChild(postContent);
                
                //var imagesArray = getImages();
                var imagesArray = getImages("post-Content");

                if(imagesArray && imagesArray.length > 0)
                {

                    for(var j = 0; j < imagesArray.length; j++)
                    {
                        imagesArray[j].classList.add("freeze");
                    }
                }
                
                //var p = getFirstParagraph("post-Content");
                //
                //if(p)
                //    p.classList.add("freeze");
                
                //// Initialize script
                //const f = new FreezeImages ();
//
                ////Set event listeners for all buttons
                //for(const el of document.getElementsByClassName('play-gif')) {
                //  el.addEventListener('click', () => f.start());
                //}
//
                //for(const el of document.getElementsByClassName('stop-gif')) {
                //  el.addEventListener('click', () => f.stop());
                //}
//
                //for(const el of document.getElementsByClassName('toggle-gif')) {
                //  el.addEventListener('click', () => f.toggle());
                //}
                
                //Post tags
                
                var tagSection = document.createElement("section");
                tagSection.classList.add("tags");
                
                var string = "";
                
                for(var tag in postTagsArray)
                {
                    if(postTagsArray[tag] != "")
                    {
                        var tagString = "<a href='#" + postTagsArray[tag] + "'>#" + postTagsArray[tag] + "</a>";
                        string += tagString;
                        
                        blogPost.classList.add(postTagsArray[tag]);
                        
                        var s =".tagged:has(#" + postTagsArray[tag] + ":checked) article[class~=" + postTagsArray[tag] + "]";
                        styleArray.push(s);
                        
                    }
                }
                
                tagSection.innerHTML = string;
                
                blogPost.appendChild(tagSection);
                
                //Add blog post to container element
                postContainerElement.appendChild(blogPost);
                
            }
        
            styleSheet.textContent = styleArray.toString() + "{display: inline-block;}";
            document.head.appendChild(styleSheet);
            
        })
        .catch((error) => console.error("Error fetching blog posts:", error));
}

window.addEventListener("load", function () {
    populateTagFilters();
    createPosts();
});
