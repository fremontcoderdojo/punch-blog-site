###One Time Setup:
#####1. Fork this repository.
#####2. Install Node.js and npm
#####3. Install the punch package for node.
    npm install -g punch
#####4. Copy the address of your forked repository to clipboard from it's github page.
#####5. In your console, clone your fork onto your local machine.
    git clone paste/address/of/your/fork/here
    cd punch-blog-site
    npm install

#####To run Punch server to test changes:
    punch server

###Git Workflow:
#####1. Set up the official repository as upstream
    git remote add upstream https://github.com/fremontcoderdojo/punch-blog-site.git
#####2. Pull in any current changes from the official repository:
	
	git pull upstream master
#####3. Make proposed edits.
#####4. Push changes to your fork
    
    git push origin master
#####5. On github, use the pull request feature to compare your fork with the official repo and make a pull request.


