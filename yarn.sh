#!/bin/bash

# Installation instructions for Travis CI, example repo using it in production: https://github.com/stipsan/uikit-react

# .travis.yml
# before_install:
#   - bash yarn.sh

echo "Should yarn.lock be regenerated?"
if [[ $TRAVIS_PULL_REQUEST_BRANCH != *"greenkeeper"* ]]; then
	echo "Not a GreenKeeper Pull Request, aborting"
	exit 0
fi

echo "Yes, cloning repo"
git clone "https://"$PUSH_TOKEN"@github.com/"$TRAVIS_REPO_SLUG".git" repo
cd repo

echo "Switching to branch $TRAVIS_PULL_REQUEST_BRANCH"
git checkout $TRAVIS_PULL_REQUEST_BRANCH

# See if commit message includes "update"
git log --name-status HEAD^..HEAD | grep "update" || exit 0

echo "updating lockfile"
yarn

echo "Commit and push yarn.lock"
git config --global user.email "$PUSH_EMAIL"
git config --global user.name "Travis CI"
git config --global push.default simple

git add yarn.lock
git commit -m "chore: update yarn.lock"
PUSH_STATUS=$(git push 2>&1)

if [[ $PUSH_STATUS == "Everything up-to-date" ]]; then
	exit 0
fi

echo "Pushed commit to trigger rebuild, this build will cancel"
exit 1
