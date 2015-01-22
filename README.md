##Contributing:

###One Time Setup:
Fork this repository.
Make sure node.js and npm are installed.
    npm install -g punch

Copy the address of your forked repository to clipboard from it's github page.
In your console, clone your fork onto your local machine.
    git clone paste/address/of/your/fork/here
    cd punch-blog-site
    npm install

###Punch Server to test changes:
    punch server

###Git Workflow:
1. Set up the official repository as upstream
    git remote add upstream https://github.com/fremontcoderdojo/punch-blog-site.git
2. Pull in any current changes from the official repository:
	git pull upstream master
3. Make proposed edits.
4. Push changes to your fork
    git push origin master
5. On github, use the pull request feature to compare your fork with the official repo and make a pull request.



