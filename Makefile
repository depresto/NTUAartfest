build:
	yarn build
	AWS_PROFILE=default aws s3 sync --acl public-read dist/ s3://ntuaartfest.org/

deploy:
	yarn build
	scp -r dist/js snaps@140.131.21.155:~/snaps/dist/js
	scp -r dist/css snaps@140.131.21.155:~/snaps/dist/css
	scp dist/index.html snaps@140.131.21.155:~/snaps/dist/
	# scp -r dist/ snaps@140.131.21.155:~/snaps/