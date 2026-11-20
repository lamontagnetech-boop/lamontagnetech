// Ported from the original HTML & CSS Basics Guide. Lesson text and examples preserved.
function runCode() {
    const source = document.getElementById('programmingScreen').value;
    // srcdoc previews have no normal page URL. Handle fragment links inside
    // the preview so they scroll locally rather than navigating to this site.
    const fragmentNavigation = `<script>
      document.addEventListener('click', function (event) {
        const link = event.target.closest('a[href^="#"]');
        if (!link) return;
        const hash = link.getAttribute('href').slice(1);
        if (!hash) return;
        let id;
        try { id = decodeURIComponent(hash); } catch (_) { id = hash; }
        const target = document.getElementById(id);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ block: 'start', behavior: 'auto' });
        }
      });
    <\/script>`;
    const previewHTML = /<\/body\s*>/i.test(source)
        ? source.replace(/<\/body\s*>/i, fragmentNavigation + '</body>')
        : source + fragmentNavigation;
    document.getElementById('outputFrame').srcdoc = previewHTML;
}
function downloadCode() { const source = document.getElementById('programmingScreen').value; const blob = new Blob([source], {type:'text/html'}); const url = URL.createObjectURL(blob); const link=document.createElement('a'); link.href=url; link.download='code.html'; document.body.appendChild(link); link.click(); link.remove(); setTimeout(()=>URL.revokeObjectURL(url),1000); }

// Function to handle dropdown menu item click
function handleDropdownItemClick(htmlCode, aboutContent) {
    // Get the textarea element
    var textarea = document.getElementById('programmingScreen');
    // Set the value of the textarea to the selected HTML code
    textarea.value = htmlCode;
    // Run the code immediately
    runCode();
    // Update the content of the "About" article
    document.getElementById('info').innerHTML = aboutContent; // Updated the id here
}

// Add event listeners to dropdown menu items
document.getElementById('b1').addEventListener('click', function() {
    // Define the HTML code for Beginner 1
    var beginner1HTML = `<!DOCTYPE html>
<html>
    <head>
    
    </head>
    <body>
    
    </body>
</html>`;
    // Define the content for Beginner 1 in the "About" article
  var beginner1About = `
    <b>"Tags"</b> are the language of the web - also known as HTML. They start with a "&lt;" and end with a "&gt;".<br><br>            
    <span class="start">&lt;html&gt;</span> is an example of a <span class="start">start</span> tag, in this case, it shows where the HTML code begins. <br><br>
    <span class="end">&lt;/html&gt;</span> is an example of an <span class="end">end</span> tag, in this case, it shows where the HTML code ends. You can tell if something is an <span class="end">end</span> tag if it has "/" right after "&lt;".
    <br><br>
    Some tags are considered <span class="empty">empty</span> tags, like <span class="empty">&lt;br&gt;</span>, they don't have <span class="end">end</span> tags. This is usually because they perform a quick, simple action. In the case of <span class="empty">&lt;br&gt;</span>, it creates a <b>line break</b>. <br> <br>
    <span class="doctype">&lt;!DOCTYPE html&gt;</span> is special because it <i>isn't</i> a tag at all. (Even though it looks like one!) It is considered a <i>declaration</i>. It tells the browser what version of HTML the page is running. In this case, we are using HTML 5.`;

	// Update the content of the "About" article using innerHTML
	document.getElementById('info').innerHTML = beginner1About;

    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(beginner1HTML, beginner1About);
});

