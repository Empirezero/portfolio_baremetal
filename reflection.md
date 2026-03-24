Week 2 Reflection - Bare Metal

What I Built
Rebuilt the Silicon Savanna portfolio using strictly:
- Vanilla HTML5, CSS3, JavaScript
- Vanilla PHP for backend
- Apache routing via .htaccess

 What I Learned

 Day 1 - The Great Gutting
- Removed all Angular/Laravel abstractions
- Started converting Figma design to raw HTML/CSS
- Realized how much Bootstrap was doing for layout

Day 2 - Manual Routing
- Built a manual router in index.php using $_SERVER['REQUEST_URI']
- Configured .htaccess to redirect all requests to index.php
- Understood what Angular's RouterModule was doing under the hood

 Day 3 - State & Forms
- Handled POST requests manually using $_POST
- Wrote input validation without any library
- Understood what Laravel's request->validate() was abstracting

 Day 4 - The Web Server
- Configured Apache via .htaccess
- Dockerized the application
- Accessed via browser like a real production app

 Day 5 - The Comparison
- Compared bare metal vs framework approach
- Documented what frameworks were doing
- Submitted PR for review

 Key Takeaways
1. Frameworks save time but hide complexity
2. Routing is just pattern matching on URLs
3. Components are just reusable HTML with PHP include()
4. Data binding is just DOM manipulation with extra steps
5. Validation is just if/else checks on input values

Week 2 gave me a deep appreciation for what frameworks do.
Going bare metal made me a better developer because I now understand
what's happening under the hood when I use Angular, Laravel or React.
