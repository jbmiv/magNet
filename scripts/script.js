<div class="create-post">
  <h2>New Blog Post</h2>
  <input type="text" id="titleInput" placeholder="Enter post title..." />
  <br />
  <textarea id="contentInput" rows="10" cols="30" placeholder="Enter post content..."></textarea>
  <button onclick="createPost()">Create Post</button>
</div>


<script>
  function createPost() {
    var title = document.getElementById('titleInput').value;
    var content = document.getElementById('contentInput').value;
    
    // Create a new post div
    var newPostDiv = document.createElement('div');
    newPostDiv.className = 'post';
  
    // Create an image and assign it some placeholder src
    var newImg = document.createElement('img');
    newImg.src="placeholder-image"; 
    
    // Create title element
    var h2 = document.createElement("h2");
    h2.innerText = title;  
    
    // Create paragraph element and append it to the div
    var p = document.createElement("p");
    p.innerText=content; 
      
    newPostDiv.appendChild(newImg);
    newPostDiv.appendChild(h2);
    newPostDiv.appendChild(p);
    
    // Append the new post to blog
    document.querySelector('.blog').appendChild(newPostDiv);  
  }
</script>