document.getElementById('headings').addEventListener('click', function() {
    // Define the HTML code for Headings
    var headingsHTML = `<!DOCTYPE html>
<html>
    <head>
    
    </head>
    <body>
    	<h1>Heading 1 - The largest</h1>
	<h2>Heading 2</h2>
	<h3>Heading 3</h3>
	<h4>Heading 4</h4>
	<h5>Heading 5</h5>
	<h6>Heading 6 - The smallest</h6>
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var headingsAbout = `
        <b>Headings</b> are used to divide the page up into sections and give them titles.<br><br>For example: the top of page would use 
		h1 since it is the largest of the headings.<br><br>The h2 heading would be used for something smaller, like the title of an article or menu.
		<br><br>You'll notice that the order of the headings matches the order that we wrote them in. <br><br>The browser will follow your code in the order
		you wrote it. If something is out of order, you might want to look at how you put it into the programming window!<br><br>Lastly, headings are 
		<b>bold</b> to start with, so there is no need to bold them later.`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(headingsHTML, headingsAbout);
});

document.getElementById('paragraphs').addEventListener('click', function() {
    // Define the HTML code for Headings
    var paragraphsHTML = `<!DOCTYPE html>
<html>
    <head>
    
    </head>
    <body>
	
    	<p>The "p" tag creates a paragraph. This is a great place to put information that you want your user to read.</p>
	
	
	
	<p>Look    at    the    programming    window.    The    number    of     spaces     does    not    affect     what     you     get    in    the     end.</p>
	
	
	
	<p>Enter also
		
		
		
	does not do anything either.</p>
	
	
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var paragraphsAbout = `
        <b>Paragraphs</b> are used for writing in information. If you don't like the basic font, don't worry - we can change
		that later!<br><br>
		You'll notice that spaces and enters do not change the way the paragraph displays. This is because your programming
		window assumes that you are making space for other code - not spaces in the paragraph itself.<br><br>
		Not to worry though! Next you will learn about "line breaks" which will help us with moving things down a line.<br><br>
		Lastly, &lt;p&gt; is an example of <b>block</b> code. Each time you make a new pair of &lt;p&gt; tags, it creates a new "block" which 
		words can be in. This is why each paragraph is separated.<br>
		<p style="border:1px solid black;">Here is an example of a block code</p>
		<p style="border:1px solid black;">And another block code below it</p>
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(paragraphsHTML, paragraphsAbout);
});

document.getElementById('line-breaks').addEventListener('click', function() {
    // Define the HTML code for Headings
    var linebreaksHTML = `<!DOCTYPE html>
<html>
    <head>
    
    </head>
    <body>
	
		<p>This is a paragraph without a line break</p>
	
	<p>This is a paragraph <br> with a line break</p>
	
	<p>Multiple<br>line<br>breaks<br>make<br>many<br><br><br>lines!</p>
	
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var linebreaksAbout = `
        <b>Line Breaks</b> or <b>&lt;br&gt;</b> act like the "Enter" key on your keyboard.<br><br>
		They create new lines so you can break up information inside a "block" (see paragraphs for what a "block" is.)<br><br>
		This means the <b>&lt;br&gt;</b> is <i>not</i> a "block" code - it doesn't have it's own block.<br><br>
		Instead it is considered an "inline" code - meaning that it can work <i>inside</i> another block code anywhere you put it!<br><br>
		You will also notice that <b>&lt;br&gt;</b> does not have an "end" tag. That is because it is considered an <i>empty</i> tag. It doesn't have
		any information inside of it, and it does a quick job - in this case it just breaks up the content.
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(linebreaksHTML, linebreaksAbout);
});

document.getElementById('bold').addEventListener('click', function() {
    // Define the HTML code for Headings
    var boldHTML = `<!DOCTYPE html>
<html>
    <head>
    
    </head>
    <body>
	
		<p><b>This paragraph is using the bold tag!</b></p>
		<p><strong>This paragraph is using the strong tag, it usually looks the same as bold! This is used to show important text.</strong></p>
		<p>You can also <b>wrap</b> these tags around <strong>individual</strong> words instead of a whole sentence!</p>
	
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var boldAbout = `
        <b>Bold</b> "&lt;b&gt;" and <strong>Strong</strong> "&lt;strong&gt;" both make the letters appear thicker, though <strong>strong sometimes</strong> appears with an <u>underline</u> in older browsers.<br><br>
		Just like with &lt;br&gt;, <b>bold</b> and <strong>strong</strong> are <em>inline</em> codes. This means they can be used anywhere within a block code.
		For example: the <b>&lt;p&gt;</b> tag can have many words or all of its words set to <b>bold</b> or <strong>strong.</strong>
		<p style="border:1px solid black;">Here is a visual of a paragraph "block" with an <strong style="border:1px solid black;">"inline"</strong> strong code.</p>
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(boldHTML, boldAbout);
});

document.getElementById('italics').addEventListener('click', function() {
    // Define the HTML code for Headings
    var italicHTML = `<!DOCTYPE html>
<html>
    <head>
    
    </head>
    <body>
	
		<p><i>This paragraph is using the italics tag! This is usually used for book titles and foreign/unusual words.</i></p>
		
		<p><strong>Italics Example:</strong><br> In the book <i>Dragon Quest</i> by Anne McCaffery, the dragons live in caves called <i>weyrs.</i>
		
		<p><em>This paragraph is using the emphasize tag, it usually looks the same as italics! This is used to show important text.</em></p>
		
		<p><strong>Emphasis Example:</strong><br> Are you <em>sure</em> you want to eat that hot pepper?</p>
	
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var italicAbout = `
        <i>Italics</i> "&lt;i&gt;" and <em>Emphasis</em> "&lt;em&gt;" both make the letters appear slightly slanted.<br><br>
		Just like with <strong>&lt;strong&gt;</strong> and <b>&lt;b&gt;</b>, <i>italics</i> and <em>emphasis</em> are <em>inline</em> codes. This means they can be used anywhere within a block code.
		For example: the <b>&lt;p&gt;</b> tag can have many words or all of its words set to <i>italics</i> or <em>emphasis.</em>
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(italicHTML, italicAbout);
});

document.getElementById('unordered').addEventListener('click', function() {
    // Define the HTML code for Headings
    var unorderedHTML = `<!DOCTYPE html>
<html>
    <head>
    
    </head>
    <body>
	
	<ul>
		<li>This is an example</li>
		<li>of an "unordered" list</li>
		<li>each list item</li>
		<li>has a bullet point next to it</li>
	</ul>	
	
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var unorderedAbout = `
        <strong>Unordered lists</strong> "&lt;ul&gt;" are the first <em>"container"</em> code you've come across so far.<br><br>
		When a <strong>block</strong> code is a <em>container</em> it passes information onto the other codes <em>inside</em> it.<br><br>
		The code that is contained in &lt;ul&gt; are "&lt;li&gt;s" or <em>"list items"</em><br><br>
		Each &lt;li&gt; creates a new, smaller block inside the unordered list - and those blocks are indented.<br><br>
		The &lt;ul&gt; tells the &lt;li&gt; codes that they should have bullet points to the left of their blocks.<br><br>
		Here is a visual with the &lt;ul&gt; <em>container</em> in <span style="color:red;">red</span> and the &lt;li&gt;s in <span style="color:green;">green</span>:
		
		<ul style="border:1px solid black; background-color:red; padding-top:2px; padding-bottom:2px; padding-right:2px;">
			<li style="border:1px solid black; background-color:green;">Chips</li>
			<li style="border:1px solid black; background-color:green;">Dip</li>
			<li style="border:1px solid black; background-color:green;">Hot Dogs</li>
		</ul> 
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(unorderedHTML, unorderedAbout);
});
// Repeat the above for other dropdown menu items
document.getElementById('ordered').addEventListener('click', function() {
    // Define the HTML code for Headings
    var orderedHTML = `<!DOCTYPE html>
<html>
    <head>
    
    </head>
    <body>
		<h2>To Do</h2>
		<ol>
			<li>Call the Doctor.</li>
			<li>Clean my Bedroom.</li>
			<li>Do the dishes.</li>
		</ol>
	
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var orderedAbout = `
       <strong>Ordered lists</strong> or &lt;ol&gt; are just like <strong>unordered lists</strong> &lt;ul&gt;.<br><br>
	   They act as containers that pass information onto &lt;li&gt; tags.<br><br>
	   Unlike <strong>unordered lists</strong>, <strong>ordered lists</strong> use numbers instead of bullet points.<br><br>
	   They are usually used to show a list that has an order of importance. 
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(orderedHTML, orderedAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('images').addEventListener('click', function() {
    // Define the HTML code for Headings
    var imagesHTML = `<!DOCTYPE html>
<html>
    <head>
    
    </head>
    <body>
		
		<img src="https://resources.finalsite.net/images/f_auto,q_auto/v1677160140/waterburyk12ctus/pcvrfbvyzjueuikoeadk/WestSideMiddleSchool.png">
	
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var imagesAbout = `
       <strong>Images</strong> or &lt;img&gt;, are tags that have a new feature: <i>attributes</i>.<br><br>
	   You'll notice that after the tag name that there is additional text: <i>src="the image address goes here"</i> "src" is the <b>source</b> attribute.<br><br>
	   Attributes give the browser more instructions on how to run the code. In this case, we are telling the browser that the <i>source</i> or <i>"src"</i> of our image
	   is from <a target="_blank" href="https://resources.finalsite.net/images/f_auto,q_auto/v1677160140/waterburyk12ctus/pcvrfbvyzjueuikoeadk/WestSideMiddleSchool.png">"https://resources.finalsite.net/images/f_auto,q_auto/v1677160140/waterburyk12ctus/pcvrfbvyzjueuikoeadk/WestSideMiddleSchool.png"</a><br><br>
		To get an image <i>source</i> you'll need to search for and right click the image you want and select <i>"copy image address"</i> then paste it into the <i>"src"</i> attribute.<br><br>
		Image tags are considered <strong>empty tags</strong>, so they don't need an end tag.
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(imagesHTML, imagesAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('attributes').addEventListener('click', function() {
    // Define the HTML code for Headings
    var attributesHTML = `<!DOCTYPE html>
<html>
    <head>
    
    </head>
    <body>
		<p title="My favorite movie plot">A long time ago in a galaxy far, far away...</p>
		
		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png" alt="star wars logo" width="200px">
	
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var attributesAbout = `
       Look at the code, do you notice the words "my favorite movie plot" <em>aren't</em> showing up on the screen right away? You should notice that this &lt;p&gt; tag has an <strong>attribute</strong> called "title". <br><br>
	   As we saw in the &lt;img&gt; tag, attributes give the browser more instructions on how to run a code. In this case we are telling the browser to give the paragraph a <i>tooltip</i>, which is a title <u>that
	   shows up when you put your cursor over the paragraph.</u> Try it out!<br><br>
	   To make an attribute, first, it has to be in the <b>start</b> tag of a given code. It is always followed by an equals "=" sign, and then a <b>string</b> that contains the information we are looking to use.<br><br>
	   In this case <strong>title</strong> is the attribute name, followed by the <strong>=</strong> sign, followed by the string <strong>"My favorite movie plot"</strong>.<br><br>
	   You'll be seeing a lot of attributes going forward, so remember how they are set up! Many codes have more than one attribute!<br><br>
	   How many attributes does the &lt;img&gt; tag for the <i>Star Wars</i> logo have? What do they do? (Use <a href="https://www.google.com/search?q=what+does+the+alt+attribute+do&oq=what+does+the+alt+attr&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBwgBEAAYgAQyBggCEEUYOTIICAMQABgWGB4yCggEEAAYDxgWGB4yCggFEAAYDxgWGB4yCAgGEAAYFhgeMgYIBxBFGEDSAQgzMjQyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8&safe=active&ssui=on" target="_blank">Google</a> to search them!)
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(attributesHTML, attributesAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('css-colors').addEventListener('click', function() {
    // Define the HTML code for Headings
    var csscolorsHTML = `<!DOCTYPE html>
<html>
    <head>
    	<style>
			p{
				color:red;
			}
		</style>
    </head>
    <body>
		
		<p>All the paragraphs are now red!</p>
		<p>Try adding one of your own!</p>
		
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var csscolorsAbout = `
       Up until now, we haven't done much with the <b>head</b> tag. Now you will notice a new tag called the &lt;style&gt; tag inside of it. This tag allows us to use a new type of code: Cascading Style Sheets - also known as <i>CSS</i>.<br><br>
	   Inside the &lt;style&gt; tag, you'll see a "p" followed by a pair of curly braces { }. Inside the braces is the command "color:red;" That is CSS code!<br><br>
	   The CSS code here tells the computer to take all "p" tags and color the text as <span style="color:red;">red</span>. There are tons of different CSS codes that change everything from background-colors to the size and shape of block elements
	   on a screen! You could spend all day customizing your website using CSS.<br><br>
	   Of course, there are many more colors than just <span style="color:red;">red</span>. RGB (red, green, blue) allows us to pick from over 16 million colors! For instance, if you instead did: p{color:rgb(0,0,255);} you will get <span style="color:rgb(0,0,255);">blue!</span> <a href="https://www.google.com/search?q=rgb+color+picker&oq=rgb+color&gs_lcrp=EgZjaHJvbWUqDAgAEEUYOxixAxiABDIMCAAQRRg7GLEDGIAEMgoIARAAGLEDGIAEMgYIAhBFGEAyBggDEEUYOTIGCAQQRRg7MgoIBRAAGLEDGIAEMgoIBhAAGLEDGIAEMgYIBxBFGEDSAQgxMzc5ajBqOagCALACAQ&sourceid=chrome&ie=UTF-8&safe=active&ssui=on" target="_blank">Go here if you want to pick a different color.</a><br><br>
	   Lastly, you will notice that there is a semi-colon or ";" in the CSS code. This is <b>very important to remember</b>! It tells the browser that the instruction is over. If you leave it out, it will not know that you are done telling it what to do!
	    
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(csscolorsHTML, csscolorsAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('combine-css').addEventListener('click', function() {
    // Define the HTML code for Headings
    var combinecssHTML = `<!DOCTYPE html>
<html>
    <head>
    	<style>
		p, h1{
				
			color:blue;
		}
		</style>
    </head>
    <body>
		<h1>This heading 1 is colored blue</h1>
		<p>This paragraph is colored blue</p>
	
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var combinecssAbout = `
		If you ever notice that you are using the same CSS code for different things, there is a way to <i>combine</i> the codes to make it faster!<br><br>
		Notice that we wrote "p, h1{ color:blue; }" this means that both the &lt;p&gt; and &lt;h1&gt; tags will be colored <span style="color:blue;">blue</span>. Just add a comma inbetween the
		two tag names so that the browser knows that you want more than one.<br><br>
		Try adding the &lt;h2&gt; tag to the list of tags for that CSS code, then use the &lt;h2&gt; tag to see it in action.
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(combinecssHTML, combinecssAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('ids').addEventListener('click', function() {
    // Define the HTML code for Headings
    var idsHTML = `<!DOCTYPE html>
<html>
    <head>
    	<style>
		
		#cats{color:red;}
			
		#dogs{color:blue;}
		
	</style>
    </head>
    <body>
		<p id="cats">Cats are very independent usually</p>
		<p id="dogs">Dogs are pack animals, and like to be social</p>	
	
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var idsAbout = `
       <strong>Ids</strong> are <i>attributes</i> that allows us to select a specific line of code.<br><br>
	   <strong>Ids</strong> are unique to that one line of code and can't be reused.<br><br>
	   In this case, the &lt;p&gt; tags have two different colors because we assigned the colors through their <strong>ids</strong> not their tag names.<br><br>
	   Note that when you use an <strong>id</strong> in CSS that you must add a "#" symbol. This tells the browser to look for an <strong>id</strong>, not a tag name.<br><br> 
	   An <b>id</b> will not work if you forget to put it in as an attribute! Look at the &lt;p&gt; tags, the attribute id="cat" and id="dog" are there to set that up.
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(idsHTML, idsAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('classes').addEventListener('click', function() {
    // Define the HTML code for Headings
    var classesHTML = `<!DOCTYPE html>
<html>
    <head>
	<style>
    	.silly{
		color:blue;
		}
	</style>
    </head>
    <body>
	<h1 class="silly">This heading is blue</h1>
	<p class="silly">This paragraph is blue</p>
	<ul class="silly">
		<li>This unordered list is blue.</li>
		<li>This unordered list is blue.</li>
		<li>This unordered list is blue.</li>
	</ul>
	
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var classesAbout = `
       <strong>Classes</strong> are similar to <strong>ids</strong>.You can come up with any name you'd like for a <strong>class</strong> or <strong>id</strong>, as long as it is <i>one word</i>.<br><br>
	   In this case I used the word <em>silly</em> as my class.<br><br>
	   If you need to use more than one word, you can add dashes to keep it one word. For example <i><span style="color:red;">class</span>="two-words"</i>.<br><br>
	   Unlike <strong>id</strong>, <strong>class</strong> can be used with <em>more than one</em> code - just like in the example here. The h1, p and ul are all assigned the "silly" class. <br><br>
	   Make sure to add a period "." when using a <strong>class</strong> in CSS. 
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(classesHTML, classesAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('external').addEventListener('click', function() {
    // Define the HTML code for Headings
    var externalHTML = `<!DOCTYPE html>
<html>
    <head>
    
    </head>
    <body>
		<a href="https://www.google.com" target="_blank">Take me to Google.com!</a>
	
		<p>This is a paragraph with an <a href="https://www.w3schools.com/html/html_links.asp" target="_blank">external link</a> attached to a few words.</p>
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var externalAbout = `
       Our new tag is the <strong>&lt;a&gt;</strong> tag, also known as the <em>anchor</em> tag.<br><br>
	   The <em>anchor</em> tag allows us to make <em>hyperlinks</em> or the things that you click on to take you somewhere else!<br><br>
	   The type of hyperlink shown in the programming window right now is known as an <strong>external</strong> link. This means it takes you to a different page - in this case, Google.<br><br>
	   When you make an external link you need to put in the <em>entire</em> web address, including "https://www." This can usually be copy and pasted from the address bar
	   at the top of your browser.<br><br>
	   You'll notice two different <em>attributes</em> here: <b>href</b> and <b>target</b><br><br>
	   <b>href</b> stands for "hyper reference" meaning where the link is pointing to.<br><br>
	   <b>target</b> handles how the link is opened. In this case we said "_blank" which means it will open in a new blank tab.<br><br>
	   The &lt;a&gt; tag can be used as either a block or inline code. You can have it by itself, or you can wrap it around specific words you want to link with in other codes like &lt;p&gt;.
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(externalHTML, externalAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('internal').addEventListener('click', function() {
    // Define the HTML code for Headings
    var internalHTML = `<!DOCTYPE html>
<html>
    <head>
    
    </head>
    <body>
		<!-- Internal links jump to another element in this preview. -->
		<a href="#over-here">Click here to go down to the paragraph below</a>
		<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		<p id="over-here">This is the destination of the link!</p>
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var internalAbout = `
	   <b>Internal links</b> use the &lt;a&gt; tag just like <b>external</b> links. The difference is that <b>internal links</b> jump you to a different part of the page you
	   are on.<br><br>
	   To do this, put the <i>id</i> of a code in the link's "href" attribute. This will link the code that is associated with that id. Class cannot be used for internal links since it
	   can be used for more than one location.<br><br>
	   You will notice that the href also uses the "#" to identify an "id" just like we do in CSS.
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(internalHTML, internalAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('a2').addEventListener('click', function() {
    // Define the HTML code for Headings
    var advanced2HTML = `<!DOCTYPE html>
<html>
    <head>
	<style>
		table,th,td{
			border:1px solid black;
			text-align: center;
			}
	</style>
	
    </head>
    <body>
		<table>
			<tr>
			<th>Student</th>
			<th>Grade</th>
			<th>Age</th>
			</tr>
			
			<tr>
			<td>Alex</td>
			<td>76</td>
			<td>14</td>
			</tr>
			
			<tr>
			<td>Jane</td>
			<td>90</td>
			<td>13</td>
			</tr>
			
			<tr>
			<td>Sam</td>
			<td>62</td>
			<td>13</td>
			</tr>
		</table>	
	
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var advanced2About = `
       <strong>Tables</strong> are a great way to organize information in a way that is easy to read.<br><br>
	   They come with four different basic tags: &lt;table&gt;, &lt;tr&gt;, &lt;th&gt;, and &lt;td&gt;.<br><br>
	   <b>&lt;table&gt;</b> tells the browser that we are making a table.<br><br>
	   <b>&lt;tr&gt;</b> creates a "table row" for that table. This is used for each horizontal line of information.<br><br>
	   <b>&lt;th&gt;</b> displays the row information as "table head" information. This will make it <b>bold</b> by default because it is the labels of the table.<br><br>
	   <b>&lt;td&gt;</b> displays the row information as "table data" information. This is where your table information will go.<br><br>
		
		Finally, to make the table easier to see, we have two CSS codes: <br><br><em>border</em> which adds a 1 pixel wide solid black border around the table, table head, and table data elements <br><br>and<br><br>
		<em>text-align</em> which centers the text inside the table head and table data elements.
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(advanced2HTML, advanced2About);
});

// Repeat the above for other dropdown menu items
document.getElementById('comment').addEventListener('click', function() {
    // Define the HTML code for Headings
    var commentHTML = `<!DOCTYPE html>
<html>
    <head>
    
    </head>
    <body>
		<!-- This is a comment -->
		<!-- Comments are lines that are ignored by the browser -->
		<!-- We use them to write notes to ourselves that won't show up in the finished website!-->
		
		<p>This is a paragraph, not a comment. Look at the programming window for the comments!</p>
	
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var commentAbout = `
       At a certain point, your code will get rather large, and it is important to leave notes to yourself about what a certain code's job is.<br><br>
	   This is where <b>comments</b> come into play.<br><br>
	   A HTML comment tag starts with &lt;!-- and ends with --&gt; - anything that you write inbetween those will be ignored by your browser.
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(commentHTML, commentAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('comment-out').addEventListener('click', function() {
    // Define the HTML code for Headings
    var commentoutHTML = `<!DOCTYPE html>
<html>
    <head>
    
    </head>
    <body>
		
		<p>One of my codes was not working properly, so I "commented it out" to shut it off temporarily until I figure out what is wrong.</p>
		
		<!-- <h1>This is the broken code</h2> -->
	
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var commentoutAbout = `
       <strong>Commenting out</strong> is a way of using comments to shut off code. <br><br>
	   This is a useful <em title="To look for and remove errors" style="cursor:default;"><u>debugging</u></em> technique, since it doesn't delete the code, and you can store it for later use.<br><br>
	   Look at the example in the programming window and see which code is shut off. Bonus: why didn't the code work as expected? 
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(commentoutHTML, commentoutAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('family').addEventListener('click', function() {
    // Define the HTML code for Headings
    var familyHTML = `<!DOCTYPE html>
<html>
    <head>
    	<style>
			#hel{
				font-family:helvetica;
			}
			#imp{
				font-family:impact;
			}
			#com{
				font-family:Comic Sans MS;
			}
		</style>
    </head>
    <body>
		<p id="hel">This is helvetica</p>
		<p id="imp">This is impact</p>
		<p id="com">This is comic sans</p>
	
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var familyAbout = `
       <b>Font families</b> are the style of font that is used when writing in html. This is applied through the "font-family" property in CSS.<br><br>
	   <a href="https://www.w3.org/Style/Examples/007/fonts.en.html" target="_blank">Here is a list of CSS font families for you to try!</a>
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(familyHTML, familyAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('font-size').addEventListener('click', function() {
    // Define the HTML code for Headings
    var fontsizeHTML = `<!DOCTYPE html>
