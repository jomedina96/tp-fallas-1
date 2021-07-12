run:
	docker build  -f Dockerfile . --rm  -t ajedrecito
	docker run --publish 5000:5000 -e PORT=5000 --rm -it ajedrecito
