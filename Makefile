build:
	yarn build
	AWS_PROFILE=default aws s3 sync --acl public-read dist/ s3://ntuaartfest.org/