<html>
    <head>
    	<style>
		#small{font-size:10px;}
		#medium{font-size:20px;}
		#large{font-size:35px;}
	</style>
    </head>
    <body>
		
	<p id="small">This is font-size:10px</p>
	<p id="medium">This is font-size:20px</p>
	<p id="large">This is font-size:35px</p>
	
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var fontsizeAbout = `
       <b>Font-size</b> is a CSS property that changes the size of text in an element, like a paragraph or heading.<br><br>
	   Note that the size is measured in <em>px</em> which stands for <em>pixels.</em> though this isn't the only unit of measure available, it is a good place to start.
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(fontsizeHTML, fontsizeAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('font-weight').addEventListener('click', function() {
    // Define the HTML code for Headings
    var fontweightHTML = `<!DOCTYPE html>
<html>
    <head>
    <style>
	#style{
			font-style:italic;
		}
	#weight{
			font-weight:bold;
		}
	</style>
    </head>
    <body>
		
	<p id="style">This uses font-style:italic;</p>
	<p id="weight">This uses font-weight:bold;</p>
    
	</body>
</html>`;
    // Define the content for Headings in the "About" article
    var fontweightAbout = `
       <b>Font-weight</b> and <i>font-style</i> are CSS properties that are often used to pass <b>bold</b> or <i>italics</i> without having to use the individual tags of &lt;b&gt; and &lt;i&gt; over and over.<br><br>
	   This is especially useful if you have a <i>class</i> that is supposed to always be italicized or bold. 
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(fontweightHTML, fontweightAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('valid').addEventListener('click', function() {
    // Define the HTML code for Headings
    var validHTML = `<!DOCTYPE html>
<html>
    <head>
    
    </head>
    <body>
		<p>Let's see if this code needs anything else for it to run properly!</p>
		<p><a href="https://validator.w3.org/#validate_by_input" target="_blank">Click on this link</a> and copy paste this code into the validator there!</p>
	
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var validAbout = `
       A <b>validator</b> is a tool that allows HTML developers to check if their code is correct. Copy paste the code in the programming window into the validator and look at the two messages that pop up at the bottom after you click "Check"<br><br>
	   A <b>Warning</b> is usually not a huge concern, but it helps make the website run better. In this case they want you to change your first &lt;html&gt; tag to &lt;html lang="en"&gt; This gives it the <em>language attribute</em> that tells the browser what language the page is written in. In this case we put "en" which means "English". <br><br>
	   An <b>Error</b> is usually more of a critical fix. The validator wants you to put in a <em>title</em> tag like this: &lt;title&gt;My Website&lt;/title&gt; inside the &lt;head&gt; tags.<br><br>
	   You will notice it mentions a <em>child</em> element. Each tag you create is considered an <em>element</em>, some of them are <em>parent</em> elements and some are <em>child</em> elements. In this case the "head" tag is the parent and the "title" tag was the child.<br><br>
	   Make both the "lang" and "title" fixes and try the validator again. See if your code passes! 

		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(validHTML, validAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('goog').addEventListener('click', function() {
    // Define the HTML code for Headings
    var googHTML = `<!DOCTYPE html>
<html lang="en">
    <head>
    	<title>My Website</title>
    </head>
    <body>
		
	
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var googAbout = `
        Now that you've got some basic HTML and CSS skill it's time to get a website up and running.<br><br>
		Build a basic webpage with the programming screen. When you are finished, copy the code.<br><br>
		<a href="https://www.youtube.com/watch?v=2VIrsvVw6Os" target="_blank">Watch this video</a> on how to <em>embed</em> your webpage onto a full page embed. <br><br>
		Click here to go to <a href="https://sites.google.com" target="_blank">Google Sites</a> to get started!<br><br>
		<strong>Note:</strong> once you have embedded your code, look for the pencil icon on that Google Sites editor if you want to edit your code again.
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(googHTML, googAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('spans').addEventListener('click', function() {
    // Define the HTML code for Headings
    var spansHTML = `<!DOCTYPE html>
<html>
    <head>
    <style>
		.red{
			color:red;
		}
	</style>	
    </head>
    <body>
		<p>Here is an example of a <span class="red">span</span> that is used to <span class="red">color specific</span> words with CSS!</p>
	
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var spansAbout = `
       The <b>Span</p> tag or &lt;span&gt; is used to pass CSS instructions onto areas within a block element.<br><br> Think of it like a super version of the &lt;b&gt; tag where
	   you can change almost anything about a specific word or section just by grouping it into "span".
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(spansHTML, spansAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('divs').addEventListener('click', function() {
    // Define the HTML code for Headings
    var divsHTML = `<!DOCTYPE html>
<html>
    <head>
    <style>
	
	.infobox{
		width:50%;
		border:1px solid lightgrey;
		text-align:center;
	}
	
	.infobox h2{
		background-color:black;
		color:white;
		margin-top:0px;
	
	}
	
	.infobox p{
		background-color:white;
		
	}
	
	</style>
    </head>
    <body>
		<div class="infobox">
			<h2>My Info Box</h2>
			<p>Here is where I would put my information for anyone to read!</p>
		</div>
	
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var divsAbout = `
       A while back we spoke about <b>containers</b>, which hold other codes inside of them. <b>Div</b> or "division" &lt;div&gt; is a "container" that can be
	   customized. <br><br>By using &lt;div&gt; we can group things together and change them all at once. It takes a while to master, so don't get discouraged!<br><br>
	   You will also notice in the CSS code that I wrote ".infobox h2" and ".infobox p" without any commas inbetween. This uses the <b>div</b> "infobox" and passes the information to
	   the h2 or p tags within that <b>div</b> container. Try messing with the CSS and see what it does the to <b>div</b>!
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(divsHTML, divsAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('dimensions').addEventListener('click', function() {
    // Define the HTML code for Headings
    var dimensionsHTML = `<!DOCTYPE html>
<html>
    <head>
    <style>
	#container{
		width:300px;
		height:300px;
		border:1px solid red;
	}
	.infobox{
		width:50%;
		height:50%;
		border:1px solid lightgrey;
		text-align:center;
	}
	
	.infobox h2{
		background-color:black;
		color:white;
		margin-top:0px;
	
	}
	
	.infobox p{
		background-color:white;
		
	}
	
	</style>
    </head>
    <body>
	<div id="container">
		<div class="infobox">
			<h2>My Info Box</h2>
			<p>Here is where I would put my information for anyone to read!</p>
		</div>
	</div>
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var dimensionsAbout = `
       <b>Width</b> and <b>height</b> are both CSS properties that change the size of an element.<br><br>
	   When a width or height are set to "px" that will measure it in pixels.<br><br>
	   When a width or height are set to "%" the block will take up that much of a percent of <b>the container it is in</b><br><br>
	   To see how this works, try changing the width of .infobox in the CSS code and keep it "%". At 100% it fills #container, not 100% of the screen.  
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(dimensionsHTML, dimensionsAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('overflows').addEventListener('click', function() {
    // Define the HTML code for Headings
    var overflowsHTML = `<!DOCTYPE html>
<html>
    <head>
    <style>
	#container{
		width:300px;
		height:300px;
		border:1px solid red;
		overflow:auto;
	}
	.infobox{
		width:200%;
		height:200%;
		border:1px solid lightgrey;
		text-align:center;
	}
	
	.infobox h2{
		background-color:black;
		color:white;
		margin-top:0px;
	
	}
	
	.infobox p{
		background-color:white;
		
	}
	
	</style>
    </head>
    <body>
	<div id="container">
		<div class="infobox">
			<h2>My Info Box</h2>
			<p>Here is where I would put my information for anyone to read!</p>
		</div>
	</div>
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var overflowsAbout = `
       In this example, you will see that the "infobox" has a <b>width</b> and <b>height</b> that are 200%. This means that they are double the size of the container
	   that they are in. When an element becomes bigger than the container it is in, it goes into <b>overflow</b>.<br><br>
	   
	   If you look at the "container", you will see that it has overflow:auto;. This means that it will automatically include a left and right slider if the element inside becomes too wide
	   and it will add an up and down slider if the element inside becomes too tall. 
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(overflowsHTML, overflowsAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('positions').addEventListener('click', function() {
    // Define the HTML code for Headings
    var positionsHTML = `
<!DOCTYPE html>
<html>
<head>
    <style>
        .stat {
            border: 1px solid grey;
            width: 100px;
            height: 100px;
        }

        #rel {
            position: relative;
            left: 40px;
            border: 1px solid grey;
            width: 100px;
            height: 100px;
        }

        #fix {
            position: fixed;
            margin-right: 20px;
            border: 1px solid grey;
            width: 100px;
            height: 200px;
            bottom: 0;
            right: 0;
        }

        #abs {
            position: absolute;
            border: 1px solid grey;
            width: 100px;
            height: 100px;
            bottom: 0;
            right: 0;
			overflow:auto;
        }

        #container {
            position: relative;
			margin-top:0px;
            width: 200px;
            height: 200px;
            border: 1px solid red;
			overflow:auto;
        }
    </style>
</head>
<body>

<div class="stat"><b>STATIC</b></div>
<div id="rel"><b>RELATIVE</b> +40 pixels to the left.</div>
<div id="fix"><b>FIXED</b></div>
<p id="container">This container is holding a span that is using "absolute" positioning.
    <span id="abs"><b>ABSOLUTE</b></span>
</p>
<br><br><br><br><br><br><br><br><br><br><br><br>
<div class="stat" style="color:rgba(0,0,0,0); border:none;"></div>
</body>
</html>`;
    // Define the content for Headings in the "About" article
    var positionsAbout = `
       The <b>position</b> CSS property has several common modes: static, relative, fixed, and absolute.<br><br>
	   <b>Static</b> is the default, the element is stacked above the next one in the program like normal.<br><br>
	   <b>Relative</b> allows the position to be changed "relative" to the original position. In the example provided, the original location has been moved 40 pixels to the left - making the object appear to have moved 40 px to the right.<br><br>
	   <b>Fixed</b> removes the element from the flow completely, and it can now overlap other elements. It also stays put even during scrolling. <br><br>
	   <b>Absolute</b> removes the element from the normal flow like fixed, but positions it relative to its "ancestor" or containing element. In the example provided, the box is now being positioned based on the red box, not the body of the page.<br><br>
	   Note: for <b>Absolute</b> to work, the containing element must also have a non-static position. For instance, our red box is positioned "relative", but I left it in its original location.
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(positionsHTML, positionsAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('z-index').addEventListener('click', function() {
    // Define the HTML code for Headings
    var zindexHTML = `<!DOCTYPE html>
<html>
    <head>
		<style>
    	#war{
			position:fixed;
			z-index:0;
		}
		
		#words{
			color:white;
			text-shadow:2px 1px 1px red;
			font-size:35px;
			position:fixed;
			margin-top:75px;
			z-index:1;
		}
		</style>
    </head>
    <body>
		<img id="war" src="https://resources.finalsite.net/images/f_auto,q_auto/v1677160140/waterburyk12ctus/pcvrfbvyzjueuikoeadk/WestSideMiddleSchool.png">
		<p id="words">Warrior Pride!<p>
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var zindexAbout = `
       	 <b>Z-index</b> tells the browser what position an element is in the foreground or background.<br><br>
		 The higher the z-index, the closer to the foreground something is.<br><br>
		 The picture has a z-index of 0 and "Warrior Pride" has a z-index of 1. This makes it so that "Warrior Pride" shows up on top!
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(zindexHTML, zindexAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('padding').addEventListener('click', function() {
    // Define the HTML code for Headings
    var paddingHTML = `<!DOCTYPE html>
<html>
    <head>
    	<style>
		p{
			border:1px solid black;
		}
		
		#padall{
			padding:5px;
			padding:10px;
		}
		#padleft{
			padding-left:10px;
		}
		</style>
    </head>
    <body>
		<p>This has no padding</p>
		<p id="padall">This has 10px of padding all around</p>
		<p id="padleft">This has 10px of padding only on the left</p>
	
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var paddingAbout = `
       <b>Padding</b> increases the space <em>inside</em> the element.<br><br>
	   You can either just use padding to pad everything, or add a direction that you want
	   padded more or less.<br><br>
	   The last pad code to be written is the one that is used. You'll see in "padall" that there is
	   an useless "padding:5px;" property. It is being overwritten by "padding:10px;"
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(paddingHTML, paddingAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('margins').addEventListener('click', function() {
    // Define the HTML code for Headings
    var marginsHTML = `<!DOCTYPE html>
<html>
    <head>
    	<style>
		p,body{
			border:1px solid black;
		}
		
		#margnone{
			margin:0;
		}
		
		#margall{
			margin:5px;
			margin:10px;
		}
		#margleft{
			margin:0px;
			margin-left:10px;
		}
		</style>
    </head>
    <body>
		<p id="margnone">This has no margin</p>
		<p id="margleft">This has 10px of margin only on the left</p>
		<p id="margall">This has 10px of margin all around</p>
		
	
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var marginsAbout = `
       <b>Margins</b> are the space "between" elements in a container. In this case, "body" is the container and each paragraph is an element inside it.<br><br>
	   Elements sometimes have a margin to start with. For instance the "body" has a margin since it does not reach the edges of the webpage. If you wish to 
	   remove that default margin, put "margin:0" in the css for that object, just like we did for "#margnone".<br><br>
	   Remember that margins and padding add to the overall width and height of elements within a container. This means that, if you are trying to put something side-by-side that
	   you need to take the margins and padding (as well as borders) into account.<br><br>
	   For example:<br><br>
	   You could have a container that is 400px wide. Inside that container you have two info boxes that are 200px each. Normally they would fit side by side. However, each 
	   of your info boxes have a margin of 5px all around them. This means that you now have 420px in the 400px container (5px left + infobox + 5px right + 5px left + infobox + 5px right = 420px) and they will not fit properly. 
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(marginsHTML, marginsAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('float').addEventListener('click', function() {
    // Define the HTML code for Headings
    var floatHTML = `<!DOCTYPE html>
<html>
    <head>
    	<style>
		
	.infobox{
		float:left;
		width:48%;
		background-color:lightgrey;
		border:0.25vw solid black;
		margin-left:2px;
		text-align:center;
	}
			
	.infobox h2{
		margin:0;
		background-color:black;
		color: white;
	}
			
	.infobox p{
		margin:0;
		background-color:white;
		height:200px;
	}
	</style>
    </head>
    <body>
	<div class="infobox">
		<h2>Information</h2>
		<p>This says stuff</p>
	</div>
	<div class="infobox">
		<h2>Information 2</h2>
		<p>This says other stuff</p>
	</div>
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var floatAbout = `
       <b>Float</b> moves elements (remember, things like paragraph &lt;p&gt; are elements) out of the up and down structure of their container and instead move them
	   to a left or right space.<br><br>
	   Here is an example of a sentence without float:left; and each word acting as an element.:<br><br>
	   <p class="wordex">The</p><p class="wordex">cow</p><p class="wordex">jumped</p><p class="wordex">over</p><p class="wordex">the</p><p class="wordex">moon</p>
	   Now here is an example with all the word "elements" floated to the left:
	   <p class="wordexl">The</p><p class="wordexl">cow</p><p class="wordexl">jumped</p><p class="wordexl">over</p><p class="wordexl">the</p><p class="wordexl">moon</p>
	    
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(floatHTML, floatAbout);
});

// Repeat the above for other dropdown menu items
document.getElementById('m3').addEventListener('click', function() {
    // Define the HTML code for Headings
    var master3HTML = `<!DOCTYPE html>
<html lang="en">
    <head>
	<meta charset="utf-8">
    	<title>My Webpage</title>
    </head>
    <body>
	 
	<p>Make your own website!</p>
	
    </body>
</html>`;
    // Define the content for Headings in the "About" article
    var master3About = `
       So you've finally arrived at <strong>Master 3!</strong> Now you need to create a basic webpage using everything you have learned.<br><br>
	   It should be a webpage about your favorite class or teacher!<br><br>
	   Make sure that it passes <a href="https://validator.w3.org/#validate_by_input" target="_blank">validation</a> and that you post it on <a href="https://www.sites.google.com" target="_blank">Google Sites</a>. Then share the link with your teacher<br><br>
	   
	   If you aren't sure where to start, <a title="Bro Code: CSS website layout in 9 minutes!" href="https://www.youtube.com/watch?v=Hsu8uqQTSV8" target="_blank">here is a great video</a> on how to make a solid basic webpage. It has some new tags and
	   new CSS, but by this point you should be able to know where those go.<br><br>
	   
	   You're welcome to come up to the teacher at any time to ask questions or talk about ideas that you have. <a target="_blank" href="https://www.w3schools.com/html/default.asp">Feel free to look up
	   other CSS and HTML codes</a> to make your website truly unique!
		
		`;
    // Call the function to insert the HTML code and update the "About" content
    handleDropdownItemClick(master3HTML, master3About);
});


// Function to handle tab key press for textarea
function handleTab(event) {
    if (event.keyCode === 9) { // Tab key
        event.preventDefault();
        var textarea = event.target;
        var start = textarea.selectionStart;
        var end = textarea.selectionEnd;
        var spaces = "    "; // Four spaces for indentation
        textarea.value = textarea.value.substring(0, start) + spaces + textarea.value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + spaces.length;
    }
}

// Add event listener to handle tab key press for textarea
document.getElementById('programmingScreen').addEventListener('keydown', handleTab);

    
// Accordion navigation: only one rank submenu can be open at a time.
// Ranks without submenus still load their original standalone lessons.
document.querySelectorAll('.htmlcss-rank-button').forEach(button => {
  button.addEventListener('click', () => {
    const group = button.closest('.htmlcss-rank');
    const lessons = group.querySelector('.htmlcss-lessons');
    const shouldOpen = Boolean(lessons && lessons.hidden);

    document.querySelectorAll('.htmlcss-rank-button').forEach(otherButton => {
      const otherLessons = otherButton.closest('.htmlcss-rank').querySelector('.htmlcss-lessons');
      if (otherLessons) {
        otherLessons.hidden = true;
        otherButton.setAttribute('aria-expanded', 'false');
      }
      otherButton.classList.remove('selected');
    });

    if (lessons) {
      lessons.hidden = !shouldOpen;
      button.setAttribute('aria-expanded', String(shouldOpen));
    }
    button.classList.add('selected');
    document.querySelectorAll('.htmlcss-lesson').forEach(lesson => lesson.classList.remove('selected'));
  });
});
document.querySelectorAll('.htmlcss-lesson').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.htmlcss-lesson').forEach(b=>b.classList.remove('selected'));
  button.classList.add('selected');
}));
document.getElementById('run-htmlcss').addEventListener('click',runCode);
document.getElementById('download-htmlcss').addEventListener('click',downloadCode);
